// Selection

window.data = {
  "HeroWithCTA": {
    "Eyebrow": "React Grid Filtering",
    "MainTitle": "Unlock Faster Insights with Advanced Data Grid Filtering",
    "Subtitle": "Help users find exactly what they need using powerful filtering options, including menu, Excel-like, checkbox, and custom filters.",
    "ViewDemo": "View Demo",
    "ExploreDoc": "Explore Documentation"
  },
  "Preview": {
    "Eyebrow": "Interactive Demo",
    "MainTitle": "Try Filtering Modes",
    "Subtitle": "Explore how different filtering experiences work inside Syncfusion React Grid."
  },
  "WhyMatters": {
    "Eyebrow": "Why Filtering Matters",
    "MainTitle": "Find Data Faster",
    "Subtitle": "Clear filtering transforms large datasets into focused, actionable views that help users locate information quickly and make informed decisions.",
    "Content": "A grid should make it easy for people to find the right records without scrolling through noise. Clear filtering turns large datasets into usable views, enabling teams to locate information quickly and make informed decisions.",
    "OverviewTitle": "Flexible Filtering for Real Data Workflows",
    "OverviewContent": "Syncfusion React Grid supports multiple filtering experiences to accommodate different user needs. Developers can choose between Filter Bar, Checkbox Filter, Excel-like Filter, and Menu Filter to create intuitive and efficient data exploration workflows. Filtering improves data discoverability and helps users focus on the records that matter most. Whether users need quick inline searches, multi-value filtering, or advanced condition-based queries, the grid provides built-in tools for every scenario.",
    "KeyCababilitiesTitle": [
      "Filter Bar",
      "Checkbox Filter",
      "Excel-like Filter",
      "Menu Filter",
      "Searchable Filter Choices",
      "Advanced Filter Conditions",
      "Remote Data Filtering",
      "Multi-Column Filtering"
    ]
  },
  "ChooseRightApproach": {
    "Eyebrow": "Choose the Right Approach",
    "MainTitle": "Choose the Right Filtering Experience",
    "Subtitle": "Different workflows require different filtering experiences. Select the filtering mode that best aligns with user expectations and application requirements.",
    "Options": [
      {
        "Title": "Filter Bar",
        "Content": "Display filter inputs directly beneath column headers for immediate filtering.",
        "BestFor": "Quick searches and inline filtering.",
        "UseWhen": "Users want fast filtering directly within the grid."
      },
      {
        "Title": "Checkbox Filter",
        "Content": "Allow users to select one or more values from a searchable list.",
        "BestFor": "Categorical data and multi-value filtering.",
        "UseWhen": "Users need to filter multiple values from a predefined set."
      },
      {
        "Title": "Excel-like Filter",
        "Content": "Provide advanced filtering with operators, conditions, and ranges.",
        "BestFor": "Complex queries, numeric ranges, and advanced filtering scenarios.",
        "UseWhen": "Users require sophisticated filtering rules and conditions."
      },
      {
        "Title": "Menu Filter",
        "Content": "Display compact filter controls within column menus.",
        "BestFor": "Space-efficient filtering and simple comparisons.",
        "UseWhen": "Grid space is limited and filtering should remain compact."
      }
    ]
  },
  "Resources": {
    "Eyebrow": "Implementation Resources",
    "MainTitle": "Get Started with Filtering",
    "Subtitle": "Learn how to implement, customize, and optimize filtering using Syncfusion React Grid documentation and examples.",
    "Options": [
      {
        "Title": "Filtering Documentation",
        "Content": "Learn how to enable, configure, and customize data filtering in the React Data Grid.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/filtering/filtering"
      },
      {
        "Title": "Filter Bar Documentation",
        "Content": "Configure inline filtering directly beneath column headers for fast, interactive searching.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/filtering/filter-bar"
      },
      {
        "Title": "Filter Menu Documentation",
        "Content": "Learn how to use compact menu-based filtering for efficient use of grid space.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/filtering/filter-menu"
      },
      {
        "Title": "Excel-like Filter Documentation",
        "Content": "Build advanced filtering experiences with operators, conditions, ranges, and Excel-style dialogs.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/filtering/excel-like-filter"
      }
    ]
  },
  "FAQ": {
    "Eyebrow": "FAQ",
    "MainTitle": "React Data Grid Filtering Questions",
    "Subtitle": "",
    "Options": [
      {
        "Question": "How do I enable filtering in the React Grid?",
        "Answer": "Enable the allowFiltering property and configure the filterSettings option to select the desired filtering mode."
      },
      {
        "Question": "Which filtering modes are available?",
        "Answer": "Syncfusion React Grid supports Filter Bar, Checkbox Filter, Excel-like Filter, and Menu Filter experiences."
      },
      {
        "Question": "Can I filter multiple columns simultaneously?",
        "Answer": "Yes. Multiple column filters can be applied together to refine the displayed results."
      },
      {
        "Question": "Does filtering work with remote data sources?",
        "Answer": "Yes. Filtering supports remote APIs and server-side data processing for large datasets."
      },
      {
        "Question": "Can filter types be changed dynamically?",
        "Answer": "Yes. Developers can switch filtering modes programmatically during runtime."
      },
      {
        "Question": "Does filtering support text, numeric, and date fields?",
        "Answer": "Yes. The grid includes built-in filtering support for text, numeric, date, datetime, boolean, and other supported column types."
      },
      {
        "Question": "Can I customize filter operators?",
        "Answer": "Yes. Custom operators, templates, and filter logic can be configured to meet business requirements."
      },
      {
        "Question": "Can users clear applied filters?",
        "Answer": "Yes. Individual filters or all active filters can be cleared using built-in Grid APIs."
      },
      {
        "Question": "Can filtering be combined with sorting and grouping?",
        "Answer": "Yes. Filtering works seamlessly with sorting, grouping, paging, searching, and other data operations."
      }
    ]
  },
  "RelatedArticles": {
    "Eyebrow": "Related Articles",
    "MainTitle": "Related Articles",
    "Subtitle": "Continue Exploring React Data Grid Filtering",
    "Options": [
      {
        "Title": "React Data Grid Filtering Guide",
        "Content": "Learn how to configure filtering, customize filtering behavior, and improve data discovery experiences.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Filter Bar vs Menu Filtering",
        "Content": "Compare inline filtering and menu-based filtering to identify the best approach for different workflows.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Advanced Excel-like Filtering",
        "Content": "Build powerful filtering experiences using operators, conditions, ranges, and advanced filter dialogs.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Filtering Large Datasets Efficiently",
        "Content": "Discover best practices for remote filtering, API integration, and scalable grid performance.",
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