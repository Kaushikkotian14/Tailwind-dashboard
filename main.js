    tailwind.config = { darkMode: 'class' };

    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateLineChartTheme(isDark);
    }

    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      updateLineChartTheme(document.documentElement.classList.contains('dark'));
    });

    var toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleDarkMode);
    }


    var gaugeEl = document.getElementById("gauge-chart");
    if (gaugeEl) {
      var chart = new ApexCharts(gaugeEl, {
        chart: { type: 'radialBar', height: 200, sparkline: { enabled: true } },
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
                formatter: val => val + "%"
              }
            }
          }
        },
        series: [75.34],
        colors: ['#4F46E5'],
      });
      chart.render();
    }

    var donutEl = document.getElementById('donut-chart');
    if (donutEl) {
      donutEl.innerHTML = '';
      var donutChart = new ApexCharts(donutEl, {
        chart: { type: 'donut', height: 160, sparkline: { enabled: true } },
        series: [300.56, 135.18, 154.02, 48.96],
        labels: ['Direct', 'Affiliated', 'Sponsored', 'Email'],
        colors: ['#6366F1', '#3B82F6', '#10B981', '#F59E0B'],
        legend: { show: false },
        dataLabels: { enabled: false }
      });
      donutChart.render();
    }

    function getThemeColor(isDark) {
      return isDark ? '#fff' : '#000';
    }

    var linegraph = new ApexCharts(document.querySelector("#revenue-chart"), {
      chart: { type: 'line', height: 250, toolbar: { show: false } },
      series: [
        { name: 'Current Week', data: [10, 15, 20, 18, 22, 25] },
        { name: 'Previous Week', data: [12, 18, 22, 20, 18, 23] }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: { style: { colors: getThemeColor(document.documentElement.classList.contains('dark')) } }
      },
      yaxis: {
        title: { text: 'Revenue ($M)', style: { color: getThemeColor(document.documentElement.classList.contains('dark')) } },
        labels: { style: { colors: getThemeColor(document.documentElement.classList.contains('dark')) } }
      },
      stroke: { curve: 'smooth' },
      colors: ['#10B981', '#8B5CF6'],
      title: {
        text: 'Revenue',
        align: 'center',
        style: { color: getThemeColor(document.documentElement.classList.contains('dark')) }
      },
      tooltip: { enabled: false },
      legend:{
        labels: {
          colors: getThemeColor(document.documentElement.classList.contains('dark'))
        }
      }
      
    });
    linegraph.render();

    function updateLineChartTheme(isDark) {
      linegraph.updateOptions({
        xaxis: { labels: { style: { colors: getThemeColor(isDark) } } },
        yaxis: {
          title: { style: { color: getThemeColor(isDark) } },
          labels: { style: { colors: getThemeColor(isDark) } }
        },
        title: { style: { color: getThemeColor(isDark) } },
        legend: {
          labels: {
            colors: getThemeColor(isDark)
          }
        }
      });
    }

    
