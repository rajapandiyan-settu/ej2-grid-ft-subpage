// Selection

window.data = {
  "HeroWithCTA": {
    "Eyebrow": "REACT DATA GRID LIVE DATA",
    "MainTitle": "Build Real-Time React Data Grids with Live Updates",
    "Subtitle": "Display streaming data with automatic updates, smooth animations, and responsive performance for real-time applications.",
    "ViewDemo": "View Demo",
    "ExploreDoc": "Explore Documentation"
  },
  "Preview": {
    "Eyebrow": "INTERACTIVE DEMO",
    "MainTitle": "Experience Real-Time Updates",
    "Subtitle": "Watch live stock prices update automatically with smooth visual indicators."
  },
  "WhyMatters": {
    "Eyebrow": "WHY LIVE DATA UPDATES MATTER",
    "MainTitle": "Keep Users Informed with Real-Time Information",
    "Subtitle": "Enable applications to deliver instant updates and real-time visibility without requiring users to manually refresh data.",
    "Content": "Applications such as trading platforms, monitoring dashboards, IoT solutions, and collaborative tools rely on instant data updates. Users expect to see the latest information without refreshing the page and quickly identify what has changed. Syncfusion React Grid delivers real-time updates by automatically refreshing changed data, highlighting modifications, and maintaining smooth, responsive interactions even during frequent updates.",
    "OverviewTitle": "Syncfusion EJ2 Grid Feature Overview",
    "OverviewContent": "The grid seamlessly synchronizes with data sources such as state management libraries, WebSocket streams, and API responses. Updates are applied efficiently with optimized rendering, visual change indicators, and smooth transitions, ensuring users stay informed while maintaining excellent performance.",
    "KeyCababilitiesTitle": [
      "Automatic Data Refresh",
      "Smooth Animations and Transitions",
      "Efficient Re-Rendering",
      "Selection and Scroll State Preservation",
      "Performance Optimization",
      "Editable Real-Time Data"
    ]
  },
  "ChooseRightApproach": {
    "Eyebrow": "CHOOSE THE RIGHT APPROACH",
    "MainTitle": "Choose the Live Data Strategy That Fits Your Application",
    "Subtitle": "Different applications require different real-time update approaches. Select the strategy that matches your data source and performance requirements.",
    "Options": [
      {
        "Title": "Real-Time Data Binding",
        "Content": "Seamlessly syncs with reactive state changes, instantly reflecting updates without manual intervention.",
        "BestFor": "React apps with Redux, MobX, or Zustand state management.",
        "UseWhen": "Your data layer already provides change notifications."
      },
      {
        "Title": "Periodic Refresh",
        "Content": "Polls your API at defined intervals, ideal for REST endpoints without push capabilities.",
        "BestFor": "Monitoring dashboards with 5-30 second refresh cycles.",
        "UseWhen": "Backend doesn't support WebSockets or server-sent events."
      },
      {
        "Title": "WebSocket Integration",
        "Content": "Delivers sub-second latency with bidirectional real-time communication for critical applications.",
        "BestFor": "Financial trading, live sports scores, and collaborative editing.",
        "UseWhen": "Every millisecond counts and data changes frequently."
      },
      {
        "Title": "Batch Updates",
        "Content": "Aggregates rapid-fire changes into optimized render cycles, preventing UI thrashing.",
        "BestFor": "IoT sensor data and high-volume event streams.",
        "UseWhen": "Receiving hundreds to thousands of updates per second."
      }
    ]
  },
  "Resources": {
    "Eyebrow": "IMPLEMENTATION RESOURCES",
    "MainTitle": "Explore Live Data Demos and Docs",
    "Subtitle": "Find everything you need to implement real-time data updates in your React grid applications.",
    "Options": [
      {
        "Title": "Live Data Documentation",
        "Content": "Comprehensive guide covering data binding strategies, refresh patterns, and update optimization.",
        "ReadGuideORViewDemoTitle": "Read Documentation",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "Real-Time Stock Trading Demo",
        "Content": "Interactive example with live price updates, visual indicators, and WebSocket integration.",
        "ReadGuideORViewDemoTitle": "View Demo",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "WebSocket Integration Guide",
        "Content": "Step-by-step tutorial for connecting your grid to WebSocket streams and handling push updates.",
        "ReadGuideORViewDemoTitle": "See Guide",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "Data Refresh API Reference",
        "Content": "Complete API documentation for refresh methods, batch operations, and update configurations.",
        "ReadGuideORViewDemoTitle": "View API",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "High-Frequency Update Optimization",
        "Content": "Performance tuning strategies for grids handling thousands of updates per second.",
        "ReadGuideORViewDemoTitle": "Learn Optimization",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "Real-Time Dashboard Tutorial",
        "Content": "Build a complete monitoring dashboard with live charts, grids, and alert notifications.",
        "ReadGuideORViewDemoTitle": "Start Tutorial",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "Batch Update Configuration",
        "Content": "Learn to aggregate rapid changes efficiently while maintaining responsive UI rendering.",
        "ReadGuideORViewDemoTitle": "Configure Batching",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "Change Tracking and Indicators",
        "Content": "Implement visual feedback for updated cells with animations, colors, and highlight effects.",
        "ReadGuideORViewDemoTitle": "Add Indicators",
        "ReadGuideORViewDemoLink": ""
      },
      {
        "Title": "Getting Started with Live Data",
        "Content": "Quick start guide to add real-time data capabilities to your React Grid application.",
        "ReadGuideORViewDemoTitle": "Get Started",
        "ReadGuideORViewDemoLink": ""
      }
    ]
  },
  "FAQ": {
    "Eyebrow": "FAQ",
    "MainTitle": "React Data Grid Live Data Questions",
    "Subtitle": "",
    "Options": [
      {
        "Question": "How does the grid handle live data updates?",
        "Answer": "The grid automatically detects changes in the bound data source and updates only the affected cells, maintaining smooth performance without full grid re-renders."
      },
      {
        "Question": "Can I control the refresh rate?",
        "Answer": "Yes, you can configure update intervals for periodic refresh, batch update thresholds for high-frequency data, and enable manual refresh control when needed."
      },
      {
        "Question": "Does live data work with filtering and sorting?",
        "Answer": "Absolutely. When data updates arrive, the grid automatically applies active filters and sort orders, maintaining consistent view state while reflecting new data."
      },
      {
        "Question": "Can I highlight cells that changed?",
        "Answer": "Yes, the grid supports visual indicators for updated cells including background color changes, animations, and custom styling to draw attention to modifications."
      },
      {
        "Question": "How many updates per second can the grid handle?",
        "Answer": "With batch updates enabled, the grid efficiently handles thousands of updates per second by intelligently grouping changes and optimizing render cycles."
      },
      {
        "Question": "Where can I find implementation examples?",
        "Answer": "Check the Implementation Resources section above for live demos, WebSocket integration guides, and complete working examples."
      }
    ]
  },
  "RelatedArticles": {
    "Eyebrow": "Related Articles",
    "MainTitle": "CONTINUE EXPLORING",
    "Subtitle": "Continue Exploring React Data Grid Live Data Experiences.",
    "Options": [
      {
        "Title": "Building Real-Time Trading Platforms",
        "Content": "Architecture patterns and implementation strategies for financial applications with millisecond latency.",
        "ReadArticleLink": ""
      },
      {
        "Title": "WebSocket vs Server-Sent Events vs Polling",
        "Content": "Compare real-time communication protocols and choose the right approach for your use case.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Optimizing React Grid for Live Data",
        "Content": "Performance tuning techniques including render optimization, debouncing, and efficient state updates.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Implementing Visual Change Indicators",
        "Content": "Design patterns for highlighting updated cells with colors, animations, and transition effects.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Batch Update Strategies",
        "Content": "Learn how to efficiently process and render high-frequency streams of incoming data updates.",
        "ReadArticleLink": ""
      },
      {
        "Title": "IoT Dashboard Development Guide",
        "Content": "Build responsive monitoring dashboards that display and manage live IoT device data.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Managing Connection States and Reconnection",
        "Content": "Implement reliable connection handling and recovery strategies for real-time applications.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Live Data Performance Benchmarking",
        "Content": "Measure and optimize grid performance under varying update frequencies and dataset sizes.",
        "ReadArticleLink": ""
      }
    ]
  }
}

