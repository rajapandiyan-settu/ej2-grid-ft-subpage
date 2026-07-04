// Selection

window.data = {
    HeroWithCTA: {
        Eyebrow: "React Data Grid Selection",
        MainTitle: "Build Flexible Row, Cell & Column Selection for Real Workflows",
        Subtitle: "Create, customize, and control multiple selection modes in the Syncfusion React Data Grid with fine-grained control.",
        ViewDemo: "View Demo",
        ExploreDoc: "Explore Documentation",
    },
    SamplePreview: {
        Eyebrow: "",
        MainTitle: "",
        Subtitle: "",
    },
    WhyMatters: {
        Eyebrow: "Why Editing Matters",
        MainTitle: "Turn Data Review to Data Update",
        Subtitle: "",
        Content: "A data grid is often where users review, compare, and act on information. When selection is intuitive and flexible, users can quickly focus on the data that matters and perform actions with confidence. \n \n Flexible selection options help users review, compare, and act on data efficiently. From individual records to cells, columns, and multiple items, users can select the data they need and work more effectively.",
        OverviewTitle: "Flexible Selection for Real Data Workflows",
        OverviewContent: "Syncfusion React Data Grid brings powerful selection capabilities directly into the grid. Choose row, checkbox, cell, or column selection based on your workflow. Support multi-selection, range selection, keyboard navigation, and conditional selection rules to help users interact with data efficiently while maintaining accuracy and control.",
        KeyCababilitiesTitle: ["Multi-row selection", "Checkbox control", "Cell-level precision", "Interactive data selection", "Conditional rules"],
    },
    ChooseRightApproach: {
        Eyebrow: "Choose the Right Approach",
        MainTitle: "Choose the Selection Experience That Fits Your Workflow",
        Subtitle: "Different use cases need different selection modes. Choose the mode that matches your application's data interaction patterns.",
        Options: [
            {
                Title: "Normal Row Selection",
                Content: "Users click rows to select them. Supporting multiple selections with Ctrl+Click or Shift+Click for range selection.",
                BestFor: "General-purpose row selection, data review, and filtering workflows.",
                UseWhen: "Users need a familiar and simple way to select one or multiple rows without additional UI elements.",
            },
            {
                Title: "Checkbox Selection",
                Content: "Each row has a checkbox. Header checkbox lets users select all rows at once, making bulk operations intuitive.",
                BestFor: "Bulk actions, explicit selection, and accessibility-focused interfaces.",
                UseWhen: "Users frequently perform actions on multiple records and need clear visual confirmation of selected items.",
            },
            {
                Title: "Conditional Checkbox Selection",
                Content: "Control which rows can be selected using custom conditions. Only valid rows appear selectable to prevent invalid operations.",
                BestFor: "Scenarios where selection is restricted based on data criteria.",
                UseWhen: "Users need to select rows that meet specific conditions, ensuring data integrity.",
            },
            {
                Title: "Cell Selection",
                Content: "Users select individual cells or cell ranges. Precise control for tasks like data entry, analysis, or targeted edits.",
                BestFor: "Fine-grained data editing, spreadsheet-like workflows, and precise data highlighting.",
                UseWhen: "Users need to interact with specific data points rather than whole records.",
            },
            {
                Title: "Column Selection",
                Content: "Select entire columns by clicking headers or using keyboard shortcuts. Useful for operations affecting all rows in a column.",
                BestFor: "Column-level operations, data export, formatting, and analysis workflows.",
                UseWhen: "Users need to analyze, format, copy, or apply actions to all values within a column.",
            }
        ]
    },
    Resources: {
        Eyebrow: "Implementation Resources",
        MainTitle: "Explore Selection Demos and Docs",
        Subtitle: "Get started with live demos, comprehensive documentation, and code examples for every selection mode.",
        Options: [
            {
                Title: "Row Selection Documentation",
                Content: "Learn how to implement normal row selection with multi-select support.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/row-selection#single-row-selection",
            },
            {
                Title: "Row Selection Demo",
                Content: "See row selection in action with interactive examples and code snippets.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/selection-api",
            },
            {
                Title: "Checkbox Selection Documentation",
                Content: "Implement checkbox-based selection for better UX and accessibility.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/check-box-selection#checkbox-only-selection",
            },
            {
                Title: "Checkbox Selection Demo",
                Content: "See checkbox selection in action with interactive examples and code snippets.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/checkbox-selection",
            },
            {
                Title: "Conditional Selection Documentation",
                Content: "Learn how to implement conditional selection based on specific criteria.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/check-box-selection#conditional-row-selection",
            },
            {
                Title: "Conditional Selection Demo",
                Content: "See conditional selection in action with interactive examples and code snippets.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/conditional-row-selection",
            },
            {
                Title: "Cell Selection Documentation",
                Content: "Learn how to implement cell selection for granular data interaction.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/cell-selection#single-cell-selection",
            },
            {
                Title: "Column Selection Documentation",
                Content: "Implement column-level selection for column-based operations.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/column-selection#single-column-selection",
            },
        ]
    },
    FAQ: {
        Eyebrow: "FAQ",
        MainTitle: "React Data Grid Selection Questions",
        Subtitle: "",
        Options: [
            {
                Question: "What selection modes are available?",
                Answer: "The Syncfusion React Data Grid supports Row Selection (normal and checkbox), Cell Selection, and Column Selection. Each mode can be combined with keyboard shortcuts and conditional logic to match your workflow needs."
            },
            {
                Question: "Can I customize the selection behavior?",
                Answer: "Yes. The grid supports custom selection handlers, conditional selection rules, keyboard shortcut configuration, and styling. You can define which rows/cells can be selected and customize the visual feedback."
            },
            {
                Question: "Does selection work with remote or dynamic data?",
                Answer: "Yes, selection works seamlessly with remote data sources. The grid maintains selection state across pagination and sorting operations. Use the selection API to get selected rows at any time."
            },
            {
                Question: "Can I perform bulk actions on selected rows?",
                Answer: "Absolutely. Use the selection API to get all selected rows, then perform batch operations like update, delete, export, or custom actions. The grid provides callbacks to capture selection changes for real-time action triggers."
            },
            {
                Question: "Which selection mode should I use?",
                Answer: "Choose based on your use case: Row Selection for general workflows, Checkbox Selection for explicit/bulk actions, Cell Selection for precise editing, Column Selection for column-level operations, and Conditional Selection when business rules restrict which items can be selected."
            },
            {
                Question: "Can I use Shift+Click and Ctrl+Click for range and multi-selection?",
                Answer: "Yes, the grid supports standard keyboard shortcuts out of the box. Shift+Click selects a range of rows, Ctrl+Click (or Cmd+Click on Mac) toggles individual row selection. These shortcuts work seamlessly with all selection modes and can be customized as needed."
            },
            {
                Question: "How can I restrict selection based on business rules?",
                Answer: " Use Conditional Checkbox Selection to apply custom logic that determines which rows are selectable. You can define selection rules based on row data, status, permissions, or any other criteria. Implement the conditional handler to enable/disable selection dynamically."
            },
            {
                Question: "Can I get the selected data programmatically?",
                Answer: "Yes, you can use the `getSelectedRecords()` method to retrieve all currently selected rows as an array of objects. This allows you to access the data for further processing or manipulation."
            },
            {
                Question: "Does selection persist when the grid is filtered or sorted?",
                Answer: "Yes, selections are maintained across filtering and sorting operations by default. The grid tracks selections by row identifier (primary key) rather than row index, ensuring selections remain consistent even when the data order changes. You can configure this behavior to suit your needs."
            }
        ]
    },
    RelatedArticles: {
        Eyebrow: "Related Articles",
        MainTitle: "Continue Exploring React Data Grid Selection",
        Subtitle: "",
        Options: [
            {
                Title: "React Data Grid Selection Guide",
                Content: "A comprehensive guide covering row, checkbox, cell, and column selection modes, including best practices and implementation patterns.",
                ReadArticleLink: "#",
            },
            {
                Title: "React Data Grid Selection Guide",
                Content: "A comprehensive guide covering row, checkbox, cell, and column selection modes, including best practices and implementation patterns.",
                ReadArticleLink: "#",
            },
            {
                Title: "React Data Grid Selection Guide",
                Content: "A comprehensive guide covering row, checkbox, cell, and column selection modes, including best practices and implementation patterns.",
                ReadArticleLink: "#",
            },
            {
                Title: "React Data Grid Selection Guide",
                Content: "A comprehensive guide covering row, checkbox, cell, and column selection modes, including best practices and implementation patterns.",
                ReadArticleLink: "#",
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