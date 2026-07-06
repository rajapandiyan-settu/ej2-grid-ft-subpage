// Selection

window.data = {
  "HeroWithCTA": {
    "Eyebrow": "REACT DATA GRID THEME CUSTOMIZATION FEATURES",
    "MainTitle": "Build Applications with Your Brand Theme Customization",
    "Subtitle": "Customize colors, fonts, and visual elements to match your design system. Create a consistent, on-brand experience that reflects your product identity.",
    "ViewDemo": "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/overview",
    "ExploreDoc": "https://ej2.syncfusion.com/react/documentation/grid/style-and-appearance/style-and-appearance"
  },
  "Preview": {
    "Eyebrow": "Live Sample",
    "MainTitle": "Try Theme Customization in Action",
    "Subtitle": "Explore the theme options using the tabs below before proceeding with advanced customization."
  },
  "WhyMatters": {
    "Eyebrow": "Why the theme customization matters?",
    "MainTitle": "Customize Themes to Reflect Your Brand",
    "Subtitle": "Theme customization helps organizations align data grids with their design systems while maintaining consistency, usability, and accessibility.",
    "Content": "Design systems define brand identity through specific colors, typography, and spacing. Developers need to implement these guidelines consistently across applications. Generic, one-size-fits-all UI components force compromises on brand expression. The React Data Grid theme customization system lets you map your entire design system into production-ready components. Maintain brand consistency, reduce design-to-code friction, and empower developers to build on-brand experiences without fighting the component defaults.",
    "OverviewTitle": "Syncfusion EJ2 Grid Feature Overview",
    "OverviewContent": "Theme customization provides comprehensive control over the Data Grid's appearance, enabling developers to tailor colors, typography, spacing, and visual elements while ensuring brand consistency, multi-theme support, and adherence to accessibility standards.",
    "KeyCababilitiesTitle": [
      "Consistent Brand Expression",
      "Centralized Style Control",
      "Custom Visual Customization",
      "Multiple Theme Support",
      "Accessibility Built-In",
      "Faster UI Implementation"
    ]
  },
  "ChooseRightApproach": {
    "Eyebrow": "CHOOSE YOUR APPROACH",
    "MainTitle": "Select the Customization Method That Fits Your Workflow",
    "Subtitle": "Different use cases require different customization strategies. Choose the approach that best aligns with your development and design requirements.",
    "Options": [
      {
        "Title": "CSS Variables",
        "Content": "Override theme colors using CSS custom properties. Perfect for simple color adjustments and dynamic theme switching.",
        "BestFor": "Light/dark mode toggling, simple brand color updates",
        "UseWhen": "You need quick CSS-level customization without code changes."
      },
      {
        "Title": "Theme Configuration",
        "Content": "Configure the grid using a complete theme object that supports colors, typography, spacing, and individual component styles.",
        "BestFor": "Complete design system implementation, multi-theme support",
        "UseWhen": "You have a full design system to implement."
      },
      {
        "Title": "Custom CSS Classes",
        "Content": "Apply custom CSS classes to grid elements. Provides fine-grained control for advanced styling scenarios.",
        "BestFor": "Complex styling requirements, third-party CSS frameworks",
        "UseWhen": "You need complete control over specific elements."
      },
      {
        "Title": "Component Templates",
        "Content": "Custom render functions for headers, cells, and rows. Build highly branded, custom cell experiences.",
        "BestFor": "Custom cell layouts, branded data visualization",
        "UseWhen": "You need to redesign specific grid elements."
      }
    ]
  },
  "Resources": {
    "Eyebrow": "IMPLEMENTATION RESOURCES",
    "MainTitle": "Explore Theme Customization Guides and Demos",
    "Subtitle": "Find the documentation, examples, and tools you need to implement theme customization in your project.",
    "Options": [
      {
        "Title": "Theme Customization",
        "Content": "Complete guide to theming options, CSS variables, and theme configuration objects.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/style-and-appearance/style-and-appearance#theme-customization"
      },
      {
        "Title": "CSS Variables Reference",
        "Content": "Full list of available CSS custom properties and their default values.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/style-and-appearance/style-and-appearance#default-css-override"
      },
      {
        "Title": "Cell Customization",
        "Content": "Customize cell rendering, styling, and formatting using templates and events.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/cell"
      },
      {
        "Title": "Responsive Layout Guide",
        "Content": "Learn how to build responsive React Grid layouts that adapt to different screen sizes and devices.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/adaptive"
      },
      {
        "Title": "Template Customization Guide",
        "Content": "Learn how to use custom render templates to create branded cell and row layouts.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/columns/column-template"
      },
      {
        "Title": "Styling and Appearance",
        "Content": "Learn how to customize Grid themes, headers, rows, cells, and visual appearance through CSS and theme overrides.",
        "ReadGuideORViewDemoTitle": "Read Guide",
        "ReadGuideORViewDemoLink": "https://ej2.syncfusion.com/react/documentation/grid/style-and-appearance/style-and-appearance"
      }
    ]
  },
  "FAQ": {
    "Eyebrow": "Frequently Asked Questions",
    "MainTitle": "React Data Grid Theme Customization Questions",
    "Subtitle": "",
    "Options": [
      {
        "Question": "What themes are available out of the box?",
        "Answer": "Syncfusion offers Material, Bootstrap, Fabric, Tailwind, and Fluent Design themes for the React Data Grid. Each theme includes a light and dark variant, giving you 10+ pre-designed options to choose from."
      },
      {
        "Question": "Can I create a completely custom theme?",
        "Answer": "Yes. You can create custom themes using CSS variables, SCSS variables, or custom CSS classes. CSS variables allow runtime switching without recompilation, while SCSS provides build-time customization. Combined with custom classes for specific cells and rows, you have complete control."
      },
      {
        "Question": "How do I implement a dark mode toggle?",
        "Answer": "Use CSS variables or theme CSS switching. Define two sets of CSS custom properties (light and dark variants) and swap them based on user preference. This enables theme switching without page reload. Store the preference in localStorage for persistence."
      },
      {
        "Question": "Will custom themes impact performance?",
        "Answer": "No. Built-in themes are optimized and minimal. CSS variables have negligible performance impact. Custom class-based styling scales well even with thousands of rows through CSS class efficiency."
      },
      {
        "Question": "Can themes be applied to specific grid instances?",
        "Answer": "Yes. Use CSS class scoping or CSS-in-JS solutions. You can apply different themes to different grid instances on the same page. CSS variables can be scoped to specific container elements."
      },
      {
        "Question": "Does theming support accessibility standards?",
        "Answer": "Yes. All built-in themes meet WCAG 2.1 AA accessibility standards with proper color contrast ratios. When creating custom themes, use the theme builder to validate contrast ratios and ensure accessibility compliance."
      },
      {
        "Question": "How to change the font size of DataGrid elements?",
        "Answer": "Customize the Data Grid font size by overriding the default Grid CSS classes and applying a custom font-size to headers, rows, and cells. This ensures a consistent appearance across all Grid elements."
      }
    ]
  },
  "RelatedArticles": {
    "Eyebrow": "Related Articles",
    "MainTitle": "Related Articles and Resources",
    "Subtitle": "Explore more about styling, design systems, and building branded UI experiences.",
    "Options": [
      {
        "Title": "Light and Dark Theme Switching",
        "Content": "Implement dynamic light and dark theme switching for Syncfusion React components with practical examples.",
        "ReadArticleLink": "https://support.syncfusion.com/kb/article/14869/how-do-i-change-the-syncfusion-light-and-dark-themes-dynamically-in-react"
      },
      {
        "Title": "Dynamic Theme Loading",
        "Content": "Load and switch Syncfusion themes dynamically at runtime to provide flexible user-driven theme customization.",
        "ReadArticleLink": "https://support.syncfusion.com/kb/article/9499/how-to-load-themes-dynamically-in-syncfusion-components"
      },
      {
        "Title": "Render React Data Grid with Bootstrap Theme",
        "Content": "Learn how to apply Bootstrap styling and themes to the Syncfusion React Data Grid component.",
        "ReadArticleLink": "https://support.syncfusion.com/kb/article/10054/how-to-render-react-data-grid-with-bootstrap-theme"
      },
      {
        "Title": "Customize Cell Style",
        "Content": "Dynamically customize Grid cell appearance using data-driven conditions and business logic.",
        "ReadArticleLink": "https://support.syncfusion.com/kb/article/11989/how-to-customize-cell-style-based-on-the-condition-in-react-data-grid"
      },
      {
        "Title": "Customize Row Style",
        "Content": "Customize Grid row styles dynamically based on data values and predefined business conditions.",
        "ReadArticleLink": "https://support.syncfusion.com/kb/article/11993/how-to-customize-the-row-style-based-on-condition-in-react-data-grid"
      },
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
                <a href=${data.HeroWithCTA.ViewDemo} class="btn btn-primary">ViewDemo</a>
                <a href=${data.HeroWithCTA.ExploreDoc} class="btn btn-secondary">Explore Documentation</a>
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