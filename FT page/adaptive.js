// Selection

window.data = {
  "HeroWithCTA": {
    "Eyebrow": "React Data Grid Responsive Design",
    "MainTitle": "Responsive React Data Grid Adaptive Layout",
    "Subtitle": "Build data grids that look perfect on every screen. Adapt layouts for desktop, tablet, and mobile with intelligent column hiding, reordering, and touch-friendly interactions.",
    "ViewDemo": "View Adaptive Demo",
    "ExploreDoc": "Explore Documentation"
  },
  "Preview": {
    "Eyebrow": "Interactive Demo",
    "MainTitle": "See Adaptive Layout in Action",
    "Subtitle": "Watch the grid adapt its layout and columns as you switch between device sizes."
  },
  "WhyMatters": {
    "Eyebrow": "Why Adaptive Layout Matters",
    "MainTitle": "Deliver Data Access Across All Devices",
    "Content": "Modern applications must provide a seamless data experience across desktops, tablets, and mobile devices. Adaptive Layout in the Syncfusion React Data Grid automatically adjusts data presentation based on available screen space, ensuring usability without requiring separate implementations for different devices. Whether users access your application from a desktop monitor, tablet, or mobile phone, the grid intelligently reorganizes content, optimizes interactions, and maintains accessibility. Features such as column hiding, column reordering, vertical row rendering, touch-friendly dialogs, and responsive behavior help developers create efficient, user-friendly applications that remain consistent across all screen sizes while maintaining a single codebase.",
    "KeyCababilitiesTitle": [
      "Column Hiding",
      "Column Reordering",
      "Adaptive Dialogs",
      "Mobile-Only Layout",
      "Smart Scrolling",
      "Touch Optimization",
      "Responsive Rendering",
      "Device-Aware UI"
    ]
  },
  "ChooseRightApproach": {
    "Eyebrow": "Adaptive Layout Features",
    "MainTitle": "Choose the Right Adaptive Strategy",
    "Subtitle": "Different screens need different approaches. Syncfusion offers multiple adaptation strategies to fit your data and workflow.",
    "Options": [
      {
        "Title": "Column Hiding",
        "Content": "Automatically hide lower-priority columns on small screens while keeping essential data visible. Users can tap to unhide columns as needed.",
        "BestFor": [
          "Mobile views where space is limited but data breadth is high.",
          "Applications that need to prioritize essential information on smaller screens."
        ],
        "UseWhen": "You need to show core data first, with optional columns accessible on demand."
      },
      {
        "Title": "Column Reordering",
        "Content": "Prioritize column order based on screen size. Show most-viewed columns first on small screens, then expand as space allows.",
        "BestFor": [
          "Workflows where column priority changes by device.",
          "Data-heavy applications where the most important fields vary by device."
        ],
        "UseWhen": "Desktop users want detailed columns; mobile users want quick summaries."
      },
      {
        "Title": "Stacked Layout",
        "Content": "Transform grid rows into vertical card-like stacks on mobile. Each record becomes its own compact card, making mobile browsing natural and touch-friendly.",
        "BestFor": [
          "Mobile interfaces where traditional tables don't work well.",
          "Customer-facing applications that require a mobile-first experience."
        ],
        "UseWhen": "You want to maximize space and create a mobile-optimized experience."
      },
      {
        "Title": "Smart Scrolling",
        "Content": "Adapt scrolling behavior by device. Use horizontal scroll on desktop for many columns; switch to vertical scrolling on mobile with hidden columns available on tap.",
        "BestFor": [
          "Grids with many columns across diverse device types.",
          "Large datasets that cannot fit within the available screen width."
        ],
        "UseWhen": "You want natural scrolling patterns that match user expectations per device."
      }
    ]
  },
  "Resources": {
    "Eyebrow": "Implementation Resources",
    "MainTitle": "Explore Adaptive Layout Demos and Docs",
    "Subtitle": "Find the tools and guides you need to get started with responsive data grids.",
    "Options": [
      {
        "Title": "Adaptive Layout Documentation",
        "Content": "Complete guide to configuring responsive behavior, column hiding, reordering, and layout strategies.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/adaptive"
      },
      {
        "Title": "Render Adaptive Dialogs",
        "Content": "Improve mobile usability by rendering filter, sort, and edit dialogs adaptively. The enableAdaptiveUI property displays dialogs in a responsive full-screen view for smaller screens.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/adaptive#render-adaptive-dialogs"
      },
      {
        "Title": "Vertical Row Rendering",
        "Content": "Display grid rows in a vertical card-like layout to improve readability on mobile devices. Vertical rendering optimizes data visibility and provides a touch-friendly experience on smaller screens.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/adaptive#vertical-row-rendering"
      },
      {
        "Title": "Supported Features in Vertical Row Rendering",
        "Content": "Use vertical row rendering without sacrificing core grid functionality. Features such as paging, sorting, filtering, selection, dialog editing, aggregates, infinite scrolling, and adaptive toolbar actions remain fully supported in the vertical layout.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/adaptive#supported-features-by-vertical-row-rendering"
      },
      {
        "Title": "Mobile-Only Adaptive Layout",
        "Content": "Enable adaptive UI exclusively for mobile devices while preserving the standard desktop grid experience. Configure AdaptiveUIMode as Mobile to apply responsive layouts only on smaller screens.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/adaptive#rendering-an-adaptive-layout-for-smaller-screens-alone"
      },
      {
        "Title": "Switch Between Mobile and Desktop Views",
        "Content": "Dynamically adapt the DataGrid experience for different devices. Use enableAdaptiveUI and rowRenderingMode to switch between desktop and mobile layouts, providing an optimized view based on screen size and device type.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://support.syncfusion.com/kb/article/11484/how-to-switch-the-javascript-datagrid-in-mobile-and-desktop-views"
      }
    ]
  },
  "FAQ": {
    "Eyebrow": "FAQ",
    "MainTitle": "Adaptive Layout Questions",
    "Subtitle": "",
    "Options": [
      {
        "Question": "How does adaptive layout work?",
        "Answer": "Adaptive layout uses CSS media queries and JavaScript to detect screen size and device type, then reorganizes grid content automatically. Columns can hide, reorder, or the entire layout switches to stacked cards on mobile devices without requiring separate code."
      },
      {
        "Question": "Can I customize which columns are hidden on mobile?",
        "Answer": "Yes. You define custom rules for which columns appear at each breakpoint. Set column visibility, priority order, and hiding rules based on screen size. Users can also unhide hidden columns with a tap whenever they need more data."
      },
      {
        "Question": "Does adaptive layout work with remote data?",
        "Answer": "Absolutely. Adaptive layout works seamlessly with remote data sources. The grid adapts its layout based on screen size while maintaining full data loading, paging, filtering, and sorting capabilities from your backend."
      },
      {
        "Question": "What breakpoints are supported?",
        "Answer": "Syncfusion provides preset breakpoints for common device sizes: mobile (<576px), tablet (576px–992px), and desktop (>992px). You can also define custom breakpoints to match your application's specific requirements."
      },
      {
        "Question": "Does the grid reflow when I resize the browser?",
        "Answer": "Yes. The grid responds in real time to window resizing. As you resize from desktop to tablet to mobile widths, the layout automatically adapts, hiding or showing columns and reorganizing content accordingly."
      },
      {
        "Question": "Can users manually unhide columns on mobile?",
        "Answer": "Yes. Users can tap a menu button to reveal hidden columns on mobile. They can temporarily view additional data or switch the layout mode as needed for their workflow."
      },
      {
        "Question": "Can adaptive layouts be used alongside row virtualization?",
        "Answer": "Yes. Adaptive layouts can be combined with row virtualization to efficiently render large datasets while maintaining a responsive user experience across different screen sizes."
      },
      {
        "Question": "Does adaptive layout affect accessibility features?",
        "Answer": "No. Adaptive layouts are designed to preserve keyboard navigation, focus management, and screen reader compatibility, helping maintain an accessible experience on all devices."
      },
      {
        "Question": "Can I customize the layout shown in vertical row mode?",
        "Answer": "Yes. You can customize column visibility, templates, and row presentation to control how data appears when the grid is rendered in a vertical layout."
      },
      {
        "Question": "Will adaptive layout work in landscape and portrait orientations?",
        "Answer": "Yes. The grid automatically adjusts its presentation when device orientation changes, ensuring optimal data visibility in both portrait and landscape modes."
      },
      {
        "Question": "Can adaptive UI be enabled at runtime?",
        "Answer": "Yes. You can dynamically enable or disable adaptive UI and switch rendering modes programmatically based on user preferences, screen size, or application logic."
      },
      {
        "Question": "Does adaptive layout support export operations?",
        "Answer": "Yes. Features such as Excel, PDF, and CSV export remain available in adaptive mode. Users can access export options through the adaptive toolbar when enabled."
      },
      {
        "Question": "Can adaptive layout be used with custom row templates?",
        "Answer": "Yes. Adaptive layouts can work with customized row and column templates, allowing you to maintain a branded and application-specific user experience."
      },
      {
        "Question": "How are toolbar actions displayed on smaller screens?",
        "Answer": "On smaller devices, toolbar actions are optimized for limited screen space. Additional commands can be grouped under an overflow menu while keeping frequently used actions easily accessible."
      },
      {
        "Question": "Does adaptive layout require separate mobile and desktop implementations?",
        "Answer": "No. A single DataGrid configuration can support both desktop and mobile experiences, reducing development effort and simplifying maintenance."
      },
      {
        "Question": "Can adaptive layouts be used in enterprise applications with complex workflows?",
        "Answer": "Yes. Adaptive layouts support advanced grid capabilities such as editing, filtering, selection, exports, and data operations, making them suitable for enterprise-scale applications."
      }
    ]
  },
  "RelatedArticles": {
    "Eyebrow": "Continue Exploring",
    "MainTitle": "Related Articles",
    "Subtitle": "Dive deeper into adaptive layout strategies, best practices, and real-world implementation patterns.",
    "Options": [
      {
        "Title": "Responsive Grid with Parent Container",
        "Content": "Learn how the React Data Grid automatically adjusts its width and layout based on its parent container to provide a responsive experience across different screen sizes.",
        "ReadArticleLink": "https://ej2.syncfusion.com/react/documentation/grid/scrolling/scrolling#responsive-with-parent-container"
      },
      {
        "Title": "Configure Grid Width and Height",
        "Content": "Control grid dimensions using fixed, dynamic, and percentage-based sizing options to create layouts that adapt to various devices and screen resolutions.",
        "ReadArticleLink": "https://ej2.syncfusion.com/react/documentation/grid/scrolling/scrolling#set-width-and-height"
      },
      {
        "Title": "Sticky Header Configuration",
        "Content": "Keep column headers visible while scrolling through large datasets, improving navigation and readability on both desktop and mobile devices.",
        "ReadArticleLink": "https://ej2.syncfusion.com/react/documentation/grid/scrolling/scrolling#sticky-header-configuration"
      },
      {
        "Title": "Auto-Scroll to Selected Row",
        "Content": "Automatically bring selected records into view, helping users quickly locate and interact with data in large scrollable grids.",
        "ReadArticleLink": "https://ej2.syncfusion.com/react/documentation/grid/scrolling/scrolling#auto-scroll-to-selected-row"
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
                <a href="https://ej2.syncfusion.com/react/demos/grid/adaptive-layout/" class="btn btn-primary">${data.HeroWithCTA.ViewDemo}</a>
                <a href="https://ej2.syncfusion.com/react/documentation/grid/adaptive" class="btn btn-secondary">${data.HeroWithCTA.ExploreDoc}</a>
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

document.getElementsByClassName("why-matters")[0].innerHTML = `
<div class="container">

    <div class="section-eyebrow">
        ${data.WhyMatters.Eyebrow}
    </div>

    <h2 class="section-title">
        ${data.WhyMatters.MainTitle}
    </h2>

    <div class="why-matters-body">

        <div class="why-matters-content">
            ${data.WhyMatters.Content}
        </div>

        <div class="why-matters-capabilities">
            <h3>Key Capabilities</h3>

            <div class="selection-types-list">
                ${data.WhyMatters.KeyCababilitiesTitle.map(item => `
                    <div class="selection-type-item">${item}</div>
                `).join('')}
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
                    
                  <ul class="capability-points">
    ${item.BestFor.map(point => `
        <li><strong>Best for:</strong> ${point}</li>
    `).join('')}

    <li><strong>Use when:</strong> ${item.UseWhen}</li>
</ul>
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