    
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;


    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    toggleButton.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
      const iconElement = toggleButton.querySelector('i');
      iconElement.className = `fa-solid fa-${theme === 'light' ? 'moon' : 'sun'} text-primary`;
    }
  
  
  var options = {
    chart: {
      type: 'radialBar',
      height: 200,
      sparkline: { enabled: true }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: '70%' },
        dataLabels: {
          name: { show: false },
          value: {
            fontSize: '24px',
            color: 'blue',
            offsetY: 8,
            formatter: function (val) { return val + "%"; }
          }
        }
      }
    },
    series: [75.34],
    colors: ['#4F46E5'],
  };
  var gaugeEl = document.getElementById("gauge-chart");
  var chart = new ApexCharts(gaugeEl, options);
  chart.render();



  var donutOptions = {
    chart: {
      type: 'donut',
      height: 160,
      sparkline: { enabled: true }
    },
    series: [300.56, 135.18, 154.02, 48.96],
    labels: ['Direct', 'Affiliated', 'Sponsored', 'Email'],
    colors: ['#6366F1', '#3B82F6', '#10B981', '#F59E0B'],
    legend: { show: false },
    dataLabels: { enabled: false}
  };
  var donutEl = document.getElementById('donut-chart');
  if (donutEl) {
    donutEl.innerHTML = '';
    var donutChart = new ApexCharts(donutEl, donutOptions);
    donutChart.render();
  }


var lineChart = {
    chart: {
        type: 'line',
        height: 250,      
        toolbar: { show: false }  
    },
    series: [{
        name: 'Current Week',
        data: [10, 15, 20, 18, 22, 25] 
    }, {
        name: 'Previous Week',
        data: [12, 18, 22, 20, 18, 23]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
            style: {
                colors: (document.documentElement.getAttribute('data-theme') === 'dark') ? '#fff' : '#000'
            }
        }
    },
    yaxis: {
        title: {
            text: 'Revenue ($M)',
            style: {
                color: (document.documentElement.getAttribute('data-theme') === 'dark') ? '#fff' : '#000'
            }
        },
        labels: {
            style: {
                colors: (document.documentElement.getAttribute('data-theme') === 'dark') ? '#fff' : '#000'
            }
        }
    },
    stroke: {
        curve: 'smooth'
    },
    colors: ['#10B981', '#8B5CF6'],
    title: {
        text: 'Revenue',
        align: 'center',
        style: {
            color: (document.documentElement.getAttribute('data-theme') === 'dark') ? '#fff' : '#000'
        }
    },
    tooltip: {
        enabled: false
    }
};
var linegraph = new ApexCharts(document.querySelector("#revenue-chart"), lineChart);
linegraph.render();


toggleButton.addEventListener('click', () => {
    setTimeout(() => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        linegraph.updateOptions({
            xaxis: { labels: { style: { colors: isDark ? '#fff' : '#000' } } },
            yaxis: {
                title: { style: { color: isDark ? '#fff' : '#000' } },
                labels: { style: { colors: isDark ? '#fff' : '#000' } }
            },
            title: { style: { color: isDark ? '#fff' : '#000' } }
        });
    }, 10);
});