// ========== FAQ TOGGLE ==========
function toggleFaq(item) {
    item.classList.toggle('open');
}

document.getElementsByClassName("hero")[0].innerHTML = `<div class="container">
            <div class="hero-eyebrow">${data.HeroWithCTA.Eyebrow}</div>
            <h1>${data.HeroWithCTA.MainTitle}</h1>
            <p class="hero-description">${data.HeroWithCTA.Subtitle}</p>
            <div class="hero-ctas">
                <a href="#" class="btn btn-primary">${data.HeroWithCTA.ViewDemo}</a>
                <a href="#" class="btn btn-secondary">${data.HeroWithCTA.ExploreDoc}</a>
            </div>
        </div>`

document.getElementsByClassName("demo-section")[0].innerHTML = `<div class="container">
            <div class="section-eyebrow">${data.Preview.Eyebrow}</div>
            <h2 class="section-title">${data.Preview.MainTitle}</h2>
            <p class="section-description">${data.Preview.Subtitle}</p>
            <div class="demo-placeholder">
                [Live Grid Demo Component]
            </div>
        </div>`;

document.getElementsByClassName("why-matters")[0].innerHTML = `<div class="container">
            <!-- Two Column Layout -->
            <div class="why-matters-wrapper">
                <!-- LEFT SIDE -->
                <div class="why-matters-left">
                    <div style="color: #0066cc; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 16px;">${data.WhyMatters.Eyebrow}</div>
                    <h2>${data.WhyMatters.MainTitle}</h2>
                    <p class="why-matters-text-large">${data.WhyMatters.Content}</p>
                    <div class="selection-types-list">
                    ${data.WhyMatters.KeyCababilitiesTitle.map(item => `<div class="selection-type-item">${item}</div>`).join('')}
                    </div>
                </div>
                <!-- RIGHT SIDE CARD -->
                <div class="why-matters-right" style="padding-top: 110px;">
                    <div class="why-matters-card">
                        <h3 class="card-title">${data.WhyMatters.OverviewTitle}</h3>
                        <p class="card-description">${data.WhyMatters.OverviewContent}</p>
                    </div>
                </div>
            </div>
        </div>`;

