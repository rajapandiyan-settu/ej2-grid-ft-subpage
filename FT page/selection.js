// Selection

window.data = {
    HeroWithCTA: {
        Eyebrow: "React Data Grid Selection",
        MainTitle: "Accelerate User Actions with Flexible Data Selection",
        Subtitle: "Enable intuitive row, cell, range, and checkbox selection patterns that simplify data interaction and boost productivity.",
        ViewDemo: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/selection",
        ExploreDoc: "https://ej2.syncfusion.com/react/documentation/grid/selection/selection",
    },
    Preview: {
        Eyebrow: "Interactive Demo",
        MainTitle: "Try Selection Modes in Action",
        Subtitle: "Use a live sample tab to see the selection modes before diving into the details.",
    },
    WhyMatters: {
        Eyebrow: "Why Selection Matters",
        MainTitle: "Turn Data Review to Data Update",
        Subtitle: "",
        Content: "Selection enables users to interact with data efficiently by selecting records, cells, columns, or eligible items based on their workflow. Features such as multi-selection, range selection, keyboard navigation, persistent selection, and custom selection rules provide greater control over data interactions. These capabilities help streamline data review, support bulk operations, simplify analysis, and improve productivity when working with large and dynamic datasets.",
        OverviewTitle: "",
        OverviewContent: "",
        KeyCababilitiesTitle: ["Multi-row selection", "Checkbox control", "Cell-level precision", "Interactive data selection", "Conditional rules", "Bulk Action Support", "Flexible Selection Modes", "Smart Data Targeting"],
    },
    ChooseRightApproach: {
        Eyebrow: "Choose the Right Approach",
        MainTitle: "Choose the Selection Experience That Fits Your Workflow",
        Subtitle: "Different use cases need different selection modes. Choose the mode that matches your application's data interaction patterns.",
        Options: [
            {
                Title: "Normal Row Selection",
                Content: "Select one or multiple rows for record-level actions and data management.",
                BestFor: ["✔ Best for record review, data management, and master-detail scenarios."],
                UseWhen: ["🔹Use when users review and interact with one or more complete records."],
            },
            {
                Title: "Checkbox Selection",
                Content: "Use checkboxes to quickly select multiple rows, including select-all operations.",
                BestFor: ["✔ Best for bulk updates, exports, approvals, and delete operations."],
                UseWhen: ["🔹Use when users frequently perform actions on multiple records at once."],
            },
            {
                Title: "Conditional Checkbox Selection",
                Content: "Allow selection only for rows that meet specific business rules or conditions.",
                BestFor: ["✔ Best for approval workflows, inventory management, and permission-based actions."],
                UseWhen: ["🔹Use when selection must be restricted based on record status, permissions, or custom conditions."],
            },
            {
                Title: "Cell Selection",
                Content: "Select individual cells or ranges for precise data interaction and analysis.",
                BestFor: ["✔ Best for spreadsheet-style experiences and detailed data analysis."],
                UseWhen: ["🔹Use when users need to interact with specific data points instead of entire rows."],
            },
            {
                Title: "Column Selection",
                Content: "Select entire columns to focus on a specific field across all records.",
                BestFor: ["✔ Best for reporting, data analysis, and column-focused workflows."],
                UseWhen: ["🔹Use when users work with entire columns rather than individual records."],
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
                Content: "Learn how to select single or multiple rows and perform record-level actions with ease.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/row-selection#single-row-selection",
            },
            {
                Title: "Row Selection Demo",
                Content: "Explore interactive examples showcasing row selection, multi-selection, and selection APIs.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/selection-api",
            },
            {
                Title: "Checkbox Selection Documentation",
                Content: "Discover how checkbox-based selection simplifies bulk actions and record management.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/check-box-selection#checkbox-only-selection",
            },
            {
                Title: "Checkbox Selection Demo",
                Content: "See how checkbox selection enables quick multi-record selection and select-all operations.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/checkbox-selection",
            },
            {
                Title: "Conditional Selection Documentation",
                Content: "Learn how to restrict selection based on business rules, permissions, or record status.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/check-box-selection#conditional-row-selection",
            },
            {
                Title: "Conditional Selection Demo",
                Content: "Explore real-world scenarios where selection is enabled only for eligible records.",
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
                Title: "Cell Selection Demo",
                Content: "Explore cell selection capabilities through interactive examples and common use cases.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/selection-api",
            },
            {
                Title: "Column Selection Documentation",
                Content: "Discover how to select entire columns for field-focused analysis and operations.",
                ReadGuideORViewDemoTitle: "View Documentation",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/documentation/grid/selection/column-selection#single-column-selection",
            },
             {
                Title: "Column Selection Demo",
                Content: "See column selection in action and learn how to work with complete data fields.",
                ReadGuideORViewDemoTitle: "View Demo",
                ReadGuideORViewDemoLink: "https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/selection-api",
            }
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
            },
            {
                Question: "Can I switch between single and multiple selection modes?",
                Answer: "Yes. The Syncfusion Data Grid supports both Single and Multiple selection types through the selectionSettings.type property. You can dynamically switch between them at runtime based on your application's requirements."
            },
            {
                Question: "Can users select rows, cells, and columns in the same grid?",
                Answer: "Yes. The grid provides Row, Cell, and Both selection modes. Using the Both mode, users can interact with row and cell selections simultaneously, enabling more flexible data interaction scenarios."
            },
            {
                Question: "How does checkbox selection improve usability?",
                Answer: "Checkbox selection provides a clear visual indication of which rows are selected and allows users to easily select or deselect multiple rows at once. It also enables more intuitive bulk actions and improves the overall user experience when working with large datasets."
            },
            {
                Question: "Can selection be disabled when it is not needed?",
                Answer: "Yes. You can completely disable selection by setting the allowSelection property to false. This is useful for read-only views where users only need to review data without interacting with records."
            },
            {
                Question: "Are selection events available for custom business logic?",
                Answer: "Yes. The grid exposes selection-related events such as rowSelected, rowDeselected, cellSelected, and cellDeselected. These events can be used to trigger custom actions, update UI elements, or integrate with external components."
            },
            {
                Question: "Can selection be used with keyboard navigation?",
                Answer: "Yes. Users can navigate and select records using keyboard controls, including arrow keys, Shift, and Ctrl/Cmd combinations. This improves accessibility and helps power users work more efficiently."
            },
            {
                Question: "What is the benefit of persistent selection?",
                Answer: "Persistent selection ensures that users' selection choices are maintained even when the grid is updated, filtered, or sorted. This provides a better user experience by preventing the loss of selection state and allowing users to continue working with their selected data seamlessly."
            },
            {
                Question: "Can selection be combined with editing workflows?",
                Answer: "Yes. Selection can be integrated with editing features to identify records that need modifications before applying updates. This enables efficient review-and-update workflows within the same grid interface."
            },
             {
                Question: "Can I preselect rows, cells, or columns when the grid loads?",
                Answer: "Yes. You can use the grid's selection APIs to programmatically select rows, cells, or columns during initialization, allowing important records or data points to be highlighted by default."
            },
            {
                Question: "Is selection supported in virtualized grids?",
                Answer: "Yes. Selection works with row and column virtualization, enabling users to select records efficiently even when working with large datasets."
            },
            {
                Question: "Can I clear all current selections at once?",
                Answer: "Yes. The grid provides methods to clear selected rows, cells, and columns programmatically, making it easy to reset the selection state when needed."
            }
        ]
    },
    RelatedArticles: {
        Eyebrow: "Related Articles",
        MainTitle: "Continue Exploring React Data Grid Selection",
        Subtitle: "",
        Options: [
            {
                Title: "Maintain Row Selection After Adding Records",
                Content: "Discover how to keep previously selected rows intact when new records are added to the React Data Grid, ensuring a consistent selection experience across grid refresh operations.",
                ReadArticleLink: "https://support.syncfusion.com/kb/article/10245/how-to-maintain-selected-rows-after-adding-new-record",
            },
            {
                Title: "React Data Grid Record Selection Guide",
                Content: "Learn how to select specific rows in the React Data Grid using primary key values. Covers retrieving row indexes with primary keys and programmatically selecting records using Grid selection APIs.",
                ReadArticleLink: "https://support.syncfusion.com/kb/article/10061/how-to-select-the-specific-record-in-the-grid-using-its-primary-key-value",
            },
            {
                Title: "Print Selected Rows in React Data Grid",
                Content: "A comprehensive guide to printing only selected rows in the React Data Grid, including row selection, print customization, and handling selected records through Grid events.",
                ReadArticleLink: "https://support.syncfusion.com/kb/article/9694/how-to-print-only-selected-records-in-grid-of-javascript",
            },
            {
                Title: "React Data Grid Cell Interaction Guide",
                Content: "Learn how to capture clicked cell details in the React Data Grid, including row data retrieval, column identification, and cell value extraction using the getRowInfo API.",
                ReadArticleLink: "https://support.syncfusion.com/kb/article/9937/how-to-get-the-clicked-cell-details-in-javascript-datagrid",
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
                <a href="${data.HeroWithCTA.ViewDemo}" class="btn btn-primary" target="_blank"> View Demo </a>
                <a href="${data.HeroWithCTA.ExploreDoc}" class="btn btn-secondary" target="_blank"> Explore Documentation </a>
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
                </div>
                <!-- RIGHT SIDE CARD -->
                <div class="why-matters-right" style="padding-top: 110px;">
                    <div class="why-matters-card">
                        <p class="card-description">${data.WhyMatters.KeyCababilitiesTitle.map(item => `<div class="selection-type-item">${item}</div>`).join('')}</p>
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
                    <div class="capability-scenario">${item.BestFor}</div>
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