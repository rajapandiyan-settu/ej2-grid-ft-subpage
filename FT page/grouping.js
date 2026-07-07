// Selection

window.data = {
  "HeroWithCTA": {
    "Eyebrow": "React Data Grid · Grouping & Aggregates",
    "MainTitle": "Organize Data Intelligently with Powerful Grouping",
    "Subtitle": "Transform complex datasets into meaningful categories with flexible grouping, summaries, and aggregate calculations.",
    "ViewDemo": "View Grouping Demo",
    "ExploreDoc": "Explore Documentation"
  },
  "Preview": {
    "Eyebrow": "Live Sample",
    "MainTitle": "Try It Before You Read It",
    "Subtitle": "Explore grouping and aggregate modes in action. Switch tabs to see each configuration."
  },
  "WhyMatters": {
    "Eyebrow": "Why Grouping & Aggregates Matter",
    "MainTitle": "Turn Large Datasets into Meaningful Summaries",
    "Content": "Grouping and aggregates help users organize large datasets into meaningful categories and instantly view summary information without manually reviewing individual records. The Syncfusion React Data Grid supports drag-and-drop grouping, hierarchical grouping, aggregate calculations, caption summaries, and reactive updates. These capabilities make it easier to analyze trends, compare results, and create interactive reporting experiences. From business dashboards to enterprise applications, grouping and aggregates help transform raw data into actionable insights.",
    "CapabilitiesTitle": "Key Capabilities",

    "KeyCababilitiesTitle": [
      "Data Grouping",
      "Data Summaries",
      "Trend Analysis",
      "Custom Metrics",
      "KPI Reporting",
      "Real-Time Insights",
      "Scalable Processing",
      "Business Reporting"
    ]

  },
  "ChooseRightApproach": {
    "Eyebrow": "Choose the Right Grouping Strategy",
    "MainTitle": "Choose the Right Grouping and Aggregation Strategy",
    "Subtitle": "Different applications require different ways to organize and summarize data. Choose the grouping and aggregation approach that best fits your reporting, analytics, and business workflow requirements.",
    "Options": [
      {
        "Title": "Drag-and-Drop Grouping",
        "Content": "Allow users to organize records dynamically by dragging columns into the grouping area during runtime.",

        "BestFor": [
          "Ideal for self-service reporting and interactive data exploration.",
          "Allows users to organize records without developer assistance."
        ]
        ,
        "UseWhen": "Use when users need to change the grouping themselves at runtime."
      },
      {
        "Title": "Programmatic Grouping",
        "Content": "Set group columns in configuration so the grid always loads in a consistent, pre-defined state.",

        "BestFor": [
          "Suitable for standardized reports and business workflows.",
          "Ensures a consistent grouping experience across all users."
        ]
        ,
        "UseWhen": "Use when the grouping structure must stay consistent for all users."
      },
      {
        "Title": "Built-in Aggregate Functions",
        "Content": "Apply Sum, Average, Count, Min, or Max to any numeric column. Results appear at the group footer and grid footer.",

        "BestFor": [
          "Perfect for financial summaries and KPI reporting.",
          "Provides instant totals, averages, counts, and other insights."
        ]
        ,
        "UseWhen": "Use when standard statistical summaries meet your reporting needs."
      },
      {
        "Title": "Custom Aggregate Functions",
        "Content": "Write a function that receives group data and returns any value — weighted averages, margin ratios, or business KPIs.",

        "BestFor": [
          "Useful for business-specific calculations and custom metrics.",
          "Supports advanced reporting requirements beyond built-in summaries."
        ]
        ,
        "UseWhen": "Use when built-in functions don't cover your calculation."
      },
      {
        "Title": "Server-Side Grouping",
        "Content": "Group parameters are sent with each data request. The backend handles grouping and aggregation; the grid renders the result.",

        "BestFor": [
          "Designed for enterprise-scale and high-volume datasets.",
          "Reduces browser processing by delegating operations to the server."
        ]
        ,
        "UseWhen": "Use when loading all rows into the browser is not feasible."
      },
      {
        "Title": "Caption Templates",
        "Content": "Replace the default group header with a custom template — add icons, badges, or inline aggregate values per group row.",

        "BestFor": [
          "Ideal for branded applications and customized interfaces.",
          "Improves visibility by displaying meaningful information in group captions."
        ]
        ,
        "UseWhen": "Use when the default caption layout doesn't fit your design."
      },
      {
        "Title": "Group by Formatted Values",
        "Content": "Organize records using formatted date, time, or numeric values instead of raw data fields for more meaningful analysis.",

        "BestFor": [
          "Useful for date-based reporting and trend analysis.",
          "Makes grouped data easier to understand through formatted values."
        ]
        ,
        "UseWhen": "Use when data needs to be grouped by month, year, quarter, or custom formats."
      },
      {
        "Title": "Grouping with Paging",
        "Content": "Combine grouped records with paging to improve navigation and maintain performance across large result sets.",

        "BestFor": [
          "Suitable for large grouped datasets with many records.",
          "Improves navigation and overall grid performance."
        ]
        ,
        "UseWhen": "Use when grouped datasets are too large to display on a single page."
      }
    ]
  },
  "Resources": {
    "Eyebrow": "Implementation Resources",
    "MainTitle": "Explore Grouping Demos, Guides, and APIs",
    "Subtitle": "Access the documentation, demos, implementation guides, and API references needed to evaluate, configure, and customize grouping and aggregation features.",

    "Options": [
      {
        "Title": "Grouping Documentation",
        "Content": "Enable, configure, and customize grouping functionality within the React Data Grid.",
        "ReadGuideORViewDemoTitle": "View Docs",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/grouping/grouping"
      },
      {
        "Title": "Caption Template Guide",
        "Content": "Customize group caption rows with templates, icons, formatted content, and summary information.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/grouping/caption-template"
      },
      {
        "Title": "Lazy Load Grouping",
        "Content": "Load grouped records on demand to improve rendering performance for large datasets.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/grouping/lazy-load-grouping"
      },

      {
        "Title": "Aggregate Documentation",
        "Content": "Learn how to configure built-in, group, caption, footer, custom, and reactive aggregate calculations in the React Data Grid.",
        "ReadGuideORViewDemoTitle": "View Docs",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/aggregates/aggregates"
      },
      {
        "Title": "Footer Aggregate",
        "Content": "Display aggregate values such as Sum, Average, Count, Min, and Max in the grid footer.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/aggregates/footer-aggregate"
      },
      {
        "Title": "Group and Caption Aggregate",
        "Content": "Show aggregate values directly within group footers and group caption rows.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/aggregates/footer-aggregate"
      },
      {
        "Title": "Custom Aggregate",
        "Content": "Define custom aggregation logic to calculate business-specific metrics and KPIs.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/aggregates/custom-aggregate"
      },
      {
        "Title": "Reactive Aggregate",
        "Content": "Automatically refresh aggregate values when underlying data changes dynamically.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/grid/aggregates/reactive-aggregate"
      },
      {
        "Title": "API Reference",
        "Content": "Explore all properties, methods, and events related to grouping and aggregation features.",
        "ReadGuideORViewDemoTitle": "Explore",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/angular/documentation/api/grid/index-default"
      }

    ]
  },
  "FAQ": {
    "Eyebrow": "FAQ",
    "MainTitle": "Frequently Asked Questions About Grouping and Aggregates",
    "Subtitle": "",
    "Options": [
      {
        "Question": "Can users group records without writing code?",
        "Answer": "Yes. Enable the grouping panel and users can drag and drop column headers to group records directly within the grid without writing additional code."
      },
      {
        "Question": "Can multiple columns be grouped simultaneously?",
        "Answer": "Yes. Multiple columns can be grouped to create hierarchical views, making large datasets easier to browse and analyze."
      },
      {
        "Question": "Which aggregate functions are supported?",
        "Answer": "The Data Grid supports Sum, Average, Count, Min, and Max aggregations. These values can be displayed at both group and grid footer levels."
      },
      {
        "Question": "Can custom aggregate calculations be implemented?",
        "Answer": "Yes. Developers can create custom aggregate functions to calculate application-specific metrics, ratios, KPIs, or weighted values."
      },
      {
        "Question": "Does grouping support remote and large datasets?",
        "Answer": "Yes. Grouping and aggregation can be performed using server-side processing to efficiently handle large datasets."
      },
      {
        "Question": "When should I use programmatic grouping instead of drag-and-drop grouping?",
        "Answer": "Use programmatic grouping when a predefined grouping structure is required. Use drag-and-drop grouping when users need flexibility to reorganize data at runtime."
      },
      {
        "Question": "Can aggregate values be displayed in group captions?",
        "Answer": "Yes. Aggregate values can be displayed directly in group caption rows, allowing users to see summary information without expanding groups."
      },
      {
        "Question": "Can multiple aggregate functions be applied to a single column?",
        "Answer": "Yes. A column can display multiple aggregate calculations such as Sum, Average, Count, Min, and Max simultaneously."
      },
      {
        "Question": "Can data be grouped using formatted values such as months or years?",
        "Answer": "Yes. The grid supports grouping data using formatted values, helping users organize records by dates, periods, and custom formats."
      }
    ]
  },
  "RelatedArticles": {
    "Eyebrow": "Related Articles",
    "MainTitle": "Go Deeper on Grouping and Aggregates",
    "Subtitle": "",
    "Options": [
      {
        "Title": "How to Apply Formatting for the Group Caption Template",
        "Content": "Learn how to customize group caption rows with formatted content, custom text, and improved visual presentation for grouped records.",
        "ReadArticleLink": ""
      },
      {
        "Title": "Change Default Group Caption Based on Condition in JavaScript Grid",
        "Content": "Customize group captions dynamically based on record values, business rules, or application-specific conditions.",
        "ReadArticleLink": ""
      },
      {
        "Title": "How to Hide Expand/Collapse Icons for Groups with Single Item",
        "Content": "Improve grouped data presentation by controlling expand and collapse indicators when groups contain only a single record.",
        "ReadArticleLink": ""
      },
      {
        "Title": "How to Add Aggregate Options in the Column Menu",
        "Content": "Enable aggregate calculations directly from the column menu and provide users with quick access to summary functions.",
        "ReadArticleLink": ""
      },
      {
        "Title": "How to Calculate Column Values Based on Other Columns",
        "Content": "Create calculated values using data from multiple columns to support custom summaries, formulas, and business metrics.",
        "ReadArticleLink": ""
      },
      {
        "Title": "How to Implement Data Live Streaming in the JavaScript Grid",
        "Content": "Explore techniques for updating grouped data and aggregate values in real time as new records are added or modified.",
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
                <a href="https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/aggregate-group" class="btn btn-primary">View Demo</a>
                <a href="https://ej2.syncfusion.com/angular/documentation/grid/getting-started" class="btn btn-secondary">Explore Documentation</a>
            </div>
        </div>`



document.getElementsByClassName("demo-section")[0].innerHTML = `
<div class="container">
    <div class="section-eyebrow">${data.Preview.Eyebrow}</div>
    <h2 class="section-title">${data.Preview.MainTitle}</h2>
    <p class="section-description">${data.Preview.Subtitle}</p>

   <div class="demo-tabs">
    <button class="demo-tab active" data-target="groupingDemo">
        Group by Column
    </button>

    <button class="demo-tab" data-target="multiLevelDemo">
        Multi-level Grouping
    </button>

    <button class="demo-tab" data-target="aggregateDemo">
        Aggregate Functions
    </button>

    <button class="demo-tab" data-target="customDemo">
        Custom Aggregates
    </button>
</div>

    <div class="demo-preview">
        <div id="grouping" class="demo-panel active">
            <div class="mock-grid">
                <div class="mock-toolbar">
                    Grouped by: <span class="mock-chip">Region</span>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="group-row">
                            <td colspan="3">▾ North (3 Records)</td>
                        </tr>
                        <tr>
                            <td>10248</td>
                            <td>Alice Martin</td>
                            <td>$2,400</td>
                        </tr>
                        <tr>
                            <td>10251</td>
                            <td>Bob Chen</td>
                            <td>$750</td>
                        </tr>
                        <tr class="footer-row">
                            <td colspan="2">Total</td>
                            <td>$3,150</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        

</div>
`;

document.getElementsByClassName("why-matters")[0].innerHTML = `
<div class="container">
    <div class="why-matters-wrapper">

        <div class="why-matters-left">
            <div class="section-eyebrow">
                ${data.WhyMatters.Eyebrow}
            </div>

            <h2>${data.WhyMatters.MainTitle}</h2>

            <p class="why-matters-text-large">
                ${data.WhyMatters.Content}
            </p>
        </div>

        <div class="why-matters-right">
            <div class="why-matters-card">
                <h3 class="card-title">
                    ${data.WhyMatters.CapabilitiesTitle}
                </h3>

                <div class="selection-types-list">
                    ${data.WhyMatters.KeyCababilitiesTitle.map(item => `
                        <div class="selection-type-item">
                            ${item}
                        </div>
                    `).join('')}
                </div>
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
                    <div class="capability-label">BEST FOR</div>
                    
                    <div class="capability-bestfor">
                        ${item.BestFor.map(point => `
                        <div class="bestfor-item">
                            ✓ ${point}
                         </div>
                        `).join('')}
                    </div>

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

document.addEventListener('click', function (e) {

  if (!e.target.classList.contains('demo-tab')) {
    return;
  }

  document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.classList.remove('active');
  });

  e.target.classList.add('active');

  document.querySelectorAll('.demo-content').forEach(panel => {
    panel.classList.remove('active');
  });

  const targetId = e.target.getAttribute('data-target');

  const targetPanel = document.getElementById(targetId);

  if (targetPanel) {
    targetPanel.classList.add('active');
  }

});