document.getElementsByClassName("capabilities-section")[0].innerHTML = `<div class="container">
            <div class="capabilities-section-header">
                <div class="capabilities-eyebrow">${data.ChooseRightApproach.Eyebrow}</div>
                <h2>${data.ChooseRightApproach.MainTitle}</h2>
                <p class="demo-subtitle">${data.ChooseRightApproach.Subtitle}</p>
            </div>
            <div class="capabilities-grid">
            ${data.ChooseRightApproach.Options.map(item => `
                    <div class="capability-card">
                    <h3>${item.Title}</h3>
                    <p>${item.Content}</p>
                    <div class="capability-label">Best for</div>
                    <div class="capability-scenario">${item.BestFor}</div>
                    <div class="capability-label">Use when</div>
                    <div class="capability-scenario">${item.UseWhen}</div>
                </div>
                `).join('')}
            </div>
        </div>`;

document.getElementsByClassName("resources")[0].innerHTML = `<div class="container">
            <div class="section-eyebrow">${data.Resources.Eyebrow}</div>
            <h2 class="section-title">${data.Resources.MainTitle}</h2>
            <p class="section-description">${data.Resources.Subtitle}</p>
            <div class="resources-grid">
                ${data.Resources.Options.map(item => `
                    <div class="resource-card">
                        <h4>${item.Title}</h4>
                        <p>${item.Content}</p>
                        <a href="${item.ReadGuideORViewDemoLink}" target="_blank">${item.ReadGuideORViewDemoTitle} →</a>
                    </div>
                `).join('')}
                </div>
            </div>
        </div>`;

document.getElementsByClassName("faq")[0].innerHTML = ` <div class="container">
            <div class="section-eyebrow">${data.FAQ.Eyebrow}</div>
            <h2 class="section-title">${data.FAQ.MainTitle}</h2>
            <div class="faq-container">
            ${data.FAQ.Options.map(item => `
                    <div class="faq-item" onclick="toggleFaq(this)">
                        <div class="faq-question">
                            <span class="faq-toggle">+</span>
                            ${item.Question}
                        </div>
                        <div class="faq-answer">
                            ${item.Answer}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;

document.getElementsByClassName("related-articles")[0].innerHTML = `<div class="container">
            <div class="section-eyebrow">${data.RelatedArticles.Eyebrow}</div>
            <h2 class="section-title">${data.RelatedArticles.MainTitle}</h2>

            <div class="articles-grid">
                
            ${data.RelatedArticles.Options.map(item => `
                    <div class="article-card">
                    <h4>${item.Title}</h4>
                    <p>${item.Content}</p>
                    <a href="${item.ReadArticleLink}" target="_blank" class="article-link">Read article →</a>
                </div>
                `).join('')}
                
            </div>
        </div>`;