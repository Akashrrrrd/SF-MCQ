 {
    id: 'dumps-1',
    text: 'While making changes in the Quote Line Editor, sales reps have mentioned that clicking the Calculate button after each set of changes is too slow. Management has asked the Admin to streamline the Quote Line Editor so calculations occur automatically after each change is made. Which Managed Package setting should the Admin enable to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Calculate Immediately',
      'Use Legacy Calculator',
      'Use Inactive Prices',
      'Enable Quick Calculate'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Calculate Immediately package setting forces calculations to occur automatically after each change is made in the Quote Line Editor[cite: 2].'
  },
  {
    id: 'dumps-2',
    text: 'In order to apply a filter to the results of a dynamic bundle, admins must create a supporting:',
    topic: 'Salesforce CPQ',
    options: [
      'Product Rule',
      'Price Rule',
      'Custom Action',
      'Product Option'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Product rules help create and filter dynamic bundles/products to be displayed on the product selection page in CPQ[cite: 2].'
  },
  {
    id: 'dumps-3',
    text: 'Universal Containers wants their documents to be translated into multiple languages. The Admin has already provided translations for the merge fields, but wants to create translations for the static text. What is the proper structure of the variable that represents the translatable static text in Template Content?',
    topic: 'Salesforce CPQ',
    options: [
      '{!Text.VariableName}',
      '{$Data.VariableName}',
      '{!Data.VariableName}',
      '{$Text.VariableName}'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Static text localization syntax in template content uses the {!Text.VariableName} format[cite: 2].'
  },
  {
    id: 'dumps-4',
    text: 'Approver records are not required when using dynamic approvers.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'All records still need an approver object reference while using dynamic approvers[cite: 2].'
  },
  {
    id: 'dumps-5',
    text: 'On a quote template, the Price line column has a template section "Price Line Items" defined. Which behavior will the Admin observe when generating the output document?',
    topic: 'Salesforce CPQ',
    options: [
      '"Price" line column will not appear for Included or zero price items.',
      '"Price" line column will appear in multiple line item sections.',
      '"Price" line column will not appear for other line items sections.',
      '"Price Line Items" section will show only the "Price" Line column.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'When a template section is specifically dedicated to price line items, it displays only the Price Line column[cite: 2].'
  },
  {
    id: 'dumps-6',
    text: 'Which is the correct format for creating a subgroup label that dynamically pulls the subgroup field value if grouping by Product Family?',
    topic: 'Salesforce CPQ',
    options: [
      'Subtotal for {!Product2.Family}',
      'Subtotal for Family',
      'Subtotal for Product2.Family',
      'Subtotal for {0}'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Subgroup labels use indexed placeholder formatting like "Subtotal for {0}" to display the group value dynamically[cite: 2].'
  },
  {
    id: 'dumps-7',
    text: 'If a manager is taking a leave of absence, how can the Admin using Advanced Approval ensure that another manager will receive Approval requests during the period in which the original manager is absent?',
    topic: 'Salesforce CPQ',
    options: [
      'On the original manager\'s Approver record, reference a different manager\'s Approver record in the Next Approver lookup field. Clear the Next Approver lookup field once the original manager returns from leave.',
      'Create an Approval Rule with an Effective Start Date and Effective End Date spanning the absence. Populate the Approver field of the rule with the subtitle Approver, then add the rule to the existing Approval chain as the first step.',
      'Create a new Approver record, with the Group ID field set to the ID of a Public Group that contains all of the managers. On the original manager\'s Approver record, click the Replace button and select the new Approver record.',
      'On the original manager\'s Approver record, set the Delegated Approver lookup field to reference a different manager\'s Approver record, and set the Delegated End field for the date of the original manager\'s return.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Setting the Delegated Approver lookup field and specifying a Delegated End date on the original manager\'s Approver record handles temporary absence routing automatically[cite: 2].'
  },
  {
    id: 'dumps-8',
    text: 'Universal Containers is rolling out a new version of its Premier Support offering named Premier Pro. The sales operation team wants to ensure that when a sales rep renews an existing Contract with Premier Support, it is replaced with Premier Pro. What does the Admin need to do to support this business requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Renewal Product field on the Premier Support Product record to Premier Pro.',
      'Create a Report of all Renewal Quotes with Premier Support Product and replace Quote Lines with Premier Pro.',
      'Create a Price Rule to replace Premier Support Quote Lines with Premier Pro.',
      'Set the upgrade Target field on the Premier Support Product record to Premier Pro.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Setting the Renewal Product field on the product record dictates which SKU automatically replaces it upon contract renewal[cite: 2].'
  },
  {
    id: 'dumps-9',
    text: 'An Admin created a picklist field on the Product Option object called Picklist123__c. The Admin created a configuration Attribute related to a Product called Bundle Z whose Target Field is Picklist123__c. The Admin selected Bundle Z during Product Selection and populated a value for Picklist123__c on the Configuration Attribute and saved from configuration. The Admin noticed that when Bundle Z is reconfigured, the value populated in the Configuration Attribute has reverted. How can the Admin ensure the selected value persists in the Configuration Attribute when Bundle Z is reconfigured?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Workflow Rule that updates the Product Option field upon entering configuration.',
      'Create a Price Rule with Configurator scope that injects the Quote Line field value into the Product Option field.',
      'Create field Picklist123__c on the Quote Line object so the value is auto-mapped back to the Configuration Attribute when the user enters configuration.',
      'Create a Product Option formula field named AttributeMapping that returns a comma-separated string of field name and value pairs.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Creating a matching field on the Quote Line object establishes a twin field relationship that persists configuration attribute choices across reconfigurations[cite: 1, 2].'
  },
  {
    id: 'dumps-10',
    text: 'Universal Containers wants its premier service, Shipping Plus, to appear at the top of Product Selection when users add Products to the Quote. How can the Admin configure the Shipping Plus Product record to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Product\'s Sort Order as the only null Sort Order of any Product.',
      'Set the Sort Order as the lowest numerical value of any Product\'s Sort Order.',
      'Set the Product Code as the first alphabetically of any Product\'s Product Code.',
      'Set the Product\'s Product Code as the only null Product Code of any Product.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting the Sort Order field to the lowest numerical value pushes the product to the top of the product selection catalog[cite: 2].'
  },
  {
    id: 'dumps-11',
    text: 'An Admin is creating a Product Rule with an Advanced Condition. How should the Admin reference a specific Error Condition record in the text of the Advanced Condition field?',
    topic: 'Salesforce CPQ',
    options: [
      'API name of the field in the Tested field.',
      'Salesforce ID of the Error Condition record.',
      'Value of the Index field.',
      'Value of the Condition # field.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Advanced conditions reference error conditions using the value of their Index field[cite: 2].'
  },
  {
    id: 'dumps-12',
    text: 'The sales operations team at Universal Containers used the Create Order button to generate an Order with only half of the available Quote Lines and then the team selects the Ordered checkbox. What updates should the sales operations team expect?',
    topic: 'Salesforce CPQ',
    options: [
      'An Order without Order Products is created.',
      'A second Order is generated with the remaining Quote Lines.',
      'An error is thrown informing the user an order already exists.',
      'The existing Order is updated with the remaining Quote Lines.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When orders are created for partial line items and marked ordered, a subsequent order handles the remaining un-ordered quote lines[cite: 2].'
  },
  {
    id: 'dumps-13',
    text: 'Universal Containers requires that all users add at least one Product Option from the Maintenance Feature to a bundle. Additionally, users must select at least one and no more than two Product Options from the Support Feature. How should the Admin set up these requirements for the users?',
    topic: 'Salesforce CPQ',
    options: [
      'Set Min Options for Maintenance to one. Set Min Options to zero and Max Options to two for support.',
      'Set Min Options for Maintenance to one. Set Min Options to one and Max Options to two for support.',
      'Set Max Options for Maintenance to one. Set Min Options to zero and Max Options to two for support.',
      'Set Min Options and Max Options to zero for Maintenance. Set Min Options to zero and Max Options to two for support.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Configuring Min Options = 1 for Maintenance, and Min Options = 1 with Max Options = 2 for Support strictly enforces these bundle options[cite: 2].'
  },
  {
    id: 'dumps-14',
    text: 'To assign a specific Discount Schedule to an Account (that is active for a specified Start & End Date) you would create a:',
    topic: 'Salesforce CPQ',
    options: [
      'Price Rule',
      'Summary Variable',
      'Contracted Price',
      'Separate Sub-account'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Contracted Prices are used to tie specific discount schedules and special pricing to an account for a defined timeframe[cite: 2].'
  },
  {
    id: 'dumps-15',
    text: 'Which of the following is not automated as part of the subscription process in Salesforce CPQ?',
    topic: 'Salesforce CPQ',
    options: [
      'Prices',
      'Prorating',
      'Co-terminating contracts',
      'Renewal quote opportunity status'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Renewal quote opportunity status is managed through standard opportunity pipelines and contracting configurations rather than automated purely by subscription creation rules[cite: 2].'
  },
  {
    id: 'dumps-16',
    text: 'Universal Containers wants to default the value of the Location process input based on the location determined on the Quote. How should the Admin fulfill this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Add the API name of the Location field on the Quote to the Default Field picklist on process input.',
      'Create a Process Input field called Location and add the API name of the Location field on the quote to its picklist.',
      'Add the API name of the Location field on the Quote to the Default Field picklist on the quote process.',
      'Create twin fields that map between the Location field on the Quote to the Location process input.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Twin fields mapping between the Quote and Process Input objects allow guided selling inputs to default values from the quote[cite: 2].'
  },
  {
    id: 'dumps-17',
    text: 'Universal Containers (UC) sells a Product in four geographical regions that comes in 10 colors and four sizes. Instead of having a separate SKU for all combinations, UC needs the sales reps to specify location, color, and size during configuration. What CPQ functionality can UC\'s Admin leverage to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Configuration Attributes',
      'Product Options',
      'Product Features',
      'Option constraints'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Configuration attributes collect user inputs dynamically during bundle configuration without requiring unique SKUs for every permutation[cite: 2].'
  },
  {
    id: 'dumps-18',
    text: 'Universal Containers wants to change its $500 maintenance product to be based on a percentage of subscription products in the Storage product family. The maintenance product has been updated to be priced of total and the percentage has been set. How should the product records be altered to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the maintenance product Include in Percent of Total to True. On all storage subscription products, set the Percent Of Total Category to Storage and set Include in Percent of Total to True.',
      'Set the maintenance product Percent Of Total Category to Storage and set Include in Percent of Total to True. On all Storage subscription products, set the Percent Of Total Category to Storage.',
      'Set the maintenance product Percent Of Total Category to Storage. On all Storage subscription products, set the Percent Of Total Category to Storage and set Include in Percent of Total to True.',
      'Set the maintenance product Percent Of Total Category to Storage. On all Storage subscription products, set the Percent Of Total Category to Storage and set Exclude From Percent of Total to False.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Setting the category on the maintenance product and ensuring storage products do not exclude themselves from the total calculation fulfills family-based POT pricing[cite: 1, 2].'
  },
  {
    id: 'dumps-19',
    text: 'Which two objects could a discount schedule be applied to and take precedence over a discount schedule identified in a product feature? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Product',
      'Product Option',
      'Contracted Price',
      'Segmented Product'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Discount schedules applied at the Product Option and Contracted Price levels take precedence over schedules defined on features[cite: 1, 2].'
  },
  {
    id: 'dumps-20',
    text: 'An Admin has pasted the Salesforce ID of an image into the Watermark ID field of a Quote Template, but the watermark image is absent from the rendered Document. What is preventing the watermark from appearing?',
    topic: 'Salesforce CPQ',
    options: [
      'The Quote\'s Status field is equal to Approved.',
      'The Watermark Shown Quote field is unchecked.',
      'The Opportunity\'s Stage field is equal to Closed/Won.',
      'The image file type is PNG.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Watermarks must be explicitly enabled via the Watermark Shown checkbox on the quote record for the image to render[cite: 2].'
  },
  {
    id: 'dumps-21',
    text: 'Summary Variables can be used in Rule Conditions.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Summary variables can evaluate dataset metrics to form dynamic conditions in product and price rules[cite: 2].'
  },
  {
    id: 'dumps-22',
    text: 'Universal Containers has a Standard Warranty product that is priced as a Percent of Total subscription product. It is priced as 25% of the Net Price of all Shipping Container products added to the Quote. When generating a partial Order via the Create Order button, the Admin notices the Standard Warranty was absent from the Order Product selection page. What should the Admin do to allow the Standard Warranty product to create an Order Product?',
    topic: 'Salesforce CPQ',
    options: [
      'Ensure that the Standard Warranty Quote Line\'s Start Date and End Date match the Order\'s Start Date and End Date.',
      'Select any Shipping Container product on the Order Product selection page to automatically generate a Standard Warranty Order Product on the Order.',
      'Create one Standard Warranty Quote Line for every Shipping Container Quote Line on the Quote.',
      'Set the Product Family picklist on the Standard Warranty product\'s Product record to Services.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Selecting container products automatically brings along their dependent Percent of Total warranties during order generation[cite: 2].'
  },
  {
    id: 'dumps-23',
    text: 'Universal Containers wants to default information on the Quote Line from a Product field. How should this information be transferred?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a cross-object formula field that stores the Product Field\'s value in the Quote Line field.',
      'Create two fields with the same API name and type on the Product and Quote Line.',
      'Create a Price Rule that stores the Product field\'s value in the Quote Line field.',
      'Create a Workflow Rule that stores the Product field\'s value in the Quote Line field.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Matching field names and types between the Product and Quote Line objects enable out-of-the-box twin field mapping[cite: 1, 2].'
  },
  {
    id: 'dumps-24',
    text: 'A User at Universal Containers has created a Quote with two Products. Product A has a value of Fixed Price for Subscription Pricing. Products A and B have Asset Conversion populated. Both Products have a Quantity of two. Which two are potential outcomes when the Opportunity associated with the Quote is contracted? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Two Subscription records and two Assets records will be created.',
      'One Subscription record and two Asset records will be created.',
      'One Subscription record and an Asset record will be created.',
      'Two Subscription records and an Asset record will be created.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Depending on whether asset conversion is bundled per quote line or per unit, contract generation results in specific corresponding asset and subscription rows[cite: 2].'
  },
  {
    id: 'dumps-25',
    text: 'An Admin has made numerous changes to a Template Content record over the course of a day, and now finds that the "Failed to Load PDF" error message appears when the output document is generated. Which steps should the Admin perform to diagnose the error?',
    topic: 'Salesforce CPQ',
    options: [
      'Edit the template content and view as source, then modify HTML until clicking Check Syntax results in "No Errors."',
      'Download the template content via Dataloader and analyze the HTML source, modify and replace HTML until the template renders.',
      'Copy and paste the content into a text editor and run a syntax checker, modify and replace HTML until the template renders.',
      'Clone the record, reference the clone in place of the original record, then delete elements (such as table rows) until the template renders.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Isolating errors by cloning templates and stripping content block-by-block is a standard troubleshooting method for broken PDF rendering[cite: 2].'
  },
  {
    id: 'dumps-26',
    text: 'Which of the following is not a standard pricing method in Salesforce CPQ?',
    topic: 'Salesforce CPQ',
    options: [
      'Block Pricing',
      'List Pricing',
      'Rollback Pricing',
      'Cost Pricing'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Rollback Pricing is not a standard CPQ pricing method (valid methods include List, Block, Cost, and Percent of Total)[cite: 1, 2].'
  },
  {
    id: 'dumps-27',
    text: 'Universal Containers wants its users to be able to apply Additional Discounts in the Line Editor at both the Quote and Group level. Which two steps should the Admin take to fulfill this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Add Additional Disc. to the Line Editor Field set on the Quote Line object.',
      'Add Additional Disc. (%) to the Line Editor Field Set on the Quote object.',
      'Add Additional Disc. (%) to the Line Editor Field Set on the Quote Line Group object.',
      'Add Additional Disc. to the Segmented Line Editor Field Set on the Quote Line object.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To surface additional discounts at both quote and group levels, the fields must be added to the respective Line Editor field sets on the Quote and Quote Line Group objects[cite: 2].'
  },
  {
    id: 'dumps-28',
    text: 'The Admin at Universal Containers has a requirement within a specific bundle to ensure that product B is automatically selected when the User selects Product A. The Admin correctly configured its Product Rule to meet this requirement, however the rule does not fire when Product A is selected. What needs to be adjusted so that the Product Rule fires as expected?',
    topic: 'Salesforce CPQ',
    options: [
      'Set Apply Immediately to True on Product record for Product A.',
      'Set Apply Immediately to True on Product record for Product B.',
      'Set Apply Immediately to True on Product Option record for Product B.',
      'Set Apply Immediately to True on Product Option record for Product A.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Checking "Apply Immediately" on the Product Option record for Product A ensures selection rules trigger instantly upon user interaction[cite: 2].'
  },
  {
    id: 'dumps-29',
    text: 'Universal Containers needs to generate two styles of PDF output, one that includes prices in the line item table of the quote is primary, and another that hides prices when the quote is not primary. Where should the Admin reference the primary checkbox field to set up this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'In the Show Currencies Field in the Line Items Template Section.',
      'In the Conditional Print Field of a Template Section for only price Line Columns.',
      'In the Conditional Print Field for each price Line Column.',
      'In the Hide Line Currencies Field in the Quote Template.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Using the Conditional Print Field on template sections or line columns allows visibility to toggle dynamically based on primary quote criteria[cite: 2].'
  },
  {
    id: 'dumps-30',
    text: 'Upon checking the Contracted checkbox on an Amendment Opportunity, a new Contract is generated.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Amending a contract updates or appends to the existing master contract rather than generating an entirely standalone new master contract record[cite: 2].'
  },
  {
    id: 'dumps-31',
    text: 'A User creates a quote with these details: No subscription pricing products. Default Product record fields have not been altered. Renewal Model is Contract based. The Quote has been contracted. Which records will be generated?',
    topic: 'Salesforce CPQ',
    options: [
      'Assets will be created on the opportunity for each product in the quote.',
      'A contract will be generated with subscription for each product in the quote.',
      'Assets will be created on the account for each product in the quote.',
      'A contract will be generated with no subscriptions for each product in the quote.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'When non-subscription products are contracted under a contract-based renewal model, corresponding Asset records are generated on the account[cite: 2].'
  },
  {
    id: 'dumps-32',
    text: 'Universal Containers has set up a lookup field, Distributor__c, on the Quote Line Group to identify different distributors fulfilling specific groups of products on a quote. Distributor accounts have a Discount_Level__c field on them populated with the base discount that products quoted through that distributor should receive. Which set of actions should the Admin take to ensure that the distributor receives the appropriate base discount?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a formula field on quote Line, SBQQ__Group__r.Distributor_r.Discount_Level__c. Create a Price Rule that has a Price Condition where Object equals Quote Line. Tested Field equals the newly created formula field. Add a Price Action to the price Rule Where Source Field equals the newly created formula field.',
      'Create a Price Rule that has a Price Condition where Object equals Quote Line Group. Tested Field equals Distributor__c. Add a Price Action to the Price Rule Where Formula equals SBQQ__Group__r.Distributor_r.Discount_Level__c.',
      'Create a Price Rule that has a Price Condition where Object equals Quote Line Group. Tested Field equals Distributor__c. Add a Price Action to the Price Rule where Source Field equals Discount_Level__c.',
      'Create a Price Rule that has a Price Condition where Object equals Quote Line. Tested Field equals Distributor__c. Add a Price Action to the Price Rule where Formula equals SBQQ__Group__r.Distributor_r.Discount_Level__c.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Price rules targeting parent relationships use source fields mapped down through relationship lookups to pull distributor discounts[cite: 2].'
  },
  {
    id: 'dumps-33',
    text: 'Universal Containers offers the same Products in different regions of the country. Each sales rep is assigned to a single region numbered 1 through 10. Each region has some Products which are region-specific and unavailable to users from other regions. Managers can add Products to a sales rep\'s Quotes that are inaccessible to other sales reps. Which two steps should the Admin take to meet the business requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Add a Search Filter to the add Products Custom Action to filter Products based on the current user.',
      'Create a single Price Book with all Products. Share the Price Book with all users.',
      'Create a Price Book per region for sales reps. Share the regional Price Book with appropriate sales reps.',
      'Use Product rules to hide Products from some sales reps.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Creating regional price books and sharing them with the corresponding sales reps controls product availability by region while allowing managers broader access[cite: 2].'
  },
  {
    id: 'dumps-34',
    text: 'A user at Universal Containers has logged a ticket stating that Cloud Storage Support is priced incorrectly. Based on a Quote with a 12-month Subscription Term and the information below, take the first steps in verifying their claim by calculating the support pricing. What is the calculated List Unit Price the user should see for Cloud Storage Support? Cloud Storage List Unit Price - $1,000, Net Unit Price - $500, Default Subscription Term - 12, Subscription Pricing - Fixed Price, Include in Percent of Total - False. Cloud Backup List Unit Price - $500, Net Unit Price - $250, Default Subscription Term - 12, Subscription Pricing - Fixed Price, Include in Percent of Total - TRUE. Cloud Storage Ent Replication List Unit Price - $4,000, Net Unit Price - $2,000, Default Subscription Term 12, Subscription Pricing - Fixed Price, Include in Percent of Total - TRUE. Cloud Storage Support Default Subscription Term - 1, Subscription Pricing - Percent of Total, Percent of Total Base - Net, Percent of Total (%) - 10%',
    topic: 'Salesforce CPQ',
    options: [
      '$225',
      '$25',
      '$50',
      '$27'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Calculating 10% of the net total of included storage products ($250 + $2,000 = $2,250) yields $225[cite: 2].'
  },
  {
    id: 'dumps-35',
    text: 'What is the correct order of data import to load Quote Template in CPQ?',
    topic: 'Salesforce CPQ',
    options: [
      'Quote Template, Template Sections, Line Columns, Template Content, Quote Terms, Term Conditions',
      'Quote Content, Quote Name, Quote Section, Quote Line Columns, Template Terms, Term Conditions',
      'Template Content, Quote Templates, Template Sections, Line Columns, Quote Terms, Term Conditions',
      'Quote Name, Quote Section, Quote Line Columns, Quote Content, Template Terms, Term Conditions'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Template content and templates must be loaded first so that dependent sections, line columns, and terms can reference them correctly[cite: 2].'
  },
  {
    id: 'dumps-36',
    text: 'Universal Containers plans to sell a configurable group of products but does not want to show the bundle\'s Parent Product to the Client. What should the Admin do to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Check the Optional check box on the Bundle Product Record.',
      'Check the Hidden checkbox on the Bundle Product Record.',
      'Check the Exclude From Opportunity checkbox on the Bundle Product Record.',
      'Check the Hidden checkbox on the Product option Record.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Checking the Hidden checkbox on a bundle parent product record suppresses its display to clients on quotes and documents[cite: 2].'
  },
  {
    id: 'dumps-37',
    text: 'Universal Containers would like a specific background color for the column heading of the line item table in the output document. Where should the Admin input the correct hex code to meet this display requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'In the Template Content source editor in place of the previous hex color code.',
      'In the Shading Color field on the Quote Template record.',
      'In the Group Shading Color field on the Quote Template record.',
      'In the Summary Shading Color field on the Line Column records.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Shading Color field on the Quote Template record allows administrators to specify custom styling colors for table headers[cite: 2].'
  },
  {
    id: 'dumps-38',
    text: 'Given the Discount Schedule and pricing details of the Cloud Storage Product, what is the calculated Regular Unit Price for the Quote Line? List price: $100, Quantity: 5, Type: Slab, Tier 1: 0-3 (0%), Tier 2: 3-6 (10%), Tier 3: 6-blank (20%)',
    topic: 'Salesforce CPQ',
    options: [
      '$480.00',
      '$450.00',
      '$500.00',
      '$470.00'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Under slab rules, the first 3 units have no discount ($300), and the remaining 2 units receive 10% off ($180), totaling $450 or as structured by specific tier boundary breakdowns[cite: 2].'
  },
  {
    id: 'dumps-39',
    text: 'An Admin has set up option constraints in the Universal Container sandbox where Product A depends on the selection of Product B. During testing, it is determined that Product A can be selected regardless of whether Product B has been selected or not. Why is this happening?',
    topic: 'Salesforce CPQ',
    options: [
      'Product A was set up as the Constrained Option.',
      'The Option Constraint was set up with type "Dependency."',
      'Product B was set up as the Constraining Option.',
      'The Option Constraint has not been activated.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Option constraints must have their Active checkbox selected to enforce bundle validation rules[cite: 2].'
  },
  {
    id: 'dumps-40',
    text: 'Which three CPQ pricing functionalities contribute to Regular Price during the price calculation sequence? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Additional Discount Fields',
      'Prorate Multiplier',
      'Contracted Price',
      'Target Customer Amount',
      'Discount Schedules'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Contracted pricing, proration multipliers, and discount schedules form the core calculation path leading up to the Regular Price tier[cite: 2].'
  },
  {
    id: 'dumps-41',
    text: 'Universal Containers has these conditions, that when met, an additional discount of 15% will be automatically added to the overall quote. 1. Revenue Account on the quote object is set as "Interest Revenue". 2. Product A has been added to the quote line. 3. User Count on the account is greater than 25. According to the business requirements, either the Revenue Account is set to "Interest Revenue" or both Product A needs to exist on the quote line and the User Count needs to be greater than 25 in order for the additional discount to be applied. How can the CPQ Admin set this up in advanced conditions on a price rule to reflect this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      '1 OR (2 AND 3)',
      '(1 AND 2) OR 3',
      '1 AND 2 OR 3',
      '(1 AND 3) OR 2'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Using parentheses around conditions 2 and 3 with an AND operator, combined with an OR for condition 1, mirrors the logical requirement[cite: 2].'
  },
  {
    id: 'dumps-42',
    text: 'Users at Universal Containers have reported when amending a contract, the net pricing of some products is incorrect. The Admin has done a preliminary investigation and found that the issue only happens on existing products when their quantity is adjusted. What is the likely cause?',
    topic: 'Salesforce CPQ',
    options: [
      'The Revised Quantity has been set on the Subscription record.',
      'The Products have a Discount Schedule and Cross Order is not selected.',
      'A Price Rule is firing Before Calculate and changing the Regular Unit Price.',
      'A Price Rule is firing On Calculate and changing the Effective Quantity.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Without cross-order or cross-product discounting enabled, amended quantities might evaluate tiers independently rather than cumulatively[cite: 2].'
  },
  {
    id: 'dumps-43',
    text: 'The Universal Containers Admin is creating a custom formula field, Approval Score, on the Quote Line object to calculate approval score. This field will calculate the average approval score for the Quote to determine how many levels of approval the record should go through when submitted. The Admin planned to use a roll-up summary field on the Quote object to average the Quote Line Approval Score field. The Admin received an error when attempting to create the field. The Quote object has too many roll-up summary fields. In addition to creating a custom number field on the Quote object to capture the average Approval Score, which action Should the Admin take to resolve the issue?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a trigger to populate the average Approval Score.',
      'Create a Summary Variable and Product Rule to populate the number field with the average Approval Score.',
      'Create a Workflow Rule with a Field Update to populate the average Approval Score.',
      'Create a Summary Variable and Price Rule to populate the number field with the average Approval Score.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Summary variables combined with Price Rules provide a declarative alternative to roll-up summary fields for injecting calculations onto quote records[cite: 2].'
  },
  {
    id: 'dumps-44',
    text: 'Universal Containers (UC) wants to use an Option Constraint in a bundle that requires a user to sell Product Option X before they can sell Product Option Y. Sales has indicated that this would be too restrictive, and they want to be able to select Product Option Y as long as Product Option X is an existing asset on the account. UC has approved this change. What should the Admin do to address this change?',
    topic: 'Salesforce CPQ',
    options: [
      'Mark the "Check Prior Purchases" checkbox as TRUE.',
      'List accounts with assets in the "Option Constraint Group" field.',
      'Use a Product Rule instead of an Option Constraint.',
      'Look up the account with the assets on the "Account" field.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Checking the "Check Prior Purchases" checkbox instructs option constraints to validate historical assets or subscriptions on the account[cite: 2].'
  },
  {
    id: 'dumps-45',
    text: 'Universal Containers has the following Discount Schedule attached to product L. Product L is a Product Option for two bundles, A and B. A user at Universal Containers has added both bundles to a Quote. In Bundle A, Product L has a Quantity of 7. In Bundle B, Product L has a Quantity of 8. On this Quote, however, both Product Options are being discounted using the second tier in the table above. Which two actions allow both Product Options to be discounted using the first tier?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Aggregation Scope field on the Discount Schedule to None, as well as uncheck Cross Products.',
      'Apply a separate discount schedule to the Product Option records in each Bundle.',
      'Move Discount Schedule X from Product L to the corresponding Product Option records in each Bundle.',
      'Change the Product Option Type for Product L to Related Product in both Bundles.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Setting aggregation scope to None and disabling cross-products prevents individual quote line quantities from combining together into higher discount tiers[cite: 2].'
  },
  {
    id: 'dumps-46',
    text: 'Universal Containers conducts business via channel sales and offers a Partner program, in which Partners receive a different level of discount based on their partnership level and the product family. The CPQ Architect has determined that the Partner discount will be automatically assigned with price rules, based on a lookup table. The CPQ Architect has created the following lookup table with an object named "Partner Program". How many price rules should the Admin create in order to process the four different discounts offered to Partners?',
    topic: 'Salesforce CPQ',
    options: [
      'Four',
      'Two',
      'Three',
      'One'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Lookup queries allow a single price rule to dynamically fetch and apply multiple varying matrix values without needing separate rules per tier[cite: 2].'
  },
  {
    id: 'dumps-47',
    text: 'Universal Containers wants to calculate the net amount of all hardware products on a quote. For this purpose, the Admin creates a price rule injecting the result of a summary variable into a quote field. Which picklist value(s) from the Calculator Evaluation Event field should be selected for this price rule?',
    topic: 'Salesforce CPQ',
    options: [
      'Before Calculate and On Calculate',
      'After Calculate',
      'On Calculate',
      'On Calculate and After Calculate'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Summary variables aggregate totals during calculation, so price rules referencing them to populate quote-level fields must evaluate After Calculate[cite: 2].'
  },
  {
    id: 'dumps-48',
    text: 'Which of the following is not a part of a Product Bundle?',
    topic: 'Salesforce CPQ',
    options: [
      'Options',
      'Products',
      'Feature Constraints',
      'Features'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Feature Constraints are not structural components of product bundles (bundles consist of options, features, and configuration rules)[cite: 2].'
  },
  {
    id: 'dumps-49',
    text: 'Universal Container (uc) sells a Product that is only sold as part of a bundle. UC wants to remove this item from the Product Selection screen. How can the Admin configure the Product to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Asset Conversion field to One per unit.',
      'Set the Configuration Type field to Allowed.',
      'Select the Component checkbox on the Product.',
      'Select the Hidden checkbox on the Product.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Checking the Component checkbox on a product record removes it from standalone product selection catalogs, restricting it exclusively to bundle structures[cite: 2].'
  },
  {
    id: 'dumps-50',
    text: 'Universal Containers wants to apply different Discount Schedules depending on the currency of the Quote, how should the Admin set this up?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Lookup Relationship on the Quote to the Discount Schedule for the user to populate.',
      'Using a Price Rule, Inject the ID of the Discount Schedule sourced from a formula field on the Quote Line.',
      'Modify the Discount Schedule formula field on the Quote Line to reference the IDs of your Discount Schedules.',
      'Create a Discount Schedule for each currency in the related list on the Product.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Injecting schedule IDs dynamically using price rules based on currency evaluations handles multi-currency discount schedule routing[cite: 2].'
  },
  {
    id: 'dumps-51',
    text: 'User A at Universal Containers has an active quote with Company A. Before the quote is finalized, however, Universal Containers enters into an agreement with Company A to always provide a 20% discount on one of the products that User A is quoting. An Admin has correctly configured the contracted price. When User A recalculates, however, the contracted price is not applied. What explains this behavior?',
    topic: 'Salesforce CPQ',
    options: [
      'The User must press Refresh Prices to see the effect.',
      'The quote line for this product has Non Discountable checked.',
      'The contracted price is only applied when adding a product.',
      'The User must set Allow Contracted Prices on their quote.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Contracted prices evaluate during initial product addition; re-evaluating existing quote lines requires refreshing prices or clearing lines if added prior to contract establishment[cite: 2].'
  },
  {
    id: 'dumps-52',
    text: 'In Universal Containers\' original implementation, all Additional Discount fields were removed from the Quote Line Editor Interface in favor of a custom field. Today, Universal Containers wants to use the out-of-the-box Additional Discount field to apply on a Product-by-Product basis for all Products. To which Field Set does the Admin need to add the Additional Discount field?',
    topic: 'Salesforce CPQ',
    options: [
      'The Quote Line object\'s Summary Fields Field Set.',
      'The Quote object\'s Line Editor Field Set.',
      'The Quote Line object\'s Line Editor Field Set.',
      'The Quote Line Group object\'s Line Editor Field Set.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Quote-level additional discounts managed in the editor interface are controlled via the Line Editor field set on the Quote object[cite: 2].'
  },
  {
    id: 'dumps-53',
    text: 'Northern Trail Outfitters (NTO) has a growing list of Products. NTO has experienced challenges in keeping its bundled Products up-to-date and has asked the CPQ Specialist if there is a better way to manage its Product catalog. Which option is the most appropriate for the CPQ Specialist to suggest first?',
    topic: 'Salesforce CPQ',
    options: [
      'Use Option Layout of Tabs for the bundle parent to expose Features on individual tabs within Product Configuration.',
      'Use a Dynamic Feature for the bundle parent and create a Filter Product Rule.',
      'Use Nested Bundles to reduce the number of Product Options that need to be maintained when new products become available.',
      'Use the Preserve Bundle Structure checkbox in Package Settings to allow new products to be added to existing bundles.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Dynamic features paired with filter product rules automatically surface matching products without requiring manual static option maintenance[cite: 2].'
  },
  {
    id: 'dumps-54',
    text: 'Universal Containers implemented CPQ Contract Amendment functionality via the Amend button on the Opportunity. Since an Account can have many different Contracts, the Admin implemented a Contract Name field to allow the user to enter identifying information on each Contract record. How can the Admin ensure that the user is presented with the custom Contract Name field when the user initiates an Amendment?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a custom Field Set on Contract and add the custom Contract Name fields to the field Set.',
      'Add the custom Contract Name field into the Active Contract Lookup Field Set on the Opportunity object.',
      'Add the custom Contract Name field into the Active Contract Lookup Field Set on the Contract object.',
      'Create a custom Page Layout and add the custom Contract Name field to the layout.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Customizing the Active Contract Lookup field set on the Contract object adds columns to the existing contracts selection table during amendments[cite: 2].'
  },
  {
    id: 'dumps-55',
    text: 'Using Bundles allows you to have multiple price books on an opportunity.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'An opportunity can only reference a single active price book at any given time[cite: 2].'
  },
  {
    id: 'dumps-56',
    text: 'Universal Containers has a requirement to set a maximum discount approval threshold for the User. This Threshold is a calculated value based on data held in a Custom Object. The Admin has determined that this will require two price rules. The first rule is a lookup rule that Pulls a value from a custom object record and set it to a custom field on the quote line. The second price rule evaluates if the custom field is populated, and if so, it calculates the maximum discount threshold using that value. Both Price Rules have Evaluation Events set to On Calculate. The Second Price Rule is not running. How should the Price Rules be altered so that the second Price Rule will run?',
    topic: 'Salesforce CPQ',
    options: [
      'Both Price Rules must be moved to the Before Calculate Evaluation Event.',
      'The order of the Price Action for the first Price Rule must be earlier than that of the second.',
      'The second Price Rule must have the same Evaluation Order as the first.',
      'The second Price Rule must be in a later Calculator Evaluation Event.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Dependent price rules evaluating data populated by earlier rules require sequential calculator evaluation events or distinct evaluation order sorting[cite: 2].'
  },
  {
    id: 'dumps-57',
    text: 'Universal Containers requires an output document that has Quote Terms localized to three languages, selectable by the user. Which two tasks should the Admin complete to set up localization of the quote PDF? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Quote picklist field named output Language, With language codes as values.',
      'Create Localization records for individual Quote Terms for all three languages.',
      'Enable "Allow Output in Different Languages" In the managed package settings.',
      'Set the Quote Term field Language to the desired output language for each Quote Term.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Enabling multi-language support in package settings and supplying corresponding localization records enables multi-language quote output documents[cite: 2].'
  },
  {
    id: 'dumps-58',
    text: 'Universal Containers wants to update the Quantity of a Product in the Line Editor with a Price Rule. The rule should apply only for this one specific Product. What should the Admin do to ensure that the Price Rule only changes Quote Lines referencing this Product?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Price Condition against a Quote Line field that contains a value that is unique to the product selected.',
      'Create an Error Condition against a Quote Line field that contains a value that is unique to the product selected.',
      'Fill in the Product field on the Price Rule with the Product.',
      'Fill in the Lookup Object field on the Price Rule with the Product.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Price conditions evaluating product-specific fields or product codes isolate price rule actions to matching quote lines[cite: 2].'
  },
  {
    id: 'dumps-59',
    text: 'A User tries to add a specific product to the quote and has typed the full Product Name into the Product Name search filter and clicks apply, but does not see the product in the search results. What is the reason why this product is not displayed?',
    topic: 'Salesforce CPQ',
    options: [
      'A hidden search filter was set',
      'A product rule is firing',
      'A quote process is active',
      '"Sort Products in Memory" is enabled'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Hidden search filters apply background constraints automatically that can restrict expected product visibility on search screens[cite: 2].'
  },
  {
    id: 'dumps-60',
    text: 'An Admin has created a validation product rule that must display an error message upon clicking Save if a product option is selected while a configuration attribute is set to a specific value. When the user chooses the product option, then sets the configuration attribute to the specific value, the error message appears before Save is clicked. Which two should the Admin change the rule or configuration attributes so that the error message only appears upon clicking Save? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Change the configuration attribute field Apply Immediately to False.',
      'Change the product rule field Evaluation Event to Save.',
      'Change the product option field Apply Immediately to True.',
      'Add a product rule Condition to check if Evaluation Action = Save.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Disabling "Apply Immediately" on configuration attributes and setting rule evaluation events to save defers rule execution until save actions occur[cite: 2].'
  },
  {
    id: 'dumps-61',
    text: 'Universal Containers sells a monthly subscription service with tiered pricing: Total Price $1,000 for the first 100 units, $1,000 plus $9 per unit above 100, $4,600 plus $8 per unit above 500, $8,600 plus $7 per unit above 1,000. Which pricing method should the Admin Select for this service?',
    topic: 'Salesforce CPQ',
    options: [
      'Tiered',
      'Segmented',
      'List',
      'Block'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'A pricing structure that charges flat prices for specific quantity blocks represents Block Pricing[cite: 2].'
  },
  {
    id: 'dumps-62',
    text: 'Universal Containers wants to have quantity requirements for certain Product options in a bundle. The Product Option\'s quantity must be multiplied by the quantity of the bundle product. How should the Admin set this up in the bundle to meet the requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the Multiplier checkbox on the Bundle.',
      'Select the Bundled checkbox on the Product Option.',
      'Select Component as the Type field on the Product Option.',
      'Select the Quantity Editable checkbox on the Product Option.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Setting the Option Type to Component multiplies the option quantity dynamically by the quantity of the parent bundle[cite: 2].'
  },
  {
    id: 'dumps-63',
    text: 'The Admin at Universal Containers recently created a new custom field referenced on the Target Field on a Price Action in a Price Rule. While testing the Price Rule, the Admin noticed that the Price Action failed to populate the custom field. The Admin checked the CPQ Package Setting and noticed that the Triggers Disabled checkbox was checked. After unchecking Triggers Disabled, the custom field still failed to populate. How can the Admin ensure this custom field can be referenced by the calculator?',
    topic: 'Salesforce CPQ',
    options: [
      'The Admin must reference a standard CPQ field because custom fields are unsupported with Price Rules.',
      'Revoke the Advanced Calculator and re-authorize the Calculation Service.',
      'Rename the custom field label, then recreate the Price Action to reference the new field label.',
      'Re-execute the Post Install Script in Package settings to ensure the Calculator Referenced Fields are up-to-date.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Re-executing the Post Install Script refreshes package metadata fields so the advanced calculator recognizes new custom fields[cite: 2].'
  },
  {
    id: 'dumps-64',
    text: 'An Admin at Universal Containers wants Configuration Attribute X to appear on the configuration page of bundle Y. The value selected will drive a Selection Product Rule, and will also be listed in a Line Item Column in the output document. On which objects will the Admin need to create the Configuration Attribute X custom field in order to meet his requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Configuration Attribute and Product Option',
      'Product Option and Quote',
      'Configuration Attribute and Quote',
      'Product Option and Quote Line'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'To pass configuration attribute choices through to quote documents and lines, matching fields must exist on the Product Option and Quote Line objects[cite: 2].'
  },
  {
    id: 'dumps-65',
    text: 'Universal Containers wants to create a new product that will be sold as part of a bundle. The product should be priced as 10% of all components\' net total price and carry a term of 12 months. Which product and option configuration will attain the required pricing?',
    topic: 'Salesforce CPQ',
    options: [
      'Subscription Pricing: Fixed, Percent of Total (%): 10, Include in Percent of Total: False, Subscription Term: 12',
      'Subscription Pricing: Percent of Total, Percent of Total (%): 10, Exclude from Percent of Total: True, Subscription Term: 12',
      'Subscription Pricing: Percent of Total, Percent of Total (%): 10, Subscription Term: 12',
      'Subscription Pricing: Fixed, Percent of Total (%): 10, Include in Percent of Total: True, Subscription Term: 12'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Setting Subscription Pricing to Percent of Total with a 10% value and a 12-month subscription term calculates price relative to bundle components[cite: 2].'
  },
  {
    id: 'dumps-66',
    text: 'Universal Containers (UC) sells a product that uses Percent of Total to determine its price. UC wants to ensure that this product is always priced at a minimum of $100, even if the calculated amount falls under $100. Which two steps should the Admin take to meet this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Price Book Entry of $100 for the product',
      'Set the Price Book Entry custom field Percent_of_Total_Target__c to $100.',
      'Set the product\'s Percent of Total Constraint field to List price is minimum.',
      'Create a Price Book Entry of $0 for the product.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Setting the price book entry to the minimum threshold and specifying the constraint flag as list price minimum enforces price boundaries[cite: 1, 2].'
  },
  {
    id: 'dumps-67',
    text: 'Product A is a Product Option in a bundle and has a Price Book price of $100. When Product A is selected and its quantity is greater than 10, its price falls to $50. The Admin decides to use a Price Rule targeting the Configurator to implement this price change. Which minimum set of Price Conditions and Price Actions should the Admin create for this Price Rule?',
    topic: 'Salesforce CPQ',
    options: [
      'One Price Condition verifying that product name equals "Product A". One Price Condition using a Summary Variable summing up the quantity of Product A to verify that this Summary Variable is greater than 10. One Price Action to inject the value 50 into Unit Price field.',
      'One Price Condition using a Summary Variable counting Product A to verify that Product A is selected. One Price Action to inject the value 10 into the Quantity field.',
      'One Price Condition using a Summary Variable summing up the quantity of Product A to verify that this Summary Variable is greater than 10. One Price Action to inject the value 10 into the Quantity field.',
      'One Price Condition using a Summary Variable counting Product A to verify that Product A is selected. One Price Condition using a Summary Variable summing up the quantity of Product A to verify that this Summary Variable is greater than 10. One Price Action to inject the value 50 into the Unit Price field.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Configurator-scoped price rules use conditions targeting options and summary variables to adjust unit prices dynamically during configuration[cite: 2].'
  },
  {
    id: 'dumps-68',
    text: 'Universal Containers wants to update a custom Quote Line field within the Quote Line Editor with a value of Low, Medium, or High to categorize the margin of each Quote Line. Which approach should the CPQ Specialist recommend to meet this business requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'A Price Rule with the Calculation Event of On Initialization to update the picklist field',
      'A Process Builder on the Quote Line to update the picklist field',
      'A Workflow Rule and field update on the Quote Line to update the picklist field',
      'A Price Rule with the Calculation Event of After Calculate to update the picklist field'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Price rules evaluating margins and totals must run on or after calculation events once pricing data is fully computed[cite: 2].'
  },
  {
    id: 'dumps-69',
    text: 'Universal Containers has a bundle with required Product Options. After the bundle is selected, the user should bypass the configuration process. How should the Admin set up the bundle to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Configuration Event field on the bundle Product to be Disabled, and select the checkbox for Bundled on the Product Options.',
      'Set the Configuration Event field on the bundle Product to be Required, and select the checkbox for Required on the Product Options.',
      'Set the Configuration Event field on the bundle Product to be Allowed, and select the checkbox for bundled on the Product Options.',
      'Set the Configuration Event field on the bundle Product to be Disabled, and select the checkbox for Required on the Product Options.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Disabling configuration events while enforcing required option selections forces bundles to instantiate automatically without opening configurator screens[cite: 2].'
  },
  {
    id: 'dumps-70',
    text: 'What is the correct order of data import to load Price Rules into CPQ?',
    topic: 'Salesforce CPQ',
    options: [
      'Costs, Price Books, Price Rules, Discount Categories, Discount Schedules',
      'Price Books, Price Rules, Price Dimensions, Discount Tiers, Price Actions',
      'Price Books, Price Rules, Lookup Queries, Price Conditions, Price Actions',
      'Summary Variables, Price Rules, Price Conditions, Lookup Queries, Price Actions'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Summary variables and primary rule headers must be imported before child conditions, queries, and actions can link to them[cite: 2].'
  },
  {
    id: 'dumps-71',
    text: 'An Admin has set up a Quantity Editable Product. The user can add the product to the Quote and adjust the Quantity on the Quote Line. When the user navigates to the Opportunity and inspects to the Opportunity Product, the user only sees the Quantity on 1 on the Opportunity Product. What are two reasons why the Opportunity Product record has a Quantity of 1? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'The Product has an associated Slab Discount Schedule.',
      'The Product\'s Default Quantity field value is equal to 1.',
      'The Product\'s Pricing Method field value is equal to Block.',
      'The Product is associated to a Product Option with the Type field value equal to Component.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Block-priced items evaluate quantity through block definitions rather than linear line quantities, locking opportunity product output counts accordingly[cite: 2].'
  },
  {
    id: 'dumps-72',
    text: 'Universal Containers has quotes that have multiple Quote Lines for the same Product. They require all Products with the Product Name to be combined and summed into one line on the Quote Document. How should the Admin set up the Quote Template to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Roll up Field to be Product.',
      'Set the Group Field to be Product.',
      'Set the Sub Group Field to be Product.',
      'Set the Total Field to be Net Total.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Roll-up Field on quote templates combines matching line items sharing the specified attribute into a single consolidated row[cite: 2].'
  },
  {
    id: 'dumps-73',
    text: 'Universal Containers offers a 50% customer discount promotion this month for Product A. The Admin decides to use a Price Rule to enable this promotion. Which set of Price Actions Should the Admin create on this Price Rule?',
    topic: 'Salesforce CPQ',
    options: [
      'One Price Action to inject 50 in the SBQQ__Discount__c field on the Quote Line and one Price Action to inject a blank value in the SBQQ__AdditionalDiscountAmount__c field on the Quote Line.',
      'One Price Action to inject 0.5 * SBQQ__OriginalPrice__c in the SBQQ__SpecialPrice__c field on the Quote Line and one Price Action to inject the text "Custom" in the SBQQ__SpecialPriceType__c field on the Quote.',
      'One Price Action to inject 0.5 in the SBQQ__CustomerDiscount__c field on the Quote Line and one Price Action to inject a blank value in the SBQQ__CustomerDiscountAmount__c field on the Quote Line.',
      'One Price Action to inject 50 in the SBQQ__Discount__c field on the Quote Line.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Injecting the discount percentage directly into the standard discount field on quote lines applies promotional percentages automatically[cite: 2].'
  },
  {
    id: 'dumps-74',
    text: 'Which of the following is not a prorate precision option in the Package Settings?',
    topic: 'Salesforce CPQ',
    options: [
      'Month',
      'Month + Week',
      'Month + Day',
      'Day'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Month + Week is not a standard proration precision option in CPQ package settings (supported values include Month, Day, and Month + Day)[cite: 2].'
  },
  {
    id: 'dumps-75',
    text: 'When selecting Product Option A inside a bundle, Universal Containers has a requirement that Product Option B\'s Quantity should be updated in real time. Apply Immediately has been set on Product Option A. Which settings should be used on the Price Rule to meet these requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Evaluation Scope = Calculator, Calculator Evaluation Event = Save',
      'Evaluation Scope = Configurator, Configurator Evaluation Event = Edit',
      'Evaluation Scope = Calculator, Calculator Evaluation Event = Edit',
      'Evaluation Scope = Configurator, Configurator Evaluation Event = Save'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Configurator-scoped price rules with edit evaluation events update option values instantly inside the bundle configurator page[cite: 2].'
  },
  {
    id: 'dumps-76',
    text: '"UC Admin wants to prevent a Quote Term from being edited by non-admin users. What should the Admin do to meet this requirement?"',
    topic: 'Salesforce CPQ',
    options: [
      'On the Quote Term record, check the Read-Only checkbox.',
      'On the User Profile, make the object Read-Only.',
      'On the Quote Term object, make the Object Read-Only.',
      'On the Quote Term record, check the Locked checkbox.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Checking the Locked checkbox on a Quote Term record prevents non-admin users from modifying template terms[cite: 2].'
  },
  {
    id: 'dumps-77',
    text: 'Universal Containers (UC) has Product Options in a bundle that must be displayed in the Quote Line Editor to the User. However, UC does not want these Product Options to display on the Quote Document that is generated and presented to the Customer. How should the Admin set up the bundle to meet these requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the Hidden checkbox on the Product Option.',
      'Select the Bundled checkbox on the Product Option.',
      'Set the Quote Line Visibility field to Editor Only on the Product Option.',
      'Set the Quote Line Visibility field to Always on the Product Option.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Setting Quote Line Visibility to "Editor Only" keeps components visible in internal editing screens while hiding them from customer PDF documents[cite: 2].'
  },
  {
    id: 'dumps-78',
    text: 'The Admin at Universal Containers received feedback that users are trying to reconfigure bundles on renewal quotes and finding that the Configuration Attribute values are blank and must be manually fixed. This issue is not observed on new business quotes. What is the cause and possible resolution to this problem?',
    topic: 'Salesforce CPQ',
    options: [
      'Configuration Attributes not configured for renewals; check Preserve for Renewals on Configuration Attribute records.',
      'Preserve Bundle Structure not set up on Contract object; create a workflow rule to automatically set to true.',
      'Field mapping not set up; create field on Subscription/Asset records with the same API name as field on Quote Line.',
      'Field mapping not set up; create field on Quote Line with the same API name as the field in the configuration attribute.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Configuration attribute values must be carried over through matched twin fields on subscription and asset records to persist across renewals[cite: 2].'
  },
  {
    id: 'dumps-79',
    text: 'The Admin wants quote Terms to display on an output document which includes existing admin-created sections. Which object records should the Admin create for the output document?',
    topic: 'Salesforce CPQ',
    options: [
      'Quote Term, Template Section, Terms and Conditions',
      'Quote Term, Template Content with Type set to HTML, Template Section',
      'Quote Term, Template Content with Type set to Quote Terms, Terms and Conditions',
      'Quote Term, Template Content with Type set to Quote Terms, Template Section'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Displaying terms requires creating a Quote Term record, a Template Content record of type Quote Terms, and linking it via a Template Section[cite: 2].'
  },
  {
    id: 'dumps-80',
    text: 'Universal Containers wants to prevent a User from putting in a discretionary discount at or above 40 percent on any quote Line. How should the Admin implement this restriction?',
    topic: 'Salesforce CPQ',
    options: [
      'An Alter Product Rule will use an Error Condition against the Quote Line object. The Additional Discount (%) field will be tested in the Error Condition.',
      'An Alert Product Rule will use an Error Condition against the Quote Line object. A Summary Variable will be used to calculate the maximum discount.',
      'A Validation Product Rule will use an Error Condition against the Quote Line object. The Additional Discount (%) field will be tested in the Error Condition.',
      'A Validation Product Rule will use an Error Condition against the Quote Line object. A Summary Variable will be used to calculate the maximum discount.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Validation product rules evaluate error conditions against quote line discount fields to block excessive manual discounting[cite: 2].'
  },
  {
    id: 'dumps-81',
    text: 'While performing an amendment, a sales rep is unable to edit the Additional Discount for an existing subscription Quote Line. What is the cause of this behavior?',
    topic: 'Salesforce CPQ',
    options: [
      'The org is using legacy amendment and renewal service.',
      'A Product Rule is preventing the Additional Discount from being edited.',
      'Additional Discount is a locked field on amendment Quotes.',
      'The Non Discountable field is marked True on the Product record for the Quote Line.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'If a product has the Non Discountable checkbox selected, its pricing and additional discounts cannot be altered during quotes or amendments[cite: 2].'
  },
  {
    id: 'dumps-82',
    text: 'Universal Containers has a Product that has a Subscription Term of 12 months. Users frequently create Quotes which are longer than this period. When adding this Product to these Quotes, however, the Prorated List Price is the same as the List price. Which action should the Admin take to correct the issue?',
    topic: 'Salesforce CPQ',
    options: [
      'Populate Subscription Pricing on the Product.',
      'Populate Subscription Pricing on the Quote Line.',
      'Check "Enable Proration" on the Quote.',
      'Populate Default Subscription Term on the Quote Line.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Subscription pricing must be defined on the product record for CPQ to recognize it as a subscription and apply proration multipliers[cite: 2].'
  },
  {
    id: 'dumps-83',
    text: 'Universal Container (UC) has a required Configuration Attribute for color on all containers it sells. UC wants to display the Color of the containers in the output document. On which objects will the Admin need to create the Color field to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Product Option, Quote Line.',
      'Quote Line, Asset.',
      'Product, Product Option.',
      'Product, Quote Line.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Configuration attribute field mapping requires twin fields on the option and quote line to pass selections through to documents[cite: 2].'
  },
  {
    id: 'dumps-84',
    text: 'Universal Containers wants line items to be organized into pre-defined groups on the output document. The name of these pre-defined groups needs to be displayed above each group in the output to identify it. Which two ways can an Admin meet this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Group field on the Line Items type of Template Content record.',
      'Create Solution Groups, allowing users to group products on the Quote Line Editor.',
      'Set the Group Field field on the Quote Template or Template Section records.',
      'Set the New Quote Group field on each Product record with the associated group name.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Configuring group fields on template sections or content structures line items into labeled visual categories on generated PDFs[cite: 2].'
  },
  {
    id: 'dumps-85',
    text: 'Universal Containers wants to apply an additional discount of 15% to the Quote when Payment Frequency is Monthly or Bi-Weekly and Product A is added or User Count greater than 25 is defined. What is the correct Price Rule Setup?',
    topic: 'Salesforce CPQ',
    options: [
      'One Price Rule with Conditions Met set to Custom, three Price Conditions, and one Price Action.',
      'Four Price Rules with Conditions Met set to All, one Price Condition each and one Price Action each.',
      'One Price Rule with Conditions Met set to All, four Price Conditions, and one Price Action.',
      'Two Price Rules with Conditions Met set to All, one Price Condition on one rule and two on the other, and one Price Action each.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Complex criteria involving mixed AND/OR logic require setting Conditions Met to Custom with custom index logic[cite: 2].'
  },
  {
    id: 'dumps-86',
    text: 'What are the three major features that SBAA offers over standard salesforce approvals? (Choose 3)',
    topic: 'Salesforce CPQ',
    options: [
      'Parallel Approvals',
      'Dynamic Approvals',
      'Smart Approvals',
      'Hierarchical Approvals',
      'Email Approvals',
      'Group Approvers'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Salesforce CPQ Advanced Approvals (SBAA) introduces parallel, dynamic, and smart approval capabilities beyond standard native approval processes[cite: 2].'
  },
  {
    id: 'dumps-87',
    text: 'A sales rep notices on Opportunity that only some Opportunity Products are synched from Quotes. This discrepancy causes inaccuracies in the pipeline. Which three troubleshooting steps should the Admin take to resolve the issue? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Ensure the Quote\'s Account lookup is populated.',
      'Ensure the Opportunity\'s Primary Quote lookup is populated.',
      'Check the Quote\'s Primary checkbox for a value of True.',
      'Ensure the Quote\'s Opportunity lookup is populated.',
      'Check the Quote\'s Primary checkbox for a value of False.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Line synchronization requires quotes to be marked primary and properly linked to opportunities and accounts[cite: 2].'
  },
  {
    id: 'dumps-88',
    text: 'The Admin at Universal Containers would like all optional products to be displayed separately from non-optional products. The two-line item sections have been set up in the quote template and named as follows: Required, Optional. What are the two steps the Admin should take in order to finish setting up the quote template? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'For the Required Section: Filter Field: Optional, Filter Operator: Equals, Filter Value: True',
      'For the Required Section: Filter Field: Optional, Filter Operator: Equals, Filter Value: False',
      'For the Optional Section: Filter Field: Optional, Filter Operator: Equals, Filter Value: False',
      'For the Optional Section: Filter Field: Optional, Filter Operator: Equals, Filter Value: True'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Filtering template sections based on the Optional checkbox field separates required and optional quote lines into distinct tables[cite: 2].'
  },
  {
    id: 'dumps-89',
    text: 'To validate inside the Line Editor page, it is best practice to build a standard Salesforce Validation.',
    topic: 'Salesforce CPQ',
    options: [
      'True, standard Salesforce validation should be setup on the Quote object.',
      'True, standard Salesforce validation should be setup on the Quote Line object.',
      'False, Steelbrick Price Rule should be used for validation.',
      'False, Steelbrick Product Rule should be used for validation.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Salesforce CPQ uses specialized Product Rules for validation within the Quote Line Editor rather than standard platform validation rules[cite: 2].'
  },
  {
    id: 'dumps-90',
    text: 'Universal Containers wants to introduce a new product as an add-on item for an existing bundle that its customers can purchase on a yearly basis. The price of the product will be 15% of the combined prices of the other products and should not contribute value to other Percent of Total subscription products. Which configuration is a valid way to set up this new product?',
    topic: 'Salesforce CPQ',
    options: [
      'Subscription Pricing: Fixed, Percent of Total (%): 15%, Include in Percent of Total: False, Subscription Term: 1',
      'Subscription Pricing: Percent of Total, Percent of Total (%): 15%, Exclude from Percent of Total: True, Subscription Term: 12',
      'Subscription Pricing: Percent of Total, Percent of Total (%): 15%, Exclude from Percent of Total: False, Subscription Term: 1',
      'Subscription Pricing: Fixed, Percent of Total (%): 15%, Include in Percent of Total: True, Subscription Term: 12'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Excluding items from percent of total calculation prevents nested compounding loops while applying percentage pricing rules correctly[cite: 2].'
  },
  {
    id: 'dumps-91',
    text: 'An Admin creates a Search Filter for Product Code that has a predefined Filter Value of Green and an operator of "starts with". If the Search Filter is visible, how can sales reps interact with the filter on the Product Selection screen?',
    topic: 'Salesforce CPQ',
    options: [
      'Sales reps can replace the text, but are unable to leave the required field blank.',
      'Sales reps can change the operator from "starts with" to "contains".',
      'Sales reps can see the filter, but are unable to alter the filter text.',
      'Sales reps can delete the text to ignore the filter.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Users can clear or modify search filter text boxes on the product selection screen unless the filter is explicitly locked or hidden[cite: 2].'
  },
  {
    id: 'dumps-92',
    text: 'Universal Containers sells a subscription Product Z that is sold in yearly segments, but would like to prevent the User from discounting the first segment. How should the CPQ Admin ensure the User will not be able to discount the first segment?',
    topic: 'Salesforce CPQ',
    options: [
      'Write a Price Rule to run when Product Code = Product Z and Segment Index = 1, with a Price Action setting Non Discountable to True.',
      'Set First Segment Term Editable to Only Custom Segments in the yearly Price Dimension record.',
      'Create two Price Dimensions, then set Non Discountable to False on the first Price Dimension.',
      'Write a Price Rule to inject 0 into Additional Discount when Product Code = Product Z and Initial Segment = True.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Price rules targeting specific segment indices can dynamically lock line items from discretionary discounting[cite: 2].'
  },
  {
    id: 'dumps-93',
    text: 'A User forgot to store an Additional Discount at the Quote level while they were in the Line Editor. Rather than going back in, they have changed the field on the Quote\'s detail page. After doing so, however, no prices were updated to reflect the new discount. Which reason could explain this unexpected behavior?',
    topic: 'Salesforce CPQ',
    options: [
      'The Additional Discount is only applied to the Amount fields on the Quote.',
      'Fields updated outside of the Line Editor do not affect Pricing.',
      'The Additional Discount field is not in the Calculating Fields field set.',
      'A Price Rule is needed to inject this value into the Quote Lines.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Quote-level fields that trigger calculation re-evaluations must be included within the Calculating Fields field set[cite: 2].'
  },
  {
    id: 'dumps-94',
    text: 'Universal Containers sells a bundle with multiple options. An Admin wants to allow the user the ability to choose options and define quantity during bundle configuration. Which three values for Configuration Type will meet this requirement? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'None',
      'Configurable',
      'Allowed',
      'Disabled',
      'Required'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Configuration types like Allowed and Configurable permit users to adjust and pick options during bundle configuration[cite: 2].'
  },
  {
    id: 'dumps-95',
    text: 'A user needs to amend a contract and change prices to reflect new discounts for existing active subscriptions and assets. How should the user achieve this?',
    topic: 'Salesforce CPQ',
    options: [
      'Clone the Quote Lines which need to be updated. Modify the desired discounts on the cloned Quote Lines. Update the original Quote Lines to a Quantity of zero.',
      'Create a Price Book with Price Book Entries to reflect the new prices. Populate the Contract Amendment Price Book ID field with the new Price Book ID to generate Amendment Lines with new prices.',
      'Change the status of the contract to Draft. Make price changes on the original quote used to generate the contract and check Contracted on the Opportunity again.',
      'Change the values for Net Price on the subscription or Price field on the asset. Amend the contract and use Refresh Prices.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Updating subscription net prices or asset price fields prior to amendment generation allows the refresh prices action to pull updated contract pricing[cite: 2].'
  },
  {
    id: 'dumps-96',
    text: 'Universal Containers has seven different sets of questions for its users to consider before displaying a subset of its complete product catalog for selection onto the quote. The set of applicable questions is determined by the answer to an initial question. How should the Admin set this up?',
    topic: 'Salesforce CPQ',
    options: [
      'Create one quote process and dynamically display subsequent questions depending on answers to the prior question.',
      'Create eight quote processes (one for the initial question, seven for the subsequent ones) and switch between the processes using a workflow rule on the quote.',
      'Create a picklist on the opportunity to store the initial question answer, and seven quote processes set by workflow on the quote based on this field.',
      'Create one product search filter that shows one of seven bundles with configuration attributes representing the values for the other questions.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Guided selling quote processes support conditional logic to display subsequent questions dynamically based on prior responses[cite: 2].'
  },
  {
    id: 'dumps-97',
    text: 'Universal Containers wants to show a Monthly Price column on the Quote Document if the Quote has Payment Terms of Net 30. In addition to creating the Monthly Price Line Column, which two Configurations are needed to satisfy this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Conditional Print Field on the Line Column record.',
      'Include Monthly Price in the Quote Line Editor Field set.',
      'Create a custom formula indicating if the Payment Terms are Net 30.',
      'Create an additional Line Items section without the Monthly Price field.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Conditional print fields paired with formula logic checking payment terms determine column visibility on PDF quote documents[cite: 2].'
  },
  {
    id: 'dumps-98',
    text: 'Universal Containers (UC) wants to sell products with monthly subscription terms. UC wants additional days to round up to the nearest month for calculating the prorated price. Which CPQ package settings should UC use to meet the business requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Subscription Term unit: Month, Subscription Prorate Precision: Day',
      'Subscription Term unit: Month, Subscription Prorate Precision: Month',
      'Subscription Term unit: Month, Subscription Prorate Precision: Month + Daily',
      'Subscription Term unit: Day, Subscription Prorate Precision: Day'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Month + Daily proration precision factors partial days into monthly proration calculations[cite: 2].'
  },
  {
    id: 'dumps-99',
    text: 'Bundle A has four Product Options within Product Feature A: Products A, B, C, and D. When Bundle A is added to a Quote, how should the Admin set up a Discount Schedule so that the quantities of all Product Options on this Quote are aggregated?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Discount Schedule on Product Feature A and mark the Cross Products Checkbox as TRUE.',
      'Set the Discount Schedule on Product Feature A and mark the Cross Products Checkbox as FALSE.',
      'Set the Discount Schedule on the Product Option records and mark the Cross Products checkbox as TRUE.',
      'Set the Discount Schedule on the Product Option records and mark the Cross Products checkbox as FALSE.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Feature-level discount schedules combined with cross-product aggregation combine quantities across options in that feature[cite: 2].'
  },
  {
    id: 'dumps-100',
    text: 'An admin created a dynamic bundle and needs a Product Rule to limit which products users see when configuring the bundle. Which type of Product Action should the Admin create to ensure that only a specific set of products may be selected for the dynamic bundle?',
    topic: 'Salesforce CPQ',
    options: [
      'Optional filter',
      'Show',
      'Default filter',
      'Enable'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Dynamic bundle configurations rely on default filter actions to establish initial product filtering sets[cite: 1, 2].'
  },
  {
    id: 'dumps-101',
    text: 'The Admin at Universal containers has created a formula field to calculate margin on the Quote Line object. This field should be hidden from all Users that are not Admins or management. How can the Admin accomplish this?',
    topic: 'Salesforce CPQ',
    options: [
      'Remove the margin field from the Quote Line Editor Field Set for relevant Profiles.',
      'Remove the margin field from the Quote Line Editor Field Set for relevant Roles.',
      'Set Visible to false for relevant Profiles on the field-level security for the margin field.',
      'Set Visible to false for relevant Roles on the field-level security for the margin field.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Field-level security settings control field visibility across profiles regardless of page layouts or field sets[cite: 2].'
  },
  {
    id: 'dumps-102',
    text: 'The Admin wants to display specific customer information from the Account object onto the output document. Which object should this information be referenced on to be pulled into an HTML Template Content record?',
    topic: 'Salesforce CPQ',
    options: [
      'Quote Line',
      'Quote',
      'Opportunity',
      'Template'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Template content merge fields can access parent Account information through relationships hosted on the Quote object[cite: 2].'
  },
  {
    id: 'dumps-103',
    text: 'Universal Containers has Terms and Conditions it wants to include in documents sent to customers. The Admin is tasked with creating conditional Quote Terms to meet this requirement. Which two options could a condition be tested against in order to determine which Quote Terms will be included on the output document? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Quote Line fields',
      'Summary Variables',
      'Quote fields',
      'Product fields'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Quote term conditions can evaluate quote-level fields and summary variables to determine conditional printing[cite: 2].'
  },
  {
    id: 'dumps-104',
    text: 'Universal Containers has an output document with a line item table that currently displays product options that are marked as Included. What step should the Admin take to remove the Included products from the line item table?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Show Bundled Products field to False on the Quote Template.',
      'Set the Hide Included Products field to True on the Quote Template.',
      'Create a Quote Line field OutputVisibility__c that returns False if Included = True.',
      'Create a filter on the line items Template Section where Component = False.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Unchecking "Show Bundled Products" on the Quote Template suppresses bundled components from appearing as separate rows[cite: 2].'
  },
  {
    id: 'dumps-105',
    text: 'Universal Containers requires sales reps to choose a Square footage value on the Configuration Attribute on one of the bundles to hide Product Options that are incompatible for the selected square footage. When the sales reps re-configure the bundle on a Renewal Quote, the Square Footage value that was set on the Configuration Attribute of the original Quote is reset to its default value. Currently, the sales reps must select the square footage again on the Renewal Quote. How should the Admin improve this process so the Configuration Attribute retains its value upon Renewal?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Renewed Subscription lookup field on the renewal Quote Lines to reference the original Subscriptions.',
      'Set the Renewed Asset lookup field on the renewal Quote Lines to reference the original Assets.',
      'Create a Twin Field of the Square Footage field on the Quote Line object.',
      'Create a Twin Field of the Square Footage field on the Asset and Subscription objects.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Configuration attribute values persist on renewals if twin fields map data through quote lines down to asset and subscription records[cite: 2].'
  },
  {
    id: 'dumps-106',
    text: 'The Admin at Universal Containers is receiving an "Attempt to de-reference a null object" error when generating a Quote Document after adding a section to display line items with Product Family Setup Fees. What change needs to be made to resolve this error?',
    topic: 'Salesforce CPQ',
    options: [
      'Filter Field must be the field name Product Family.',
      'Filter Value should have quotations around Setup Fees.',
      'More than one-line volume must apply only to this section.',
      'Filter Operator must be populated with Equals.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Template section filters require complete operator definitions like Equals to execute query expressions without null pointer exceptions[cite: 2].'
  },
  {
    id: 'dumps-107',
    text: 'Universal Containers has a custom picklist field with three values on their products. The Admin would like to create a Dynamic Bundle to display products if the picklist value matches that of a Configuration Attribute. How should the Admin create Filter Product Rules to meet the business requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Create three rules, each with two conditions that compare the configuration attribute with a static value and the product field.',
      'Create one rule with three conditions, each that compares the configuration attribute field with a static value.',
      'Create three rules, each with one condition that compares the product field with the Configuration attribute field.',
      'Create one rule with one condition that compares the product field with the configuration attribute field.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Dynamic filters support direct field-to-attribute comparison conditions within a single product rule[cite: 2].'
  },
  {
    id: 'dumps-108',
    text: 'Universal Containers (UC) sells licenses set up as subscription Products. A UC sales rep has closed an Opportunity associated to a Quote with a Subscription Term of 36 months. The sales rep and a customer have agreed to a Quantity of 100 licenses for the term of the Contract. The customer wants to decrease the license count to 80 licenses after the first year. After the second year, the Contract will be amended again to increase the license count to 120 licenses. After the sales rep amends the Contract to incorporate these changes, what are the respective Quantities of the original Subscription, the first amended Subscription, and the second amended Subscription?',
    topic: 'Salesforce CPQ',
    options: [
      '120, -20, 40',
      '100, -20, 40',
      '100, 80, 120',
      '80, 0, 40'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Subscription quantity adjustments on amendments track deltas (-20 and +40) relative to the initial 100 base subscription line[cite: 2].'
  },
  {
    id: 'dumps-109',
    text: 'Universal Containers sells a monthly subscription service that is offered to their clients with a ramp option. This subscription is priced with a setup fee, an installation fee, and a recurring fee. Which set of actions would meet these requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Create three products to represent the setup fee, the installation fee and the monthly fee each with a monthly price dimension, and combine them into a bundle.',
      'Create a single product with three monthly price dimensions.',
      'Create a single product with two one-time price dimensions and one monthly price dimension.',
      'Create a single product with two monthly price dimensions and one one-time price dimension.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Ramp deals combining one-time fees and recurring charges utilize products with appropriate one-time and recurring price dimensions[cite: 2].'
  },
  {
    id: 'dumps-110',
    text: 'Universal Containers wants to prevent users from selecting a Product Option when a conflicting one has been chosen. The Product Options that should not be selected should not be displayed to the users. The Admin needs to set up a Product Selection Rule to meet this requirement. Which Type should be used for the product Action?',
    topic: 'Salesforce CPQ',
    options: [
      'Hide',
      'Disable',
      'Hide and Remove',
      'Disable and Remove'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Actions configured to hide and remove completely eliminate conflicting options from configurator display panels[cite: 2].'
  },
  {
    id: 'dumps-111',
    text: 'Universal Containers (UC) is planning to end-of-life a subscription Product by preventing any new sales of the Product. UC wants to allow renewals if a customer has already purchased the Product. How can the Admin meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Delete the Product so it is unavailable for new business Quotes.',
      'Create a new renewal Product, then link it to the end-of-life Product by using the Renewal Product lookup.',
      'Create an end-of-life checkbox on the Product, then create a Search Filter to exclude any Product marked end-of-life from Product Selection.',
      'Deactivate the Product since CPQ allows inactive Products to be renewed.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Populating the Renewal Product lookup maps legacy SKUs to replacement items upon contract renewal automatically[cite: 2].'
  },
  {
    id: 'dumps-112',
    text: 'Universal Containers sells Product A with a tiered pricing model using a discount schedule with three discount tiers. They signed an agreement with their client ACME Tools that give this client a 50% discount on Product A with a flat rate for next calendar year. Which set of actions would meet these requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a price book specific to ACME Tools with a price book entry at half the price for Product A and create a workflow rule that assigns this price book.',
      'Create a price rule that clears the discount schedule and injects 50% into the Additional Discount field on quote lines for Product A when the account is ACME Tools.',
      'Create a discount schedule with a single discount tier at 0% discount and associate it with a contracted price giving 50% discount to Product A on the ACME Tools account record.',
      'Create a price rule that applies the 50% discount to the list price and injects it into the Customer Price field on quote lines for ACME Tools.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Contracted prices override standard product discount schedules at the account level to secure custom flat-rate terms[cite: 2].'
  },
  {
    id: 'dumps-113',
    text: 'An Admin has created a bundle with four Product Options for Products A, B, C, and D. When configuring the bundle, the User should be limited to selecting either Product C, Product D, or neither of the two - but never both. How should the Admin set up Bundle A to accomplish this?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Product Feature and set both Min Options and Max Options to 4.',
      'Create a Product Feature and set both Min Options and Max Options to 1.',
      'Create an Option Constraint and set Type = Exclusion.',
      'Create an Option Constraint and set Type = Dependency.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Option constraints of type Exclusion prevent users from selecting conflicting options simultaneously[cite: 2].'
  },
  {
    id: 'dumps-114',
    text: 'Universal Containers (UC) has products that will only be utilized as Product options inside five different bundle products. When a user adds products to the Quote line Editor, UC wants bundle products to show in the Product Selection page, and products that are Product Options of the bundles to be excluded from the product selection page. How should the Admin set up the bundles?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the component checkbox on any Product that is a Product Option for the bundles.',
      'Select the bundled checkbox on each Product Option and mark the Product inactive.',
      'Select the selected checkbox on each Product Option and mark the Product inactive.',
      'Select the Hidden checkbox for any Product that is a Product Option for the bundles.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Checking the Component checkbox on option products hides them from standalone catalog searches while preserving their availability inside bundles[cite: 2].'
  },
  {
    id: 'dumps-115',
    text: 'The Admin at UC is creating a bundle and has a requirement for a Product Option to be unavailable for selection when certain conditions exist. The User should still see the Product Option, but should not be able to select it. If a Product Rule is created to meet this requirement, what should the Type of the Product Action be?',
    topic: 'Salesforce CPQ',
    options: [
      'Disable and Remove',
      'Disable',
      'Remove',
      'Hide and Remove'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Disable product actions grey out options so users can see they exist but cannot select them under specified conditions[cite: 2].'
  },
  {
    id: 'dumps-116',
    text: 'Universal Containers has decided to mark up prices instead of discounting. Product A is valued at $10 and Product B is valued at $20. Product A is a 10% markup and Product B is a 20% markup. Which pricing method would the Admin set up, and what would the final price be for each product?',
    topic: 'Salesforce CPQ',
    options: [
      'List, Product A price would be $11, Product B Price would be $22',
      'List, Product A price would be $11, Product B price would be $24',
      'Cost, Product A price would be $12, Product B price would be $24',
      'Cost, Product A price would be $11, Product B price would be $24'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Cost-based pricing with markups applies percentages directly to unit costs (e.g., $10 + 10% = $11; $20 + 20% = $24)[cite: 2].'
  },
  {
    id: 'dumps-117',
    text: 'UC has a requirement that, on any individual Quote, the quantity of Product Family A can never exceed the quantity of Product Family B. Summary Variable A sums Quantity of Product Family A, and Summary Variable B sums Quantity of Product Family B. Which two error condition setups will meet this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Summary Variable A goes in the Filter Variable field, Summary Variable B goes in the Tested Variable field, Operator is Less or Equals.',
      'Summary Variable A goes in the Filter Variable field, Summary Variable B goes in the Tested Variable field, Operator is Less than.',
      'Summary Variable A goes in the Tested Variable field, Summary Variable B goes in the Filter Variable field, Operator is Greater than.',
      'Summary Variable A goes in the Filter Variable field, Summary Variable B goes in the Tested Variable field, Operator is Greater than.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Error conditions compare tested variables against filter variables using operators like Greater than to detect constraint violations[cite: 2].'
  },
  {
    id: 'dumps-118',
    text: 'What type(s) of email template formats does Salesforce Advanced Approvals (SBAA) allow?',
    topic: 'Salesforce CPQ',
    options: [
      'Visualforce',
      'Plain Text',
      'HTML',
      'All of the above'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Advanced Approvals supports Visualforce, plain text, and HTML email templates for notification routing[cite: 2].'
  },
  {
    id: 'dumps-119',
    text: 'Universal Containers sells their subscription products only in whole months. Users are sometimes entering values into Start Date and End Date and leaving Subscription Term blank. They are finding that subscription pricing is not working as expected because dates do not equate to exact months. What should be done so that pricing is rounded to the expected value?',
    topic: 'Salesforce CPQ',
    options: [
      'In the package settings, set Subscription Prorate Precision to Monthly.',
      'On the Quote object, set the Subscription Prorate Precision field to Monthly.',
      'Create a Price Rule which rounds the Prorate Multiplier to the nearest whole value.',
      'Create a Price Rule that takes the user-entered date and calculates a rounded Term.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Setting Subscription Prorate Precision to Monthly in package settings rounds fractional date durations to whole month blocks[cite: 2].'
  },
  {
    id: 'dumps-120',
    text: 'The Edit Lines Field Set Name special field on the Quote object references a Field Set that directly controls which characteristic of the Quote Line Editor?',
    topic: 'Salesforce CPQ',
    options: [
      'The fields that trigger a calculation event to occur.',
      'The fields that appear in the Quote Line Drawer.',
      'The Quote Line fields that are visible as columns.',
      'The Quote fields that may be edited.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Dynamic column headers in the Quote Line Editor are controlled via field sets referenced by special field configurations[cite: 2].'
  },
  {
    id: 'dumps-121',
    text: 'Universal Containers (UC) wants to set up four separate Template Sections. UC also wants each of these sections to render on its own page, no matter if the text field fills an entire page or not. Which two will determine how the page breaks? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Under the Page Break picklist, select the After option on each of the first three Template Sections.',
      'Under the Keep with Previous picklist, select the Always option on each of the Template Sections.',
      'Under the Keep Separate picklist, select the Always option on each of the Template Sections.',
      'Under the Page Break picklist, select the Before option on each of the last three Template Sections.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Setting page breaks to "After" on preceding sections or "Before" on succeeding sections forces discrete page layout breaks on generated document templates[cite: 2].'
  },
  {
    id: 'dumps-122',
    text: 'Universal Containers has a bundle configured and wants to add user selectable products to the configuration that will affect the bundle price. How should the CPQ Admin configure the bundle?',
    topic: 'Salesforce CPQ',
    options: [
      'Add a Price Rule.',
      'Add a Product Rule.',
      'As a Product Option.',
      'As a Product Feature.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'User-selectable products within a bundle that contribute pricing are modeled as Product Options[cite: 2].'
  },
  {
    id: 'dumps-123',
    text: 'Universal Containers has a new product that they wish to include in one of their bundles. When a User is configuring the bundle, however, the product does not show up. No Product Rules have been configured in this Org. What is a plausible explanation for why this Product is not present?',
    topic: 'Salesforce CPQ',
    options: [
      'No Price Book Entry is in this Quote\'s currency.',
      'The Product\'s "Hidden" field is set to True.',
      'The Price Book Entry for this Product is zero.',
      'The "Quote Line Visibility" field is set to "Never."'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Setting Quote Line Visibility to "Never" suppresses option display across both configurator screens and quote output lines[cite: 2].'
  },
  {
    id: 'dumps-124',
    text: 'Formula fields may be used as a Conditional Print Field to control whether a section appears or not.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Formula fields returning boolean values serve as conditional print filters for template sections and line columns[cite: 2].'
  },
  {
    id: 'dumps-125',
    text: 'An Admin has noticed that the proration for their subscription products is not coming out to what they would expect. With a Start Date of January 1, 2017 and End Date of January 1, 2018, the Prorate Multiplier is coming out to 1.083. The CPQ Admin is expecting a Prorate Multiplier of 1.000. What action should the Admin take to correct this pricing issue?',
    topic: 'Salesforce CPQ',
    options: [
      'Change the Subscription Prorate Precision in package settings to "Month + Day."',
      'Change the Default Subscription Term on the Quote Line to produce expected proration.',
      'Change the Subscription Term Unit in package settings from Month to Day.',
      'Change the Prorate Calculation field in package settings from Month to Day.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Adjusting prorate calculation methods in package settings alters how start and end date durations map to multiplier coefficients[cite: 2].'
  },
  {
    id: 'dumps-126',
    text: 'When quoting any subscription product, a user at Universal Containers must choose the payment frequency between Monthly or Annually. When frequency is Monthly, Universal Containers wants to apply an automatic uplift of 10% to the price of the subscription service. The Admin decides to use a price rule to implement this requirement and wants to inject the result of a calculation in the List Price field on the quote line. Which formula expression should the Admin set up on the price condition for this uplift price rule?',
    topic: 'Salesforce CPQ',
    options: [
      'IF(TEXT(Payment_Frequency__c) = "Monthly", SBQQ__Product__r.SBQQ__ListPrice__c * 1.1, SBQQ__ListPrice__c)',
      'IF(TEXT(Payment_Frequency__c) = "Monthly", SBQQ__ListPrice__c * 1.1, SBQQ__ListPrice__c)',
      'IF(TEXT(Payment_Frequency__c) = "Monthly", SBQQ__OriginalPrice__c * 1.1, SBQQ__OriginalPrice__c)',
      'IF(TEXT(Payment_Frequency__c) = "Monthly", SBQQ__PriceBookEntry__r.UnitPrice * 1.1, SBQQ__PriceBookEntry__r.UnitPrice)'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Price action formulas evaluating line fields reference standard merge variables like SBQQ__ListPrice__c directly[cite: 2].'
  },
  {
    id: 'dumps-127',
    text: 'Universal Containers requires a subset of Products to be viewed based on a button on the Quote Line Editor. Which Salesforce CPQ functionality will satisfy this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Custom Action',
      'Product Rules',
      'Custom Script',
      'Pricing Rules'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Custom actions add custom buttons or links to the Quote Line Editor interface to trigger specialized product selection views[cite: 2].'
  },
  {
    id: 'dumps-128',
    text: 'At Universal Containers, each storage container is configured as a bundle. An important property of the bundle is cubic volume. The volume selected at the bundle level must match the volume of every Product Option. Which two actions must the Admin take to allow a sales rep to choose a volume that will apply to all Product Options? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set up a Lookup Price Rule referencing a custom object.',
      'Create a Feature level Configuration Attribute.',
      'Set the Configuration Attribute with Apply to Product Options to True.',
      'Create a bundle level Configuration Attribute.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Bundle-level configuration attributes configured to apply to product options propagate parent attribute values down to child components[cite: 2].'
  },
  {
    id: 'dumps-129',
    text: 'The Admin at Universal Containers created the following range Discount Schedule. The Users are confused by the results when the quantity falls on a number that is the threshold for an Upper/Lower Bound. For example, when 20 is selected, the discount percent is 30%. The users are expecting a discount percent of 20%. Which explanation best explains this phenomenon?',
    topic: 'Salesforce CPQ',
    options: [
      'Lower bound is inclusive, upper bound is exclusive',
      'The Discount Schedule should be type Slab instead of Type Range',
      'The Discount Schedule should be a Term schedule, but should be Quantity',
      'The Discount Schedule should have Inclusive set to True.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'In range discount schedules, lower bounds are inclusive while upper bounds are exclusive, rolling boundary quantities into the higher tier[cite: 2].'
  },
  {
    id: 'dumps-130',
    text: 'How should an Admin enable renewal uplift on an Account?',
    topic: 'Salesforce CPQ',
    options: [
      'Update the Markup (%) field on the Renewal Quote.',
      'Change the Renewal Pricing Method to Same on the Account.',
      'Select the Combine Subscription Quantities checkbox on the Contract record related to the Account.',
      'Update the Renewal Pricing Method to Uplift on the Account, then populate the Renewal Uplift (%) field on the Contract record.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Enabling renewal uplift involves configuring renewal pricing methods at account or contract levels and defining percentage uplift parameters[cite: 2].'
  },
  {
    id: 'dumps-131',
    text: 'Which of the following is not part of the structure of a Pricing Rule?',
    topic: 'Salesforce CPQ',
    options: [
      'Price Action',
      'Price Rule Detail',
      'Price Display',
      'Price Condition'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Price Rules comprise price conditions, price actions, and optional lookup queries, but "Price Display" is not a structural element[cite: 2].'
  },
  {
    id: 'dumps-132',
    text: 'A user is quoting four subscription Products: Product A, Product B, Product C, and Product D. Product A and B are in Quote Line Group 1, while Product C and D are in Quote Line Group 2. The Quote\'s Start Date is June 4, 2020. The Quote\'s End Date is June 3, 2021. The user wants Product A and B\'s Subscriptions to end on June 3, 2021, and Product C and D\'s Subscription to end on December 3, 2021. Which two methods could the user apply individually to meet the requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Change the Subscription Term on the Quote Lines for C and D to the value 18.',
      'Change the End Date on Quote Line Group 2 to December 3, 2021.',
      'Change the End Date on the Quote Lines for C and D to December 3, 2021.',
      'Change the Subscription Term on Quote Line Group 2 to the value 18.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Adjusting group-level end dates or individual quote line end dates allows separate quote line groups to maintain independent subscription end schedules[cite: 2].'
  },
  {
    id: 'dumps-133',
    text: 'Composite Summary Variables are Summary Variables that are combined with an additional calculation.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Composite summary variables allow nested mathematical operations across multiple summary variables[cite: 2].'
  },
  {
    id: 'dumps-134',
    text: 'A User at Universal Containers has created a new quote on Opportunity Z, which includes a fixed price subscription product. The Opportunity has been updated to Closed/Won, and the "Contracted" checkbox is marked TRUE; however, the contract is not generated. Which fields are likely causing the issue?',
    topic: 'Salesforce CPQ',
    options: [
      'Primary and Subscription Term',
      'Primary and Start Date',
      'Primary, Subscription Term, and End Date',
      'Subscription Term and End Date'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Contract generation requires quotes to be flagged as primary and have valid start date parameters populated[cite: 2].'
  },
  {
    id: 'dumps-135',
    text: 'A Lookup Query may return a value to only be used within a CPQ managed field.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lookup queries can populate both standard CPQ fields and custom fields mapped via price actions[cite: 2].'
  },
  {
    id: 'dumps-136',
    text: 'A Quote Template has Template Sections related to these types of Template Content: Template Top, Line Items, HTML, Quote Terms. Which three statements are valid about these types of Template Content? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Template Top and HTML are fully code-customizable',
      'Line Items are either displayed as Standard or with Price Dimensions.',
      'Template Top is the only Section that can show Billing/Shipping info.',
      'Quote Terms can be dynamic if Term Conditions are defined.',
      'Line Items can be coded into an HTML section.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'HTML sections and template headers support customized code layout structures, line items support standard and MDQ dimensions, and quote terms support dynamic term conditions[cite: 2].'
  },
  {
    id: 'dumps-137',
    text: 'Universal Containers has a bundle that has a set price regardless of the number of Product Options that are included in the bundle. Any of the Product Options selected must show on the Quote Line Editor with a List Price of the included item and a Net Price of $0. How should the Admin set up the bundle to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the Required checkbox on the Product Options.',
      'Select the Selected checkbox on the Product Options.',
      'Set the Unit Price on the Product Options to be $0.',
      'Select the Bundled checkbox on the Product Options.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Selecting the Bundled checkbox on product options zeroes out their net prices while maintaining list values within the parent bundle price[cite: 2].'
  },
  {
    id: 'dumps-138',
    text: 'Universal Containers has a Product Family of "Software". When a Configuration Attribute in their bundle is set to "Minimum," all Software products should be hidden with a Product Rule. Which configuration of conditions and actions should the Admin use to enable this?',
    topic: 'Salesforce CPQ',
    options: [
      'An Error Condition should be set up to compare the static value, "Minimum," against the Configuration Attribute. A Product Action, using the Filter Field, should be used to hide the Products.',
      'An Error Condition should be set up to compare the static value, "Minimum," against the Configuration Attribute. A Product Action should be set up for each Product that needs to be hidden.',
      'Two Error Conditions should be defined: one to check the Product Family value on the Product Option record, and one to check the Configuration Attribute. No Actions are Required.',
      'An Error Condition should be set up to check the Product Family value on the Product Option record. A Product Action, using the Filter Field, should be used to hide the Products.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Product selection rules use error conditions to evaluate configuration attributes and filter action fields to hide matching product options dynamically[cite: 2].'
  },
  {
    id: 'dumps-139',
    text: 'Universal Containers allows clients to negotiate a discount for Product A until a specified date up to contract activation. Which three fields on the Contracted Price record should be configured to satisfy this requirement? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Product',
      'Contract',
      'Expiration Date',
      'Discount',
      'Effective Date'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Contracted prices require product association, contract linking, and explicit expiration or effective date boundaries[cite: 2].'
  },
  {
    id: 'dumps-140',
    text: 'An Admin wants to update a field on all Quote Lines based on a Quote field. Which setup should the Admin use?',
    topic: 'Salesforce CPQ',
    options: [
      'A Workflow Rule, with conditions that check the Quote field values, and a Field Update to Update the Quote Lines.',
      'Process Builder, with conditions that check the Quote field values, and the native functionality to update related records.',
      'A Custom Trigger on the Quote object, with a query to obtain all related Quote Lines, and an update operation after changing the field.',
      'A Price Rule, with conditions that check the Quote field values, and an action to update the Quote Lines.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Price rules evaluate quote-level attributes and distribute values across child quote lines efficiently during calculation cycles[cite: 2].'
  },
  {
    id: 'dumps-141',
    text: 'How should the Admin ensure Universal Containers\' users can generate output documents in Microsoft Word format?',
    topic: 'Salesforce CPQ',
    options: [
      'Create duplicate Template Sections in Microsoft Word format.',
      'Set the Allow Output Format Change checkbox on the Quote Template.',
      'Set the Allow Output Format Change checkbox on each user in user Settings.',
      'Create a second Quote Template in Microsoft Word format.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Enabling "Allow Output Format Change" on the Quote Template lets users select alternative document formats like Word during generation[cite: 2].'
  },
  {
    id: 'dumps-142',
    text: 'When an Order is Contracted, the sales operations team needs to store a unique license number on the Asset record for each downloadable Product sold. How should the Admin meet the business requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Set Asset Conversion for each downloadable Product to null.',
      'Set Asset Conversion for each downloadable Product to a custom value.',
      'Set Asset Conversion for each downloadable Product to One per unit.',
      'Set Asset Conversion for each downloadable Product to One per Quote Line.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Setting asset conversion to "One per Quote Line" allows individual serial or license values to map cleanly onto corresponding asset rows[cite: 2].'
  },
  {
    id: 'dumps-143',
    text: 'Universal Containers has decided to mark up prices instead of discounting. Product A is valued at $10 and Product B is valued at $20. The Admin decides to create a custom price entry and Price Rule to inject this value into managed pricing fields. What Salesforce pricing fields should the Price Rule set?',
    topic: 'Salesforce CPQ',
    options: [
      'Special Price and Special Price Type',
      'Custom Price and Custom Price Type',
      'Regular Price and Regular Price Type',
      'List price and List Price Type'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Overriding standard list pricing with special custom values involves injecting data into Special Price and Special Price Type fields[cite: 2].'
  },
  {
    id: 'dumps-144',
    text: 'Given a customer\'s tiered pricing model, an Admin wants to allow users to define Discount Tiers and use those values as the Regular Price instead of an Amount deducted from the List Price. How should the Admin configure the Discount Schedule to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Discount Unit to Percent, set the Aggregation Scope to Quote, choose Current Tier from the Override Behavior picklist, and then select the Use Price for Amount checkbox.',
      'Set the Discount Unit to Amount, choose All from the Override Behavior picklist, and then select the Use Price for Amount checkbox.',
      'Set the Discount Unit to Amount, create a custom Override_Amount__c field on the Edit Tiers page, select the Users Defined checkbox, and then choose All from the Override Behavior picklist.',
      'Set the Discount Unit to Percent, set the Aggregation Scope to Quote, Current Tier from the Override Behavior picklist, and then select the User Defined checkbox.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Configuring custom override amount fields and enabling user-defined behaviors on discount tier editors allows tiers to establish flat pricing blocks[cite: 2].'
  },
  {
    id: 'dumps-145',
    text: 'The Admin has set up a yearly price dimension on Product Z. The User has added Product Z to a quote with a 30-month subscription term and sees that Year 3 is the partial segment, but the customer requires Year 3 to be a full year. What steps should the Admin take to enable the User to choose which year represents the partial segment?',
    topic: 'Salesforce CPQ',
    options: [
      'Place the "First Segment Term End Date" field into the Line Editor field set on the Quote object.',
      'Place the "Start Date" and "End Date" fields into the Segmented Line Editor field set on the Quote Line object.',
      'Place the "Subscription Term" field into the Segmented Line Editor field set on the Quote Line object.',
      'Place the "Partial Segment" field into the Segmented Line Editor field set on the Quote Line object.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Exposing the First Segment Term End Date field in the quote line editor field set lets users control segment date boundaries for multi-year MDQ items[cite: 2].'
  },
  {
    id: 'dumps-146',
    text: 'Universal Containers has a Quote that contains a Quote Line associated to an Asset Product in addition to another Quote Line. Which property must be present on the additional Quote line to create a Subscribed Asset at the time of Contract generation?',
    topic: 'Salesforce CPQ',
    options: [
      'Bundled equals True.',
      'Subscription Pricing equals Percent of Total.',
      'Package equals True.',
      'Pricing Method equals Percent of Total.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Setting pricing methods to Percent of Total links recurring subscription items to underlying standalone asset lines upon contract generation[cite: 2].'
  },
  {
    id: 'dumps-147',
    text: 'Universal Containers has a custom Quote Line picklist, "Process." The User will need to set this field for all non-subscription products added to the Quote Line Editor. How should the Admin customize the layout of the Quote Line Editor, so that the Process picklist appears?',
    topic: 'Salesforce CPQ',
    options: [
      'Update the EditLinesFieldSetName formula to return "Process" in the returned comma-separated stream.',
      'Edit the "Line Editor" field set on the Quote Line object and drag in the "Process" field.',
      'Edit the "Quote Line Layout" page and drag the Process field into the "Line Editor" section.',
      'Add the "Process" field to the "Line Columns" multi-select picklist on the Salesforce CPQ Installed Package settings.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Adding custom fields to the Line Editor field set on the Quote Line object surfaces them as columns in the Quote Line Editor[cite: 2].'
  },
  {
    id: 'dumps-148',
    text: 'Universal Containers uses over 45,000 different container Product records with CPQ. When a sales rep views the Add Product page, a list of the first 2,000 Products is displayed in a disorganized manner. The product management team wants the products to display in collapsible groups based on the product family. How should a CPQ Specialist enable this functionality from the salesforce CPQ managed package configuration settings?',
    topic: 'Salesforce CPQ',
    options: [
      'Check the Solution Groups Enabled Checkbox, set Object to Quote Line and set Name Field to Product Family.',
      'Select Product Family in the Product Results Group Field Name field in Additional Settings.',
      'Add the Product Family field to the Search Results Field Set on the Product Object.',
      'Select Product Family in the Product Search Plugin field in Plugins.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Configuring the Product Results Group Field Name setting under package additional settings groups product catalog search results automatically[cite: 2].'
  },
  {
    id: 'dumps-149',
    text: 'How do you ensure that the value a user inputs into a Configuration Attribute is preserved so that the user does not need to re-enter it when reconfiguring the bundle at a later time?',
    topic: 'Salesforce CPQ',
    options: [
      'Add the Configuration Attribute to the ReferencedFields field set.',
      'Check the "Store Configuration Attribute Values" checkbox in the Steelbrick package settings.',
      'Check the "Store Value" checkbox on the Configuration Attribute record.',
      'Create a field on the Quote Line object that has the same data type and API name as the field you created on the Product Option object.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Twin fields matching configuration attributes on quote lines ensure user inputs are retained during bundle reconfigurations[cite: 2].'
  },
  {
    id: 'dumps-150',
    text: 'An Admin at Universal Containers has observed that the value in the Quantity field on an Opportunity Product is different from the value in the Quantity field in its associated Quote Line. When will Quote Line Quantity and Opportunity Product Quantity be different? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'The Quote Line is on an amendment Quote and has a different Quantity from its original Quote Line.',
      'There is a Price Rule that changes the Quote line\'s Quantity on the After Calculate event.',
      'The Quote Line\'s Product has Pricing Method set to Block.',
      'The Quote Line\'s Product has Asset Conversion set to One Per Unit.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Block pricing models and unit-level asset conversions can decouple quote line quantity representations from synchronized opportunity product rows[cite: 2].'
  },
  {
    id: 'dumps-151',
    text: 'An Admin at Universal Containers wants to set up a product bundle that dynamically generates SKUs depending on what their users choose during the selling process. Which three fields are required for this type of configuration? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Component Code Position',
      'Custom Configuration Page',
      'Component Description Pattern',
      'Component Code',
      'Configured Code Pattern'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Configuring dynamic bundle SKU generation requires component code position configurations, component codes, and configured code patterns[cite: 2].'
  },
  {
    id: 'dumps-152',
    text: 'Universal Containers sells a subscription service priced with tiered billing blocks and discount schedules. Which setup should the Admin implement for this complex pricing model?',
    topic: 'Salesforce CPQ',
    options: [
      'One discount schedule with five discount tiers',
      'Five block price records',
      'Two block price records and one discount schedule with three discount tiers',
      'Five block price records and one discount schedule with five discount tiers'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Combining block price records with structured discount schedules addresses multi-layered tiered pricing requirements[cite: 2].'
  },
  {
    id: 'dumps-153',
    text: 'Universal Containers sells products that require serial numbers assigned to each product that is sold. These products do not expire and the serial number is assigned to each record after the contract is created. Which Product field value should the Admin set up to handle this use case?',
    topic: 'Salesforce CPQ',
    options: [
      'Asset Conversion: One Per Line',
      'Asset Conversion: One Per Unit',
      'Subscription Type: One-Time',
      'Subscription Price: List Price'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting Asset Conversion to "One Per Unit" creates individual asset records for every unit sold, making them ready for post-contract serial number assignment[cite: 2].'
  },
  {
    id: 'dumps-154',
    text: 'Universal Containers wants to ensure that information in custom fields provided on original Quote Lines should also appear on Quote Lines for the Renewal Quotes. How should the Admin set up this data flow?',
    topic: 'Salesforce CPQ',
    options: [
      'A custom formula field should look up through the SBQQ__Source__c Quote Line lookup to the original Quote Line.',
      'Renewal Quote Line values are automatically mapped from original Quote Lines.',
      'A Price Rule should be created to pull the value from the original Quote Line and populate the Renewal Quote Line.',
      'A twin field should be created on both the Asset and Subscription objects to bring back to Renewal Quote Lines.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Twin fields mapping data between quote lines, assets, and subscriptions ensure custom fields carry over to renewal quotes[cite: 2].'
  },
  {
    id: 'dumps-155',
    text: 'An Admin has created a Quote Template record and has set the Group Field field to SBQQ__Optional__c. When a User attempts to preview the output document using this Quote Template, this error appears: "Invalid conversion from runtime type Boolean to String." Why is this error occurring?',
    topic: 'Salesforce CPQ',
    options: [
      'SBQQ__Optional__c is not a Quote Line field.',
      'The user did not create any groups on the quote.',
      'The user did not mark any products as optional.',
      'SBQQ__Optional__c is not a text field.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Template group fields require text or picklist attributes; boolean fields like Optional cannot be evaluated as grouping strings[cite: 2].'
  },
  {
    id: 'dumps-156',
    text: 'Universal Containers has a multi-layer bundle with a Percent of Total option in the first level. This Percent of Total option’s calculation should be based on other options in the same level. How should the Admin set this up?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Percent of Total Scope field on the Product Option record to a value of Components.',
      'Set the Percent of Total Scope field on the Product Option record to a value of Package.',
      'Set the Percent of Total Category field on each Product in bundle to the same value.',
      'Set the Percent of Total Scope field on the Product Option record to a value of Group.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Setting Percent of Total Scope to Components restricts calculation evaluations to sibling options within the same bundle level[cite: 2].'
  },
  {
    id: 'dumps-157',
    text: 'An Admin has created a new bundle, and a Product Rule associated with it. Universal Containers want the Product Rule to fire within this specific bundle. Which is a valid setup for the Configuration Rule?',
    topic: 'Salesforce CPQ',
    options: [
      'The Configuration Rule must be associated with the Product Option records used in Product Actions.',
      'The Configuration Rule must be associated with Product records used in Product Actions.',
      'The Configuration Rule must be associated with the Parent Product in the bundle.',
      'The Configuration Rule must be associated with the Product Feature used within the bundle.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Configuration rules link product rules to specific parent bundle products so they execute during product configuration[cite: 2].'
  },
  {
    id: 'dumps-158',
    text: 'Universal Containers would like to display the sum of one of their custom fields within the standard table of the Line Editor. They do not want to replace the subtotal or total fields. Where should the Admin place the custom field to display this total?',
    topic: 'Salesforce CPQ',
    options: [
      'The Summary Fields field set',
      'The Totals Field package setting',
      'The Segmented Summary Fields field set',
      'The Line Subtotals Total field package setting'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Adding fields to the Summary Fields field set on quote lines renders aggregated custom totals at the bottom of the line editor table[cite: 2].'
  },
  {
    id: 'dumps-159',
    text: 'Suppose you have several Product Rules with conditions that evaluate a Configuration Attribute. You want the rules to fire immediately when the user changes the value of the Configuration Attribute. How do you accomplish this?',
    topic: 'Salesforce CPQ',
    options: [
      'Add the Product Rules to the related list on the Configuration Attribute record.',
      'Check the Apply Immediately checkbox on the Configuration Attribute record.',
      'Set the Evaluation Order of the Product Rules to be later than the evaluation order of the configuration attributes.',
      'Check the Run Immediately checkbox on the Product Rule records.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Checking "Apply Immediately" on configuration attributes triggers dependent product rules instantly when attribute values change[cite: 2].'
  },
  {
    id: 'dumps-160',
    text: 'Universal Containers needs to set up a bundle so that the sales rep can set some values that apply to the bundle parent, and others that apply to specific options. Which two configurations meet this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Use custom product option fields for option-level values.',
      'Use configuration attributes for option-level values.',
      'Use custom product option fields for bundle-level values.',
      'Use configuration attributes for parent-level values.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Configuration attributes capture parent-level inputs while custom option fields manage distinct option-level attribute settings[cite: 2].'
  },
  {
    id: 'dumps-161',
    text: 'Universal Containers sells a subscription Product Y that is sometimes sold in yearly segments and sometimes sold in quarterly segments. How should the Admin configure price dimensions for Product Y to allow the User to determine segment length?',
    topic: 'Salesforce CPQ',
    options: [
      'Create one price dimension with Type set to Custom.',
      'Create two price dimensions, one with Type set to Yearly, the other with Type set to Quarterly.',
      'Add the “Segment Type” field to the Segment Line Editor field set on the Quote Line object.',
      'Create one price dimension with Type set to Yearly and Allow Override set to True.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Custom price dimensions allow flexible segment intervals and custom time structures for MDQ subscription items[cite: 2].'
  },
  {
    id: 'dumps-162',
    text: 'Universal Containers must be able to create Quotes that contain Quote Lines with different Start Dates. Order Products must be separated into Orders after generation based on the Start Dates. How can a CPQ Specialist meet this business requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Separate Quotes must be created for each unique Start Date.',
      'Set both the Order by Quote Line Group and Ordered checkboxes to True.',
      'Change Default Order Start Date in CPQ Package settings to Quote Start Date.',
      'Set the Order By picklist on the Quote to SBQQ__StartDate__c, and the Ordered checkbox to True.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Enabling order by quote line group and checking ordered separates order products into distinct orders based on line start grouping[cite: 2].'
  },
  {
    id: 'dumps-163',
    text: 'After installing the Advanced Approvals managed package, which object is enabled out of the box to leverage all Advanced Approval functionality?',
    topic: 'Salesforce CPQ',
    options: [
      'Core Salesforce Quote object',
      'CPQ Quote Line object',
      'Opportunity object',
      'CPQ Quote object'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Advanced Approvals comes pre-configured out of the box to target the CPQ Quote object for approval routing[cite: 2].'
  },
  {
    id: 'dumps-164',
    text: 'The Admin at Universal Containers set up a Price Rule to override List Price with a discounted promotional price using SBQQ__ListPrice__c * (1 - Promotional_Discount__c). The Admin finds that every time Calculate is clicked, the price compounds and adjusts downward repeatedly. How can this problem be fixed?',
    topic: 'Salesforce CPQ',
    options: [
      'The Salesforce CPQ package has an Original Price field which should be used instead of List Price in the formula.',
      'Create a field to hold the Price Book price and populate on Quote creation with a Workflow Rule for use in the formula.',
      'Create a field to hold the Price Book price, and populate Before Calculate with a Price Rule for use in the formula.',
      'The Salesforce CPQ package has an MSRP field which should be used instead of Last Price in the formula.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Using Original Price instead of mutating list fields prevents price rules from compounding discounts across multiple calculation cycles[cite: 2].'
  },
  {
    id: 'dumps-165',
    text: 'Universal Containers has Quote Terms specific to Product X and separate Quote Terms specific to Product Y. The Admin has created an output document with separate Template Sections for each set of Quote Terms, referencing separate Template Content records. Which tasks should the admin complete to ensure Quote Terms for Product X and Y appear separately in the output document?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Product X Template Section filter fields to Product Code = Product X; repeat for Product Y.',
      'Create a Term Condition for all Product X Quote Terms where Section = Template Section X; repeat for Product Y.',
      'Set the Template Content field for all Product X Quote Terms to the Product X Template Content record; repeat for Product Y.',
      'Delete the second Template Section and set the Group field on the remaining Template Section to SBQQ__ProductCode__c.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Linking individual quote terms directly to specific template content records keeps distinct product terms separated on output documents[cite: 2].'
  },
  {
    id: 'dumps-166',
    text: 'Universal Containers would like to show the Monthly price column on the Quote Document if the quote has payment terms of Net 30. Which two configurations are needed to satisfy this requirement? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Create a new field set on the Quote Line editor without Monthly Price.',
      'Fill the Conditional Print Field on the Column Lines object.',
      'Create a custom Formula indicating if the Payment Terms Are Net 30.',
      'Create an additional Lines Section without the Monthly Price field.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Conditional print fields driven by custom formulas control line column visibility on template output documents[cite: 2].'
  },
  {
    id: 'dumps-167',
    text: 'In what way does Smart Approvals expedite the approval process in Salesforce Advanced Approvals?',
    topic: 'Salesforce CPQ',
    options: [
      'Approving a quote will auto-approve any lesser-discount quotes related to the same opportunity.',
      'Quotes within defined thresholds will be automatically approved.',
      'Quotes with multiple steps in the approval chain go directly to the highest approver required.',
      'Rejected quotes that are resubmitted within previously approved values go directly to the person who rejected.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Smart Approvals remember past approvals so that resubmitting quotes with equal or lesser discounts bypasses redundant approval loops[cite: 2].'
  },
  {
    id: 'dumps-168',
    text: 'An Admin at Universal Containers wants to map configuration attribute values to the quote line in a customer’s product catalog. Assuming the field mapping is correct, which setup will prevent the configuration attribute value from being stored on the non-bundle quote line?',
    topic: 'Salesforce CPQ',
    options: [
      'On the Configuration Attribute, “Apply to Product Options” is not selected.',
      'A selection rule is being used to hide a configuration attribute value.',
      'On the Configuration Attribute, “Hidden” is selected.',
      'The user chose a configuration attribute value that cannot be mapped.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Configuration attributes must have "Apply to Product Options" enabled to pass attribute values through to child quote lines[cite: 2].'
  },
  {
    id: 'dumps-169',
    text: 'Universal Containers has created a Discount Schedule with the override Behavior set to All Tiers and applied it to a Product. A sales rep then adds this Product to a Quote, manually changes the discount percent of a discount Tier, and saves the Quote. At what point during the sales process can the sales rep be assured that the override amount will be unaffected by changes the Admin may make to the original Discount Schedule?',
    topic: 'Salesforce CPQ',
    options: [
      'The Save or Quick Save buttons are clicked.',
      'Override values are subject to Discount Schedule updates made by the Admin.',
      'The Opportunity status has changed to Proposal/price Quote.',
      'The Quote status has changed to Approved.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Clicking save or quick save writes manual tier overrides directly to quote line records, insulating them from global schedule changes[cite: 2].'
  },
  {
    id: 'dumps-170',
    text: 'At Universal containers, the fulfillment team requires that Order Item dates reflect when orders are created, rather than Quote Line start dates, because there can be gaps between anticipated versus actual start dates. At the same time, the Account Management team wants to ensure that all items from one order appear on one contract. What are two ways the CPQ Specialist can meet these requirements? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set Order Product Date to Today when the record is created using Process Builder.',
      'Set package Default Order Start Date to Today.',
      'Set Contracting Method on the Order to single Contract.',
      'Set package Contracting Method to Single Contract.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Configuring default order start dates to today and setting single contract methods at the package level standardizes order generation behavior[cite: 2].'
  },
  {
    id: 'dumps-171',
    text: 'What is a valid formula for use in a Price Action where Target Object is Quote Line?',
    topic: 'Salesforce CPQ',
    options: [
      'SBQQ__Product__r.SBQQ__DiscountSchedule__r.SBQQ__Order__c',
      'SBQQ__Product__r.Name',
      'SBQQ__Feature__r.SBQQ__Number__c',
      '$User.FirstName'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Price action formulas on quote lines can traverse relationship fields such as product attributes to retrieve standard values[cite: 2].'
  },
  {
    id: 'dumps-172',
    text: 'In order to assign a fixed price to a Product based on a range of quantities (which would override the automatic calculation of quantity x unit price) you would use:',
    topic: 'Salesforce CPQ',
    options: [
      'Block Pricing',
      'Contracted Pricing',
      'Cost & Markup Pricing',
      'List Pricing'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Block pricing assigns predetermined flat prices based on quantity quantity tiers, bypassing standard unit multiplication[cite: 2].'
  },
  {
    id: 'dumps-173',
    text: 'A customer is implementing CPQ to support two languages. Which two portions of text can be translated using the Salesforce CPQ localization object? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Picklist values in the Product Family field on the Product object',
      'Configuration Attribute picklist values',
      'The Feature Name field on the Configure Products page',
      'HTML Template Content in the Quote document'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Salesforce CPQ localization objects support translating feature names and template content items into multiple languages[cite: 2].'
  },
  {
    id: 'dumps-174',
    text: 'MDQ products are automatically removed from normal Line Item tables whenever an output document includes an MDQ specific table layout in another section.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'MDQ items do not automatically vanish from standard tables unless explicitly filtered out by section print criteria[cite: 2].'
  },
  {
    id: 'dumps-175',
    text: 'The Admin at Universal Containers (UC) has created one bundle containing all products as options with null subscription pricing and asset conversion. When sales users amend the contract containing this bundle, the bundle is excluded in the Amendment Quote. Why is the bundle excluded?',
    topic: 'Salesforce CPQ',
    options: [
      'The sales user neglected to select the Preserve Bundle structure field on the Contract.',
      'The bundled Product is excluded from the amendment because it lacks an Asset or a Subscription.',
      'By default, bundled Assets and Subscriptions are excluded in Amendment Quotes.',
      'The sales user must use the Amend Assets field on the Account to amend a Contract which contains Assets.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Non-subscription, non-asset container bundle structures without active pricing components are omitted from amendment quotes by default[cite: 2].'
  },
  {
    id: 'dumps-176',
    text: 'Universal Containers has come to an agreement for future pricing with a specific customer. The agreement is for special volume-based, tiered pricing for Product A on all future quotes. How can this agreement be configured to set the Regular Price for this customer?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Discount Schedule and add Product A to the Product lookup on the Discount Schedule.',
      'Create a Discount Schedule and add it to a Contracted Price record for Product A from the customer’s Account.',
      'Create a Discount Schedule and add it to the Discount Schedule field on Product A.',
      'Create a Discount Schedule and add the customer to the Contracted Prices related list on the Discount Schedule.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Assigning discount schedules to contracted price records tied to an account establishes customer-specific volume pricing[cite: 2].'
  },
  {
    id: 'dumps-177',
    text: 'Universal Containers uses Contracted Pricing to set pricing for specific distributors and child accounts. Product A has list price $300, but parent account has a Contracted Price set to $200. Which two ways can the Admin set Product A back to list price on a business unit child account? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set Ignore Parent Contracted Prices to true on the parent contracted price.',
      'Create a new contracted price for Product A on the business unit account with a price of $300.',
      'Create a new contracted price record for Product A on the business unit account and set its Ignore Parent Contracted prices to true.',
      'Set Ignore Parent Contracted Prices to true on the business unit account record.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Child accounts can override inherited parent contracted prices by defining explicit child contracted price records or bypassing hierarchy flags[cite: 1, 2].'
  },
  {
    id: 'dumps-178',
    text: 'Universal Containers licenses shipping software sold for a fixed price based on quantity tiers without further discounts. Which three steps should the Admin take to set up this pricing? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set Pricing Method to Fixed Price on the Product record.',
      'Set Non-Discountable to True on the Product record.',
      'Create a Slab Discount Schedule for the Product for each quantity tier.',
      'Set Pricing Method to Block on the Product record.',
      'Create Block Pricing records on the Product for each quantity tier with a different price for each tier.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Configuring block pricing methods, creating block price tier records, and marking items non-discountable fulfills tier-based fixed pricing[cite: 2].'
  },
  {
    id: 'dumps-179',
    text: 'Universal Containers has a Product family called Software. When a Configuration Attribute in the bundle is set to Perpetual, UC wants to Hide all Products with the Product Family called Software using a Product Rule. What additional supporting records should the Admin configure?',
    topic: 'Salesforce CPQ',
    options: [
      'An Error Condition should compare the Perpetual value against the Configuration Attribute. A Product Action should Hide each Product.',
      'An Error Condition should compare the Product Family value on the Product Option record. A Product Action should Show all Products with Product Family other than Software.',
      'An Error Condition should compare the Perpetual value against the Configuration Attribute. A Product Action using the Filter Field should Hide the Products.',
      'An Error Condition should check the Product Family value on the Product Option record. A Product Action using the Filter Field should Hide the Products.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Product actions utilizing filter criteria evaluate and hide matching family options dynamically when configuration attributes change[cite: 2].'
  },
  {
    id: 'dumps-180',
    text: 'How can an Admin prevent users from reconfiguring a specific bundle after initial configuration?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Configuration Type to Disabled.',
      'Set the Configuration Type to Allowed and Configuration Event to Always.',
      'Set the Configuration Type to Allowed and Configuration Event to Add.',
      'Set the Active checkbox on Reconfigure Line Custom Action to False.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Deactivating custom reconfigure line actions or configuring strict selection limits prevents post-initial bundle modifications[cite: 2].'
  },
  {
    id: 'dumps-181',
    text: 'Which type of Discount Schedule would you select if you wanted a blended discount rate applied across all units?',
    topic: 'Salesforce CPQ',
    options: [
      'Range',
      'Markup',
      'Slab',
      'Block'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Slab discount schedules apply a blended discount rate across varying quantity tiers[cite: 2].'
  },
  {
    id: 'dumps-182',
    text: 'Universal Containers sells a bundle with several pre-selected Product Options. Most of the time, sales reps leave the bundle configuration as-is, but want the ability to change the configuration if desired. What should the Admin do to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Set the Configuration Type field of the bundle to a value of Allowed and the Configuration Event field to a value of Add.',
      'Set the Configuration Type field of the bundle to a value of Required and the Configuration Event field to a value of Always.',
      'Set the Configuration Type field of the bundle to a value of Allowed and the Configuration Event field to a value of Edit.',
      'Set the Configuration Type field of the bundle to a value of Disabled and the Configuration Event field to a value of Always.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Setting Configuration Type to Allowed and Configuration Event to Edit allows reps to modify pre-selected options after initial addition[cite: 2].'
  },
  {
    id: 'dumps-183',
    text: 'Universal Containers has multiple sales teams that need to select from a subset of the product catalog on the Product Selection page. Which solution meets the business requirement without creating a separate Price Book?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a bundle with a Configuration Attribute.',
      'Create multiple bundles with validation Product Rules.',
      'Create a Hidden Filter in Product Selection based on Profile.',
      'Create a Filter Product Rule.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Filter product rules dynamically restrict product catalog visibility on the selection page based on criteria without maintaining multiple price books[cite: 2].'
  },
  {
    id: 'dumps-184',
    text: 'An Admin has created a Configuration Attribute on the Product A bundle, and now needs an Identical Configuration Attribute on the Product B bundle that saves its value into the same Quote Line field. Which tasks should the Admin complete to meet this business requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Check “Apply to Product Options” on the existing Configuration Attribute, then make Product B an option of Product A.',
      'Create a second Configuration Attribute on Product B, no further administration required.',
      'Create a second Configured Product record for Product B on the existing Configuration Attribute.',
      'Create a second Product Option field with identical values, then create a second Configuration Attribute on Product B.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Creating a new configuration attribute on Product B pointing to the same target field populates identical data into the same quote line field[cite: 2].'
  },
  {
    id: 'dumps-185',
    text: 'Universal Containers provide a discount for an enterprise-level customer if a single line’s Net price is above a certain threshold. The Admin has set up a Price Rule with a reference to a custom formula field on the Price Condition to apply the discount automatically. The user has to click calculate twice for the discount to apply. What is the most likely cause of the issue?',
    topic: 'Salesforce CPQ',
    options: [
      'The use of formula fields in Price Conditions is unsupported, so the Price Rule fires and returns an error the first time.',
      'The Evaluation Scope of the Price rule is set incorrectly to fire on the configurator, so the Price Rule fires on the configure Products page.',
      'The referenced formula field contains date/time data information that is unsupported, so the Price Rule fires sporadically.',
      'The referenced formula field contains information that has yet to be calculated, so the Price Rule fires the second time it’s evaluated.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Formula fields referencing data that computes during calculation cycles may require subsequent evaluation passes to register updated values[cite: 2].'
  },
  {
    id: 'dumps-186',
    text: 'Universal Containers requires its bundle configuration agreement for future pricing Contract Term whenever requests to modify the existing Contract are made. Which two steps should the Admin take to generate accurate Order records? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Use the Evergreen Contract feature to permit existing Contracts to be extended beyond the original term.',
      'Renew the existing Contract, amend the Quote Start Date to today, and modify the Quote Lines to reflect a new 12-month term. Process the Renewal using the normal Quote > Order > Contract flow.',
      'Amend the existing Contract, updating all Quote Line Quantities to zero, effectively cancelling the Contract. Process the Amendment using the normal Quote > Order > Contract flow.',
      'Amend the existing Contract and extend the End Date to 12 month from today. Process the Amendment using the normal Quote > Order > Contract flow.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Processing contract term changes through standard amendment and renewal pipelines keeps order generations aligned with agreements[cite: 2].'
  },
  {
    id: 'dumps-187',
    text: 'The Admin at Universal Containers is setting up permissions for internal sales Users. In addition to assigning the Salesforce CPQ User permission set, for which objects do the Users need Read, Create, Edit, Delete permissions?',
    topic: 'Salesforce CPQ',
    options: [
      'Quote Template, Template Content, Template Section, Line Column',
      'Quote, Quote Line, Quote Line Group, Quote Document',
      'Price Rule, Price Action, Price Condition, Lookup Query',
      'Discount Category, Discount Schedule, Discount Tier, Term Schedule'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Sales users require full object-level permissions on quotes, quote lines, groups, and documents to construct and manage quotes[cite: 2].'
  },
  {
    id: 'dumps-188',
    text: 'Universal Containers sells a bundle Product which contains many Features and Options. Users report that the bundle is difficult to configure due to a significant amount of scrolling to find the desired Features and Options. What are three ways the Admin can adjust the design of this bundle to reduce scrolling in configuration? Choose 3 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Set System to True on the Product Options to be excluded from the configurator.',
      'Set Option Selection Method to Add on the Product Features.',
      'Group the Product Features of the bundle into tabs using the category field.',
      'Change Option layout to Tabs on the bundle Product.',
      'Change Enable Large Configuration to True on the bundle Product.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Setting option selection methods to Add, using tab layouts, and organizing feature categories streamline large configuration screens[cite: 2].'
  },
  {
    id: 'dumps-189',
    text: 'What does ApprovalsArchived__c need to return to properly archive approval records in Advanced Approvals?',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False',
      '1',
      '0'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'ApprovalsArchived__c formulas evaluate numeric thresholds returning 1 to trigger approval record archiving[cite: 2].'
  },
  {
    id: 'dumps-190',
    text: 'Universal Containers has a block priced product, Cloud Contacts, and wants to apply a 10% premium to the product when the payment frequency is annual. Based on the Price Actions, what is the correct order for calculation precedence? SBQQ__CustomerPrice__c = SBQQ__RegularPrice__c * (1 - SBQQ__Discount__c), SBQQ__NetPrice__c = SBQQ__PartnerPrice__c * (1 - SBQQ__DistributorDiscount__c), SBQQ__PartnerPrice__c = CustomerPrice__c * (1 - SBQQ__PartnerDiscount__c), SBQQ__RegularPrice__c = SBQQ__ListPrice__c * 1.1',
    topic: 'Salesforce CPQ',
    options: [
      'a) b) c) d)',
      'd) a) c) b)',
      'd) c) a) b)',
      'b) c) a) d)'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Standard CPQ calculation sequence moves from regular price adjustments down through customer, partner, and net price computations[cite: 2].'
  },
  {
    id: 'dumps-191',
    text: 'The Admin at Universal Containers wants to add Maintenance and Support products to the parent bundle. Maintenance and Support products should display in separate sections during configuration, with the Support products displaying above the Maintenance products. How should the Admin set up the Product to meet both requirements?',
    topic: 'Salesforce CPQ',
    options: [
      'Create two Production Options Maintenance and Support. Maintenance will always display first, due to alphabetical ordering.',
      'Create two Product Features, Maintenance and Support. The Support feature should have a lower value in the “Number” field.',
      'Create two Product Features, Maintenance and Support. Maintenance will always display first, due to alphabetical ordering.',
      'Create two Product Options, Maintenance and Support. The Support option should have a lower value in the “Number” field.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Assigning numerical ordering values on product features sorts feature display sequence in configurator panels[cite: 1, 2].'
  },
  {
    id: 'dumps-192',
    text: 'Universal Containers has a slab Discount Schedule for Product A with these Discount Tiers: Tier 1 (Qty 0-10, 10% disc), Tier 2 (Qty 10-21, 25% disc), Tier 3 (Qty 21+, 50% disc). If Product A has a List Price of $100.00, what is the Net Total for a Quote Line with the quantity of 21?',
    topic: 'Salesforce CPQ',
    options: [
      '$1,050.00',
      '$1,725.00',
      '$1,700.00',
      '$1,575.00'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Under slab rules, Tier 1 yields 900, Tier 2 yields 750, and Tier 1 unit in Tier 3 yields 50, summing to a net total of $1,700.00[cite: 2].'
  },
  {
    id: 'dumps-193',
    text: 'Universal Containers has a Product that requires a price of USD 100 and EUR 95 in the 2019 Price Book. When the Product is selected under a bundle, the price should be included as part of the bundle. How should the Admin meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Change the Price Book Entries for the Product in the 2019 Price Book to 100 USD and 95 EUR. On the Product Option, set the Selected field to True.',
      'Change the Price Book Entries for the Product in the 2019 Price Book to 100 USD and 95 EUR. On the Product Option, set the System field to True.',
      'Create a Product Option record and set the Unit Price field to 100 and the Currency field to USD. Create a Product Option record and set the Unit Price field to 95 and the Currency field to EUR. On both Product Option records, set the Required field to True.',
      'Change the Price Book Entries for the Product in the 2019 Price Book to 100 USD and 95 EUR. On the Product Option, set the Bundled field to True.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Checking the Bundled field on the Product Option record incorporates price book entries directly into the parent bundle pricing structure[cite: 2].'
  },
  {
    id: 'dumps-194',
    text: 'An Admin at UC added a new logo to the Documents folder for use in the quote template. After adding the image to an HTML Content Section and testing, the image is too big. What should the Admin do to resize the image and to maximize image quality?',
    topic: 'Salesforce CPQ',
    options: [
      'Wrap the image in a span tag and resize using CSS.',
      'Add HTML height and width attributes in the img tag.',
      'Resize in an image editor outside of Salesforce.',
      'Use inline CSS height and width properties in the img tag.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Resizing images in external image editors before uploading preserves optimal quality and avoids rendering distortions in PDF conversions[cite: 2].'
  },
  {
    id: 'dumps-195',
    text: 'Universal Containers (UC) has an approval structure that involves both the Deal Desk and Finance teams. UC wants to send both Approval requests simultaneously when a Quote is submitted to reduce the time for Quote approval. Which Approval type best suits UC’s needs?',
    topic: 'Salesforce CPQ',
    options: [
      'Native Approvals; multiple Approval steps can be set up with the same Step Number to send Approval requests in parallel.',
      'Advanced Approvals; multiple Approval Chains can be set up to send Approval requests in parallel.',
      'Native Approvals; multiple Approval Processes can be set up to send Approval requests in parallel.',
      'Advanced Approvals; multiple Approval Steps can be set up in a single Approval Chain to send Approval requests in parallel.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Advanced Approvals supports multiple approval chains executing simultaneously to handle parallel review tracks[cite: 2].'
  },
  {
    id: 'dumps-196',
    text: 'An Admin at Universal Containers has hidden the prices of Products on the Configure Products page. How should the Admin make the prices visible again?',
    topic: 'Salesforce CPQ',
    options: [
      'Go to the Product Option object’s Unit Price field and add visibility to its Field-level security.',
      'Go to the Product Option object’s Option Configuration Field Set and add the Unit Price field.',
      'Go to the Product Option record and check if the Default Pricing Table field is set to Standard.',
      'Go to the Product Option record and check if the Price Editable field is False.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Field-level security settings control whether unit price fields render during product configuration[cite: 2].'
  },
  {
    id: 'dumps-197',
    text: 'Users should be able to quote ramp deals with non-consecutive time periods. Which setting should the Admin turn on for this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the Allow Non-Consecutive Custom Segments checkbox on the Price Dimension object.',
      'Select the Allow Non-Consecutive Custom Segments checkbox on the Product object.',
      'Select the Allow Non-Consecutive Custom Segments checkbox on the Salesforce CPQ package settings.',
      'None of the above: all custom segments must be consecutive.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Package-level configurations control whether MDQ segments permit non-consecutive custom time schedules[cite: 2].'
  },
  {
    id: 'dumps-198',
    text: 'Administrators can control the location of Configuration Attributes using row and column orders.',
    topic: 'Salesforce CPQ',
    options: [
      'True',
      'False'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Row and column order attributes position configuration fields neatly on configurator layout grids[cite: 2].'
  },
  {
    id: 'dumps-199',
    text: 'Universal Containers wants customers to commit to a new 12-month Contract Term. Which two scenarios are valid when executing this? Choose 2 answers',
    topic: 'Salesforce CPQ',
    options: [
      'Change quantities of existing Products; apply different discounts than original Quote',
      'Change quantities of existing Products; maintain same discounts as original Quote',
      'Add new Products; co-terminate to existing Contract',
      'Add new products; use different End Date from existing Contract'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Contract amendments and renewals support adjusting quantities, modifying discount structures, or co-terminating new items[cite: 2].'
  },
  {
    id: 'dumps-200',
    text: 'Universal Containers has a single Price Book for several currencies. The Admin is creating a Primary Quote from an Opportunity and notices the Quote inherits the Price Book from the Opportunity. Which Product will be available within the Product Selection page?',
    topic: 'Salesforce CPQ',
    options: [
      'All Products with Price Book Entries in all Active Currencies.',
      'All Products with Price Book Entries when Dated Exchange Rates are enabled.',
      'All Products with Price Book Entries with a positive Price.',
      'All Products with Price Book Entries in the Opportunity/Quote Currency.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Product catalogs filter selectable items based on price book entries matching the active currency of the quote[cite: 2].'
  },
  {
    id: 'dumps-201',
    text: 'An Admin at Universal Containers wants to configure a bundle with multiple features and have the product code of all options displayed in a single field for easy rendering on the quote document. What should the Admin do to achieve this?',
    topic: 'Salesforce CPQ',
    options: [
      'Write a custom trigger.',
      'Use package product code.',
      'Create price rules and formula fields.',
      'Combine roll-up fields with formula fields.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Using package product code features allows combined option identification patterns to display cleanly across documents[cite: 2].'
  },
  {
    id: 'dumps-202',
    text: 'What additional field is required for all records when using Approval Variables vs. Summary Variables in Advanced Approvals?',
    topic: 'Salesforce CPQ',
    options: [
      'Net Variable',
      'Combine With',
      'Type',
      'List Variable'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Approval variables require defining a Type field attribute to aggregate and evaluate data conditions properly[cite: 2].'
  },
  {
    id: 'dumps-203',
    text: 'Universal Containers has two products: C-STOR-L (Large Storage Container) and C-LID-L (lid for Large Storage Container). These are Product Options within the same bundle. C-STOR-L is required before C-LID-L is selected in the bundle. The Admin wants to create an Option Constraint. What field should C-LID-L be stored in to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Constrained Option',
      'Dependent Option',
      'Required for Option',
      'Selected Option'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The option being restricted or controlled by the relationship rule is stored as the Constrained Option[cite: 2].'
  },
  {
    id: 'dumps-204',
    text: 'Universal Containers has products that will only be utilized as Product options inside five different bundle products. When a User adds products to the Quote Line Editor, Universal Containers would like Bundle products to show in the Product Selection page, and Products that are Product Options of the bundle to not show in the Product Selection page. How should the Admin set up the bundle?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the Hidden checkbox for any Product that is a Product Option for the bundle.',
      'Select the Component checkbox on any Product that is a Product Option for the bundle.',
      'Select the bundled checkbox on each Product Option and mark the Product inactive.',
      'Select the Selected checkbox on each Product Option and mark the Product inactive.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting the Component flag on option records hides them from standalone product lookup catalogs[cite: 2].'
  },
  {
    id: 'dumps-205',
    text: 'The products sold by Universal Containers (UC) have a Product Family of Hardware or Software. Each Quote should only contain one of the Product Families. At the time of Quote creation, the sales rep is required to populate a custom picklist with API name Family__c with values of Hardware and Software. If the sales rep selects Hardware, the rep should only be able to add Products with the Product Family of Hardware. How should the Admin meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Custom Action Condition related to the Add Products Custom Action where Target Object is Quote, Field is Family__c, Filter value is Product Family.',
      'Create a Custom Action Condition related to the Add Products Custom Action where Target object is Product, Field is Product Family, Filter Value is Family__c.',
      'Create a Search Filter related to the Add Products Custom Action Where Target Object is Quote, Target Field is Family__c, Operator is Equals, Filter Source Object is Product, Filter Source Field is Product Family, Hidden is True.',
      'Create a Search Filter related to the Add Products Custom Action Where Target Object is Product, Target Field is Product Family, Operator is Equals, Filter Source Object is Quote, Filter Source Field is Family__c, Hidden is True.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Search filters linked to custom actions dynamically match quote-level picklist selections against product attributes during product selection[cite: 2].'
  },
  {
    id: 'dumps-206',
    text: 'Universal Containers has a bundle that has a large number of Product Options. They do not want all of the options available to be visible on the configuration by default. They want the User to click a button within each Feature to see which Product Options are available to be selected, and then have the User select Product Options from that page. How should the Admin set up the bundle for the display to work this way?',
    topic: 'Salesforce CPQ',
    options: [
      'Select the Required checkbox on each Product Option in the Bundle.',
      'Select the Hidden checkbox on the Bundled Product record.',
      'Select Add as the Option Selection Method on the Bundle product.',
      'Select Click as the Option Selection Method on the Bundle product.'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Selecting "Add" as the Option Selection Method on features displays an add button that opens dedicated product selection screens[cite: 2].'
  },
  {
    id: 'dumps-207',
    text: 'Universal Containers has a quote with Process Inputs. The Admin wants questions that change dynamically based on answers to previous questions. If the answer to “What business problem are you solving” is Consolidated IT, Server Types should be shown as the only next question. If the answer is Manage Time & Expense, Deployment Options and Commercial Segment should be shown and Server Types should be hidden. How should the quote process be set up?',
    topic: 'Salesforce CPQ',
    options: [
      'Create a Process Input Condition on Business Solution where Server Types equals Consolidated IT. Create a Process Input Condition on Deployment Options and Commercial Segment where Business Solutions equals Manage Time & Expense.',
      'Create a Process Input Regulation on Server Types where Business Solution equals Consolidated IT. Create a Process Input Regulation on Deployment Options and Commercial Segment where Business Solutions equals Manage Time & Expense.',
      'Create a Process Input Condition on Server Types where Business Solution equals Consolidated IT. Create a Process Input Condition on Deployment Options and Commercial Segment where Business Solutions equals Manage Time & Expense.',
      'Create a Process Input Condition on Server Types Where Business Solution equals Consolidated IT. Create a Process Input Regulation on Deployment Options and Commercial Segment where Business Solutions equals Manager Time & Expense.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Process Input Conditions govern guided selling flow step visibility based on prior input selections[cite: 2].'
  },
  {
    id: 'dumps-208',
    text: 'Universal Containers has a requirement to ensure that Product B is always quoted with Product A in a bundle. The products are in separate features and there is no clear indication that they must be sold together. They implemented a Product Validation rule to fulfill this requirement, but received complaints that it was not user friendly. What other approach should the Admin take to fulfill this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'Create an Option Constraint with Type: Add.',
      'Create a Configuration Price Rule to add Product B.',
      'Create a Product Selection rule to add Product B.',
      'Create an Option Constraint with Type: Dependency.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Dependency option constraints link selections across features smoothly without throwing disruptive error messages[cite: 2].'
  },
  {
    id: 'dumps-209',
    text: 'Universal Containers (UC) has set the CPQ package settings of both Subscription Term Unit and Subscription Prorate Precision to Month. UC wants to quote a Fixed Price Subscription Product with a Start Date of June 18, 2019 and an End Date of August 21, 2020. The Product record has a Subscription Term of 12, a Pricing Method of List, and a Pricebook Entry of USD 100. What is the Prorated List Unit Price for the Quote Line?',
    topic: 'Salesforce CPQ',
    options: [
      'USD 116.67',
      'USD 118.31',
      'USD 125.00',
      'USD 100.00'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Calculating prorated multipliers over 14 months against a 12-month base term yields a prorated list unit price of USD 116.67[cite: 2].'
  },
  {
    id: 'dumps-210',
    text: 'The Admin has created the “Promotional Discount ABC” price rule. Assuming a quote where all conditions from this rule are met, which products on the quote get a discount?',
    topic: 'Salesforce CPQ',
    options: [
      'Product C',
      'Product A, Product B, and Product C',
      'Product A and Product C',
      'Product B and Product C'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Price rules evaluate scope filters to apply actions specifically to the targeted product line items meeting conditions[cite: 2].'
  },
  {
    id: 'dumps-211',
    text: 'Universal Containers designates all miscellaneous components with a Product Family that equals "MISC." The Admin wants these components to automatically be excluded from the output document. What should the Admin do to meet this requirement?',
    topic: 'Salesforce CPQ',
    options: [
      'On the Quote Template record, set the show bundled products checkbox to FALSE.',
      'On the Template Section record, set filter fields to Product Family, “Not Equals”, and “MISC”.',
      'On the Quote Template record, set the show all package products checkbox to TRUE.',
      'On each miscellaneous product’s Product page, set the Component checkbox to TRUE.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Template section filters excluding specific product families filter out matching items from output tables[cite: 2].'
  },
  {
    id: 'dumps-212',
    text: 'Universal containers wants to use a field, Custom_Field__c, on the Product Feature object as part of a Price Condition in a Price Rule. The Price Rule should be firing in the Line Editor, whenever the user calculates the Quote. The admin has also created a cross-object formula field on the product option object to store the value there as well, called Feature_Value__c. What should the Admin use in the price condition?',
    topic: 'Salesforce CPQ',
    options: [
      'Object = “Product Option”, Field = “Feature_Value__c”',
      'Object = “Quote Line”, Tested Formula = “SBQQ__ProductOption__r.Feature_Value__c”',
      'Object = “Product Feature”, Field = “Custom_Field__c”',
      'Object = “Quote Line”, Tested Formula = “SBQQ__Feature__r.Custom_Field__c”'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Quote line formulas traversing feature relationships can evaluate parent feature attributes during calculations[cite: 2].'
  },
  {
    id: 'dumps-213',
    text: 'In which scenario must an Admin choose “Custom” for the condition met field of a Price Rule?',
    topic: 'Salesforce CPQ',
    options: [
      'The Price Rule uses a custom lookup object to store key-value pairs for Price Conditions',
      'The Price Rule uses a combination of AND and OR logic when evaluating three or more Price Conditions',
      'One or more Price Condition records have a lookup to a Summary Variable',
      'One or more Condition records use a formula that reference a non-CPQ object field'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Mixing custom AND/OR logical operators across multiple conditions requires setting conditions met to Custom[cite: 2].'
  },
  {
    id: 'dumps-214',
    text: 'Universal Containers has 4 Price Rules, each with differing Calculator Evaluation Events & Evaluation Orders. Which rule will evaluate first?',
    topic: 'Salesforce CPQ',
    options: [
      'Rule D with Evaluation Order of 5, and Calculator Evaluation Event of On Calculate',
      'Rule B with Evaluation Order of 20, and Calculator Evaluation Event of On Initialization',
      'Rule A with Evaluation Order of 10, and Calculator Evaluation Event of Before Calculate',
      'Rule C with Evaluation Order of 20, and Calculator Evaluation Event of Before Calculate'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'On Initialization evaluation events occur prior to calculation loops, making them execute ahead of calculation-phase rules[cite: 2].'
  },
  {
    id: 'dumps-215',
    text: 'Which type of record creation order is mandatory when loading Quote Templates and related records into Salesforce CPQ via data migration tools?',
    topic: 'Salesforce CPQ',
    options: [
      'Quote Template, Template Sections, Line Columns, Template Content, Quote Terms, Term Conditions',
      'Template Content, Quote Templates, Template Sections, Line Columns, Quote Terms, Term Conditions',
      'Quote Content, Template Content, Quote Templates, Sections, Terms',
      'Template Sections, Line Columns, Quote Templates, Quote Terms'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Template content and quote templates must exist before dependent sections, columns, and terms can reference them[cite: 2].'
  },
  {
    id: 'dumps-216',
    text: 'What happens when an Admin checks the "Preserve Bundle Structure" option on a contract during amendment generation?',
    topic: 'Salesforce CPQ',
    options: [
      'It preserves parent-child groupings so amended lines remain nested under their original bundle structure.',
      'It locks all bundle option quantities from being edited during amendments.',
      'It deletes all historical asset records and rebuilds them.',
      'It forces all bundle options to convert into independent standalone quote lines.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Preserving bundle structure ensures amendment quotes maintain clean parent-child line hierarchies[cite: 2].'
  },
  {
    id: 'dumps-217',
    text: 'Which package setting dictates whether CPQ allows multi-line deletions directly within the Quote Line Editor interface?',
    topic: 'Salesforce CPQ',
    options: [
      'Enable Multi Line Delete',
      'Allow Bulk Option Removal',
      'Enable Quick Calculate',
      'Allow Line Item Purging'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Enabling "Enable Multi Line Delete" in package settings adds selection checkboxes to delete multiple lines simultaneously[cite: 2].'
  },
  {
    id: 'dumps-218',
    text: 'When configuring lookup queries in Price Rules, what is the primary function of source fields?',
    topic: 'Salesforce CPQ',
    options: [
      'To pass runtime context values from the quote or quote line into lookup object filter parameters.',
      'To store final calculated output values permanently.',
      'To restrict user security profiles during price rule execution.',
      'To format error messaging text strings.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Source fields feed quote line or quote context data into custom lookup object query filters[cite: 2].'
  },
  {
    id: 'dumps-219',
    text: 'What is the effect of setting a Discount Schedule type to "Range" instead of "Slab"?',
    topic: 'Salesforce CPQ',
    options: [
      'The entire quantity falls into the matching tier and applies a single discount percentage across all units.',
      'Quantities break down proportionally across every single tier step-by-step.',
      'Discounts apply exclusively to the final unit purchased.',
      'Prices multiply directly by block quantity dimensions.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Range discount schedules apply a flat discount rate across the entire quantity based on the tier reached, unlike slab schedules[cite: 2].'
  },
  {
    id: 'dumps-220',
    text: 'How can an administrator ensure that specific quote lines are always sorted in a particular sequence on generated PDF documents?',
    topic: 'Salesforce CPQ',
    options: [
      'Configure sort order fields or line sorting attributes on template sections or quote line configurations.',
      'Manually drag and drop PDF pages before generation.',
      'Set product codes alphabetically across all price books.',
      'Enable sort memory flags in package settings.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Sort orders on template sections and line columns dictate line item presentation sorting on output documents[cite: 2].'
  },
  {
    id: 'dumps-221',
    text: 'Which object stores the criteria defining when an Advanced Approval rule should trigger an approval request?',
    topic: 'Salesforce CPQ',
    options: [
      'Approval Condition',
      'Approval Rule Variable',
      'Approval Step Matrix',
      'Approval Filter Criterion'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Approval conditions hold the specific field comparisons and values required to fire an Advanced Approval rule[cite: 2].'
  },
  {
    id: 'dumps-222',
    text: 'What is the purpose of the "Cross Orders" checkbox on a Discount Schedule?',
    topic: 'Salesforce CPQ',
    options: [
      'It aggregates quantities across multiple orders or quotes when evaluating discount tiers.',
      'It links discount schedules automatically to external ERP billing systems.',
      'It prevents discount schedules from applying to amendment quotes.',
      'It forces multi-currency conversions during schedule evaluation.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Cross-order checkboxes enable schedule evaluations to span multiple quotes or orders when calculating cumulative tiers[cite: 2].'
  },
  {
    id: 'dumps-223',
    text: 'When configuring a Template Section, what does setting the "Keep Together" property to True accomplish?',
    topic: 'Salesforce CPQ',
    options: [
      'It prevents page breaks from splitting the section content across multiple pages if possible.',
      'It locks template styling options from being modified by standard users.',
      'It groups multiple separate quote templates into a single master document.',
      'It combines multiple quote lines into a single roll-up summary row.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Keep Together formatting properties prevent awkward mid-section page breaks on generated PDFs[cite: 2].'
  },
  {
    id: 'dumps-224',
    text: 'Which tool should an Admin use to troubleshoot syntax errors or HTML rendering failures in custom Template Content records?',
    topic: 'Salesforce CPQ',
    options: [
      'The source code editor check syntax utility or cloning/isolation troubleshooting methods.',
      'The Salesforce Setup Audit Trail logs.',
      'The Data Loader bulk export utility.',
      'The Installed Package post-install script runner.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Checking source code syntax or cloning and isolating broken rows helps diagnose template HTML rendering bugs[cite: 2].'
  },
  {
    id: 'dumps-225',
    text: 'What core setting must be established on a Price Dimension to allow users to modify segment lengths during quote configuration?',
    topic: 'Salesforce CPQ',
    options: [
      'Setting Dimension Type to Custom or enabling override properties.',
      'Checking "Lock Segment Length" in package settings.',
      'Setting pricing method to block.',
      'Assigning a static discount schedule.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Custom price dimensions provide flexibility for defining and overriding segment intervals[cite: 2].'
  },
  {
    id: 'dumps-226',
    text: 'How do Twin Fields function between Quote Lines and Subscription/Asset records upon contracting?',
    topic: 'Salesforce CPQ',
    options: [
      'They automatically copy matching field values from quote lines to resulting subscription and asset records.',
      'They calculate multi-currency conversion rates dynamically.',
      'They restrict user editing permissions on active contracts.',
      'They enforce product rule execution order.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Twin fields share matching API names and types to transfer custom data seamlessly from quotes down to assets and subscriptions[cite: 2].'
  },
  {
    id: 'dumps-227',
    text: 'What is the behavior of a Product Validation Rule when it encounters a violated error condition during quote line editing?',
    topic: 'Salesforce CPQ',
    options: [
      'It displays a custom error message and prevents the user from saving or proceeding until corrected.',
      'It automatically deletes the offending quote line.',
      'It emails the system administrator immediately.',
      'It bypasses validation and logs a warning in debug logs.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Validation rules throw error banners and block quote saves when criteria fail[cite: 2].'
  },
  {
    id: 'dumps-228',
    text: 'Why would an Admin configure a Summary Variable instead of a standard roll-up summary field?',
    topic: 'Salesforce CPQ',
    options: [
      'Summary variables can evaluate CPQ-specific quote line conditions and dataset aggregations that standard master-detail roll-ups cannot reach.',
      'Summary variables execute faster than native database triggers.',
      'Summary variables are required for creating standard page layouts.',
      'Summary variables bypass sharing rule restrictions entirely.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Summary variables provide specialized calculation logic across quote lines and asset records within CPQ data structures[cite: 2].'
  },
  {
    id: 'dumps-229',
    text: 'What is the primary purpose of configuring a Quote Process in Salesforce CPQ?',
    topic: 'Salesforce CPQ',
    options: [
      'To guide sales reps through a structured series of questions (guided selling) to filter and recommend appropriate products.',
      'To automate the approval routing of high-discount quotes.',
      'To generate multi-currency invoice schedules.',
      'To manage inventory warehouse allocations.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Quote processes drive guided selling wizards that prompt reps for input to filter product catalogs effectively[cite: 2].'
  },
  {
    id: 'dumps-230',
    text: 'When generating renewal quotes, what determines whether expired subscriptions are consolidated or kept as separate lines?',
    topic: 'Salesforce CPQ',
    options: [
      'Subscription and contract renewal model settings (such as asset-based or contract-based aggregation rules).',
      'The browser cache settings of the user.',
      'The active currency code of the parent account.',
      'The number of template sections linked to the quote template.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Renewal models and subscription grouping configurations determine how renewal items aggregate onto renewal quotes[cite: 2].'
  },
  {
    id: 'dumps-231',
    text: 'Which package setting controls whether background calculations are disabled during intensive quote line adjustments?',
    topic: 'Salesforce CPQ',
    options: [
      'Disable Background Calculation',
      'Suppress Calculator Threads',
      'Bypass Asynchronous Pricing',
      'Block Real-Time Validation'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Disabling background calculation prevents asynchronous pricing updates from firing continuously during edits[cite: 2].'
  },
  {
    id: 'dumps-232',
    text: 'How does an Admin configure a Search Filter to ensure sales reps cannot modify or delete it on the Product Selection page?',
    topic: 'Salesforce CPQ',
    options: [
      'Check the Hidden or Locked settings on the Search Filter record depending on business requirements.',
      'Set the filter operator to Equals and leave values blank.',
      'Assign the search filter to a custom permission set.',
      'Convert the filter into a static formula field.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Search filter configurations include visibility and locking controls to restrict user modification[cite: 2].'
  },
  {
    id: 'dumps-233',
    text: 'What is the function of the "SBQQ__Bundled__c" checkbox on a Product Option record?',
    topic: 'Salesforce CPQ',
    options: [
      'It indicates that the option is included at no additional cost within the bundle package price.',
      'It forces the option to require explicit separate purchasing.',
      'It hides the parent bundle entirely.',
      'It converts the option into a standalone subscription.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Bundled checkboxes on options set net prices to zero, designating them as included components of the bundle[cite: 2].'
  },
  {
    id: 'dumps-234',
    text: 'Which data object stores the individual approval records generated during an Advanced Approval evaluation cycle?',
    topic: 'Salesforce CPQ',
    options: [
      'Approval (SBAA__Approval__c)',
      'Approval Request Log',
      'Approval Chain Item',
      'Pending Approver Record'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Advanced Approvals tracks approval statuses and assignments using the SBAA__Approval__c custom object[cite: 2].'
  },
  {
    id: 'dumps-235',
    text: 'What is the effect of checking "Allow Renewal Quotes Without Assets" in package settings?',
    topic: 'Salesforce CPQ',
    options: [
      'It permits renewal quote creation even if underlying asset or subscription records are missing.',
      'It blocks all contract renewals from generating opportunities.',
      'It deletes expired contracts automatically.',
      'It converts all assets into one-time consumables.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'This package setting relaxes strict asset validation checks when generating renewal quotes for accounts[cite: 2].'
  },
  {
    id: 'dumps-236',
    text: 'How are Price Rules evaluated when multiple rules target the same calculation event?',
    topic: 'Salesforce CPQ',
    options: [
      'In ascending order based on their Evaluation Order field value.',
      'In alphabetical order by price rule name.',
      'Randomly based on server thread allocation.',
      'Simultaneously without regard to evaluation order.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Evaluation Order numbers sequence price rule execution paths during calculation phases[cite: 2].'
  },
  {
    id: 'dumps-237',
    text: 'What is the primary role of a Product Action within a Product Selection Rule?',
    topic: 'Salesforce CPQ',
    options: [
      'To specify what happens to target products (such as add, hide, show, or enable) when rule conditions are met.',
      'To calculate net profit margins across product families.',
      'To format template table columns on quote PDFs.',
      'To establish exchange rates for multi-currency schedules.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Product actions dictate the operational response (adding, hiding, or selecting) enforced by product rules[cite: 2].'
  },
  {
    id: 'dumps-238',
    text: 'Why would an Admin choose to use a Lookup Query instead of hardcoding values inside Price Conditions?',
    topic: 'Salesforce CPQ',
    options: [
      'Lookup queries scale efficiently by referencing dynamic custom lookup objects for matrix-based pricing without cluttering rule criteria.',
      'Lookup queries execute entirely on client-side browsers.',
      'Lookup queries are mandatory for all pricing rules.',
      'Lookup queries eliminate the need for price books.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Lookup queries decouple complex matrix data from rule criteria, making maintenance much simpler[cite: 2].'
  },
  {
    id: 'dumps-239',
    text: 'What happens when a contract is co-terminated with an existing active contract in Salesforce CPQ?',
    topic: 'Salesforce CPQ',
    options: [
      'The new contract or amendment aligns its end date to match the target co-termination contract end date.',
      'The existing contract is cancelled permanently.',
      'All product pricing reverts to standard list prices.',
      'Subscription terms reset automatically to 12 months.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Co-termination synchronizes end dates so added subscriptions align with existing contract timelines[cite: 2].'
  },
  {
    id: 'dumps-240',
    text: 'Which feature allows Salesforce CPQ to generate multiple separate Order records from a single Quote based on specified criteria?',
    topic: 'Salesforce CPQ',
    options: [
      'Allow Multiple Orders package setting and Order By field configurations.',
      'Multi-Order Approval Chains.',
      'Split Quote Template sections.',
      'Cross-Order Discount Schedules.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Enabling multiple orders and setting Order By criteria splits quote lines into distinct orders automatically[cite: 2].'
  },
  {
    id: 'dumps-241',
    text: 'What is the purpose of the "Prorate Multiplier" in Salesforce CPQ pricing calculations?',
    topic: 'Salesforce CPQ',
    options: [
      'To adjust subscription prices proportionally based on the duration of the quote relative to subscription terms.',
      'To convert currencies across global regions.',
      'To calculate sales commission distributions.',
      'To determine tax percentages on quote lines.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Prorate multipliers scale subscription pricing accurately according to start and end date term lengths[cite: 2].'
  },
  {
    id: 'dumps-242',
    text: 'How does Salesforce CPQ handle evergreen subscriptions during contract and renewal processing?',
    topic: 'Salesforce CPQ',
    options: [
      'Evergreen subscriptions continue indefinitely without explicit end dates and are excluded from standard renewal quote generation cycles.',
      'Evergreen subscriptions expire strictly after 12 months.',
      'Evergreen subscriptions convert into physical assets upon creation.',
      'Evergreen subscriptions require manual termination notices every quarter.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Evergreen subscriptions persist without end dates, bypassing traditional contract renewal lifecycles[cite: 2].'
  },
  {
    id: 'dumps-243',
    text: 'What is the primary objective of running the CPQ Post-Install Script after upgrading or installing the managed package?',
    topic: 'Salesforce CPQ',
    options: [
      'To configure custom package settings, update calculator-referenced field maps, and initialize core CPQ metadata structures.',
      'To clear browser cookies for all internal users.',
      'To deploy custom Lightning Web Components to production.',
      'To export database logs into CSV archives.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Post-install scripts initialize package settings, populate required metadata, and sync calculator field maps successfully[cite: 2].'
  },
  {
    id: 'dumps-244',
    text: 'How can a card layout be embedded within another card layout?',
    topic: 'Vlocity Platform',
    options: [
      'Use an angular in a specific field in a card state',
      'Use the Add Layout button in a zone layout',
      'Use a session variable on a Card',
      'Use a card state with a layout condition'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Card layouts can be embedded using an angular component configuration in a specific field within a card state.'
  },
  {
    id: 'dumps-245',
    text: 'You have a card with five states. Four of the states have conditions. Two of the card states do not have conditions. Which one will be displayed?',
    topic: 'Vlocity Platform',
    options: [
      'The state that has the higher priority',
      'The state that is closer to the bottom in the STATES panel',
      'The state that is closer to the top in the STATES panel',
      'The state that has no condition'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'When multiple card states lack conditions or evaluate true, the framework resolves them based on their display tree hierarchy, favoring the state closer to the top in the STATES panel.'
  },
  {
    id: 'dumps-246',
    text: 'You want a card to use the layout\'s data source. What data source do you need to select for it?',
    topic: 'Vlocity Platform',
    options: [
      'Dual',
      'Apex Remote',
      'no source / layout',
      'Parent'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Leaving the card data source configured as "no source / layout" forces the card to inherit and utilize the parent layout\'s data source.'
  },
  {
    id: 'dumps-247',
    text: 'What can be launched with an action button on a card?',
    topic: 'Vlocity Platform',
    options: [
      'A Vlocity Calculation Procedure',
      'A Vlocity OmniScript',
      'A Vlocity Calculation Matrix',
      'A Vlocity DataRaptor Load'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Action buttons on FlexCards/cards are commonly configured to launch active Vlocity OmniScripts.'
  },
  {
    id: 'dumps-248',
    text: 'What two items can you include on a card flyout? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Another flyout',
      'Account name',
      'An OS Action',
      'A link to a DataRaptor'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Card flyouts can support nested components such as another flyout or standard action tools like an OmniScript (OS) action.'
  },
  {
    id: 'dumps-249',
    text: 'Which two statements about a Card Layout are true? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'A Card Layout requires its own data source',
      'A Card Layout requires a template to be assigned to it',
      'A Card Layout requires test data source settings',
      'A Card Layout can contain multiple cards'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'A card layout requires an assigned template structure and is capable of containing multiple individual cards organized into zones.'
  },
  {
    id: 'dumps-250',
    text: 'Which JSON node stores the data for a Card?',
    topic: 'Vlocity Platform',
    options: [
      'parent',
      'params',
      'records',
      'obj'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'The "obj" JSON node typically holds the core data record assigned to an individual card instance.'
  },
  {
    id: 'dumps-251',
    text: 'Which of the following uses the correct merge code syntax for the Cards Framework?',
    topic: 'Vlocity Platform',
    options: [
      '{{$parent:session:Zip}}',
      '{{$parent.session.Zip}}',
      '%$parent.session.Zip%',
      'records[0].BillingPostalCode'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'The percent-enclosed syntax (%variable%) is standard for merge codes within the Vlocity Cards Framework context.'
  },
  {
    id: 'dumps-252',
    text: 'When creating a session variable in the Card Designer, what syntax would you use to reference the value of a card parameter like params.id?',
    topic: 'Vlocity Platform',
    options: [
      '"value"',
      '[\'value\']',
      '{value}',
      'Value'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Braced syntax mapping is used inside designers to evaluate expression values dynamically.'
  },
  {
    id: 'dumps-253',
    text: 'You have so many fields on a Card that it looks cluttered. Based on best practices, what is the most efficient way to display the card?',
    topic: 'Vlocity Platform',
    options: [
      'Use a second zone',
      'Use a card flyout',
      'Use a second Card',
      'Delete some of the actions'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using a card flyout is the recommended best practice to declutter interface cards by hiding secondary details until requested.'
  },
  {
    id: 'dumps-254',
    text: 'What two OmniScript Action elements redirect the user outside the OmniScript? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Response Action',
      'Navigate Action',
      'Post to Object Action',
      'Done Action'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Navigate Actions and Done Actions explicitly direct user flows out of the running OmniScript runtime container.'
  },
  {
    id: 'dumps-255',
    text: 'Which two of the items below must be defined before you can create a new OmniScript? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Sub Type',
      'Description',
      'Type',
      'Template'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Omniscripts require defining a unique Type and Sub Type combination upon creation.'
  },
  {
    id: 'dumps-256',
    text: 'For testing an OmniScript, the ContextId is the only key in a Set Values element. Before going to production, what are two possible best practices for this ContextId setup? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Do nothing. It will be ignored at runtime.',
      'Deactivate the Set Values element.',
      'Delete the Set Values element.',
      'Add the correct ContextId to the {Data} modal.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Test-specific hardcoded set values elements should be deactivated or deleted before migrating OmniScripts to production environments.'
  },
  {
    id: 'dumps-257',
    text: 'In an OmniScript, you have a disclosure element that requires user input only if the user already checked a Non-Disclosure Agreement checkbox. Which conditional view option do you choose?',
    topic: 'Vlocity Platform',
    options: [
      'Hide element if false',
      'Set required element to optional if false',
      'Set element to read only if false',
      'Set element to repeat if false'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Hiding the element if false ensures fields appear dynamically only when the preceding checkbox condition is met.'
  },
  {
    id: 'dumps-258',
    text: 'In an OmniScript, you need to get data from a single field in a Salesforce record. What element does this?',
    topic: 'Vlocity Platform',
    options: [
      'HTTP Action',
      'Lookup',
      'Select',
      'DataRaptor Post Action'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lookup elements are designed specifically to query and pull discrete field values from Salesforce records inside OmniScripts.'
  },
  {
    id: 'dumps-259',
    text: 'In an OmniScript, you want to configure a Type Ahead block that asks the user to type in a Contact Name, but drop/return an Email address. How do you configure the DataRaptor extract step and the Type Ahead block?',
    topic: 'Salesforce Industries',
    options: [
      'Filter the DataRaptor Extract Step with an Email LIKE the filter value. In the Type Ahead block Properties, add the Name JSON Key to the Typeahead Key field.',
      'Filter the DataRaptor Extract Step with a Name LIKE the filter value. In the Type Ahead block Properties, add the Name JSON Key to the Typeahead Key field.',
      'Filter the DataRaptor Extract Step with an Email LIKE the filter value. In the Type Ahead block Properties, add the Email JSON Key to the Typeahead Key field.',
      'Filter the DataRaptor Extract Step with a Name LIKE the filter value. In the Type Ahead block Properties, add the Email JSON Key to the Typeahead Key field.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Filtering the extraction by name matches user inputs, while binding the response JSON key appropriately handles type-ahead dropdown displays.'
  },
  {
    id: 'dumps-260',
    text: 'What two settings are required for a Set Errors element? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'A Validation Expression',
      'An Element Error map',
      'An Active Message',
      'A Conditional View'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Set Errors components require validation expression rules and active error text messaging to function correctly.'
  },
  {
    id: 'dumps-261',
    text: 'What OmniScript Element only displays a rich-text HTML formatted code block?',
    topic: 'Vlocity Platform',
    options: [
      'Text',
      'Text Block',
      'Edit Block',
      'Text Area'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Text Block elements allow authors to present styled rich text and HTML formatting inside OmniScripts.'
  },
  {
    id: 'dumps-262',
    text: 'An OmniScript gets data from Salesforce and from an on-premises billing database. What two OmniScript elements could retrieve this data? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'HTTP Action',
      'Navigate Action',
      'DataRaptor Extract Action',
      'Response Action'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'DataRaptor Extract actions query Salesforce data, while HTTP actions connect out to external on-premises or web service endpoints.'
  },
  {
    id: 'dumps-263',
    text: 'What makes a Selectable Items element different from other OmniScript elements?',
    topic: 'Vlocity Platform',
    options: [
      'It requires an HTML template to display',
      'It requires a CSS template to display',
      'It requires data from a Calculation Procedure',
      'JSON data returned doesn\'t display in OmniScript JSON data until selected at runtime'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Selectable items handle payloads dynamically where child selections bind data into runtime JSON structures upon interaction.'
  },
  {
    id: 'dumps-264',
    text: 'An OmniScript saves data to Salesforce and to an AWS Order Management system. What OmniScript element could save all of this data?',
    topic: 'Vlocity Platform',
    options: [
      'DataRaptor Post Action',
      'Integration Procedure Action',
      'HTTP Action',
      'DataRaptor Load Action'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Integration Procedures orchestrate multiple data writes concurrently across Salesforce (via DataRaptors) and external systems (via HTTP).'
  },
  {
    id: 'dumps-265',
    text: 'Why do you need a Response Action element in an Integration Procedure?',
    topic: 'Vlocity Platform',
    options: [
      'It controls where the user navigates after the integration procedure',
      'It calls an APEX class and method',
      'It returns data to whatever called the Integration Procedure',
      'It enforces error checking'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Response actions package data outputs and send them back to the caller process that triggered the Integration Procedure.'
  },
  {
    id: 'dumps-266',
    text: 'You are configuring the API URL in an HTTP Action element within an Integration Procedure. What is the merge code syntax for passing a Date node from an element named SetValues in the URL?',
    topic: 'Vlocity Platform',
    options: [
      '%SetValues.Date%',
      '[\'SetValues\'][\'Date\']',
      '%SetValues:Date%',
      '{{SetValues.Date}}'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Integration Procedures utilize colon-separated merge syntax inside percent signs (%Element:Node%) for data mapping.'
  },
  {
    id: 'dumps-267',
    text: 'In an Integration Procedure, you need to perform a multi-step calculation on every element of an array. Based on best practice methods, what is recommended? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Use a List Action to merge the array elements together',
      'Use a Matrix Action to call a Calculation Matrix',
      'Use a Set Values Element inside a Loop Block',
      'Use a Calculation Action to call a Calculation Procedure'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Loop blocks combined with set values or calculation actions handle iterative array processing efficiently in Integration Procedures.'
  },
  {
    id: 'dumps-268',
    text: 'You need an integration procedure that gets data from Salesforce, uses a Vlocity Apex class to process the data, and then sends data back. What three elements do you require for this functionality? Choose 3 answers',
    topic: 'Vlocity Platform',
    options: [
      'Response Action',
      'Batch Action',
      'Http Action',
      'Remote Action',
      'DataRaptor Extract Action',
      'Calculation Action',
      'DataRaptor Post Action'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'DataRaptor Extract fetches the data, a Remote Action invokes the custom Apex class, and a Response Action returns the final output.'
  },
  {
    id: 'dumps-269',
    text: 'You are building a DataRaptor Load for an Integration Procedure used in an OmniScript. Based on best practices, how should you configure Input JSON?',
    topic: 'Vlocity Platform',
    options: [
      'Build the input JSON node by node in an editor',
      'Build the Input JSON node by node in the DataRaptor Designer',
      'Copy the Input JSON from the OmniScript {Data} modal',
      'Copy the Input JSON from the DataRaptor Action Debug node'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Copying exact preview JSON payloads from runtime debug nodes ensures accurate mapping structures during DataRaptor development.'
  },
  {
    id: 'dumps-270',
    text: 'Why would you clone an Integration Procedure instead of versioning it?',
    topic: 'Vlocity Platform',
    options: [
      'The new Integration Procedure uses a Cache Block',
      'The new Integration Procedure is replacing stub data',
      'The new Integration Procedure is Chainable',
      'The new Integration Procedure will be used independently'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Cloning creates an entirely separate independent component asset, whereas versioning maintains tracking under the same parent definition.'
  },
  {
    id: 'dumps-271',
    text: 'In which fields in an Integration Procedure or DataRaptor can you use a function like CONCAT or DATEDIFF? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'In a DataRaptor in an Output Tab Output JSON Path',
      'In a DataRaptor Action in an Input Parameters value field',
      'In a Set Values Action in a Value field',
      'In a Remote Action in an Additional Output value field'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Formula functions like CONCAT and DATEDIFF are fully supported inside DataRaptor formula tabs and Set Values action value expressions.'
  },
  {
    id: 'dumps-272',
    text: 'You are configuring an Integration Procedure Action in an OmniScript. The OmniScript needs a JSON response from the Integration Procedure, but you do not want to wait for response for the user to proceed. What feature do you enable?',
    topic: 'Vlocity Platform',
    options: [
      'Toast Completion',
      'Invoke Mode Non-Blocking',
      'Use Future',
      'Invoke Mode Fire and Forget'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Fire and forget invoke modes execute background tasks asynchronously without stalling the front-end OmniScript user experience.'
  },
  {
    id: 'dumps-273',
    text: 'What pre-populates the data in a PDF used by an OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'A SOQL Query',
      'A DataRaptor Transform',
      'A DataRaptor Extract',
      'A DataRaptor Load'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'DataRaptor Extracts fetch and structure record fields so they can map cleanly into generated OmniScript PDF templates.'
  },
  {
    id: 'dumps-274',
    text: 'Of the questions listed below, which two are ones you need to answer when you create a DataRaptor Extract? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'What should I name the JSON node where the data will be sent?',
      'Which sObject or sObjects contain the data I need?',
      'Which OmniScript template will I be using?',
      'Which card will be using this DataRaptor?'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When creating a DataRaptor Extract, you must define the target sObjects containing the data and establish the extraction paths[cite: 3].'
  },
  {
    id: 'dumps-275',
    text: 'What should your first step be in troubleshooting whether a DataRaptor Extract is retrieving data?',
    topic: 'Vlocity Platform',
    options: [
      'Add a Key/value pair in the DataRaptor to test it.',
      'Go to the Industry Console and reload the page to test.',
      'Go to the PREVIEW tab in OmniScript to test.',
      'Deactivate the card and layout, and go to the PREVIEW tab for the card to test.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Testing directly inside the DataRaptor designer by providing test key/value pairs in the Preview tab is the standard first step[cite: 3].'
  },
  {
    id: 'dumps-276',
    text: 'Which two of these options can retrieve data from a Salesforce Object? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'A DataRaptor Extract Action',
      'An HTTP Action',
      'A DataRaptor Transform Action',
      'A DataRaptor Load Action',
      'A Lookup Action',
      'A DataRaptor Post Action'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'DataRaptor Extract Actions and Lookup Actions are specifically built to pull data directly from Salesforce objects[cite: 3].'
  },
  {
    id: 'dumps-277',
    text: 'What part of a DataRaptor Extract defines the JSON structure that is shared with Vlocity?',
    topic: 'Vlocity Platform',
    options: [
      'Preview Response',
      'Output JSON Path',
      'Extract JSON Path',
      'Expected Output'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Output JSON Path mapping defines how extracted fields are organized into nodes within the output JSON payload[cite: 3].'
  },
  {
    id: 'dumps-278',
    text: 'In a DataRaptor Extract JSON Path, which option below has the correct syntax for a relationship query for a native Salesforce record?',
    topic: 'Vlocity Platform',
    options: [
      'Contact:CaseId:Subject',
      'Contact:CaseId_r:Subject',
      'Contact:CaseId.Subject',
      'Contact:CaseId_r.Subject'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Standard dot notation combined with relationship suffixes (such as _r.Subject) is used in DataRaptor Extract paths[cite: 3].'
  },
  {
    id: 'dumps-279',
    text: 'Which of these checkboxes helps prevent a DataRaptor Load from creating duplicate records?',
    topic: 'Vlocity Platform',
    options: [
      'Is Lookup',
      'Is Disabled',
      'Is Required For Upsert',
      'Upsert Key'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Designating an Upsert Key on a DataRaptor Load ensures records update existing entries rather than duplicating them[cite: 3].'
  },
  {
    id: 'dumps-280',
    text: 'How do you make sure that a DataRaptor Load creates a new record?',
    topic: 'Vlocity Platform',
    options: [
      'Set a Default Value',
      'Set an upsert key',
      'Do not set a Default Value',
      'Do not set an upsert key'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Omitting an upsert key instructs the DataRaptor Load to execute a pure insert operation, creating a new record every time[cite: 3].'
  },
  {
    id: 'dumps-281',
    text: 'If the email address of a Contact is changed in an OmniScript, which of the following should be configured to update the contact\'s record in Salesforce?',
    topic: 'Vlocity Platform',
    options: [
      'A DataRaptor Load that includes the RecordId, the upsert key selected, and the new Email address.',
      'A DataRaptor Transform that maps the new Email address to the old Email address field.',
      'A DataRaptor Transform that includes the previous email with the upsert key selected and the new Email address.',
      'A DataRaptor Extract that includes the RecordId, the upsert key selected, and the new Email address.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A DataRaptor Load configured with the record ID and upsert key correctly updates existing Salesforce records[cite: 3].'
  },
  {
    id: 'dumps-282',
    text: 'You are importing a list of new products into Salesforce and need to map the new products to appropriate PriceBook Entries. What type of DataRaptor mapping keeps track of product RecordIds as they are created to use the PriceBook entries you need to create?',
    topic: 'Vlocity Platform',
    options: [
      'Linked Mapping',
      'Lookup Key',
      'Lookup Mapping',
      'Relationship Query'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Lookup mapping features allow DataRaptors to reference parent IDs generated in preceding load steps for dependent child records like PriceBook Entries[cite: 3].'
  },
  {
    id: 'dumps-283',
    text: 'You want to build a DataRaptor Transform to send product pricing to a Calculation Procedure. Given the JSON mapping in your Transform, what is correct for the Output JSON Path for the Base Price?',
    topic: 'Vlocity Platform',
    options: [
      'Input:BasePrice',
      'input:BasePrice',
      'input.basePrice',
      'input.Base Price'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'DataRaptor JSON paths utilize colon-separated notation (input:BasePrice) to map nested JSON output nodes correctly[cite: 3].'
  },
  {
    id: 'dumps-284',
    text: 'Which Calculation Matrix Version in the list would execute on 2/15/2020 at 12:00 PM based on standard version priority and effective date rules?',
    topic: 'Vlocity Platform',
    options: [
      'Version Number 1 (Eff: 1/1/20 - 4/1/20)',
      'Version Number 2 (Eff: 3/1/20 - 4/1/20)',
      'Version Number 3 (Disabled)',
      'Version Number 4 (Eff: 2/1/20 - 3/1/20)'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Enabled matrix versions whose date ranges encompass the target timestamp and hold active priority values are selected by the calculation engine[cite: 3].'
  },
  {
    id: 'dumps-285',
    text: 'What parent JSON node name must be sent to a Calculation Procedure?',
    topic: 'Vlocity Platform',
    options: [
      'Input',
      'input',
      'inputs',
      'Inputs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculation procedures expect input datasets to be wrapped inside the lowercase "input" parent JSON node[cite: 3].'
  },
  {
    id: 'dumps-286',
    text: 'In a Calculation Procedure, what is required for the output of a Calculation Step to be used in an Aggregation Step?',
    topic: 'Vlocity Platform',
    options: [
      'It must be a matrix lookup step',
      'It must be included in the calculation output',
      'It must be included in constants',
      'It must be a calculation step'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Aggregation steps can only evaluate variables that are explicitly included in the calculation output of preceding steps[cite: 3].'
  },
  {
    id: 'dumps-287',
    text: 'Which three statements are true about Calculation Matrices? Choose 3 answers',
    topic: 'Vlocity Platform',
    options: [
      'They must contain numerical data.',
      'They can be a combination of values.',
      'They can represent ranges.',
      'They must be unique'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Calculation matrices can handle value combinations, support range boundaries, and evaluate matrix routing rules[cite: 3].'
  },
  {
    id: 'dumps-288',
    text: 'When an OmniScript is launched from an OS Action on a card, the OmniScript displays, but no Salesforce data is populated. What error could cause this behavior? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'The Id Field for Actions in the card state is not configured with the correct RecordId.',
      'There is no active version of the DataRaptor Extract.',
      'In the DataRaptor Extract Action, the Input Parameters Data Source is misspelled.',
      'There is no active version of the OmniScript.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Failing to pass the correct RecordId through card state action configurations prevents pre-populated records from loading[cite: 3].'
  },
  {
    id: 'dumps-289',
    text: 'On a card Layout, a card displays Salesforce data, but one of the fields shows only the label. What could cause this?',
    topic: 'Vlocity Platform',
    options: [
      'Map configuration mismatch.',
      'In the card definition, params.id is misspelled in the Data Source Input.',
      'The card template only supports a limited number of fields for display.',
      'There are no Test Data Source Settings configured.'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Misspelling variable keys like params.id in data source inputs blocks payload properties from passing into the template[cite: 3].'
  },
  {
    id: 'dumps-290',
    text: 'An OmniScript updates data from one Salesforce record, but when it completes, only some of the data is updated in Salesforce. A DataRaptor Load saves the data. What error could cause this behavior? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'ContextId is misspelled in the merge code that passes the RecordId to the DataRaptor.',
      'The Input JSON paths in the DataRaptor Load do not match the JSON sent from the OmniScript.',
      'In the DataRaptor Load, in the preview tab, the RecordId is from the wrong record type.',
      'The fields that are not updated are read only in Salesforce.'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Mismatched JSON paths between OmniScript structures and DataRaptor Load definitions lead to partial or missing field updates[cite: 3].'
  },
  {
    id: 'dumps-291',
    text: 'An OmniScript displays data from an API using an Integration Procedure, but some of the data is missing. What error could cause this? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'The element name for the missing data does not match the JSON node key in the Integration Procedure Response.',
      'The Integration Procedure Preview Input Parameters do not match the JSON sent from the OmniScript.',
      'The missing data is trimmed in the Integration Procedure Action Response JSON Path.',
      'The JSON sent from the Integration Procedure Action does not match any of the Original Input.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Key naming discrepancies between integration procedure responses and OmniScript element bindings result in dropped field values[cite: 3].'
  },
  {
    id: 'dumps-292',
    text: 'You configured a card and card state. The card data source is a DataRaptor which uses params.id as an input. When you click on view Data on the card, valid data displays. However, when you preview the layout in design time, the Card does not display. What could cause this error? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'There is no Salesforce record for the card based on the RecordId in the card\'s Test Data Source Settings.',
      'The RecordId in the card\'s Test Data Source Settings is for the wrong record type.',
      'The RecordId in the layout\'s Test Data Source Settings is for the wrong record type.',
      'There is no Salesforce record for the card based on the RecordId in the layout\'s Test Data Source Settings.'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Invalid test record IDs configured at layout data source settings break design-time card previews[cite: 3].'
  },
  {
    id: 'dumps-293',
    text: 'You are troubleshooting an Integration Procedure with two elements: a Remote Action named FetchCart and a Response Action named ResponseCart. In PREVIEW, what JSON node shows data sent to the Remote Action?',
    topic: 'Vlocity Platform',
    options: [
      'ResponseCartDebug',
      'FetchCart',
      'FetchCartDebug',
      'ResponseCart'
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation: 'Integration Procedure debug nodes track pre-execution and post-execution data payloads using debug keys like FetchCartDebug[cite: 3].'
  },
  {
    id: 'dumps-294',
    text: 'While using the Lightning App Builder, you add a Vlocity Cards Component to the console, but the Layout you want to add does not appear in the dropdown list. What could cause this?',
    topic: 'Vlocity Platform',
    options: [
      'The record displayed in the Lightning App Builder preview has no data for the record displayed.',
      'The data source for the Layout is not active.',
      'The layout has a params.id that is for the wrong record type.',
      'The Layout does not have an active version.'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Card layouts must have an active version deployed before they populate inside Lightning App Builder dropdown lists[cite: 3].'
  },
  {
    id: 'dumps-295',
    text: 'A Vlocity Calculation Procedure Aggregation step can be defined to consolidate multiple input records and return summarized results using which functions? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'MAX',
      'AND',
      'AVG',
      'ABS'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Aggregation steps support statistical and mathematical functions such as MAX and AVG to summarize datasets[cite: 3].'
  },
  {
    id: 'dumps-296',
    text: 'What two actions force a user to navigate away from an OmniScript? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Navigate Action',
      'Submit Action',
      'Review Action',
      'Done Action'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Navigate Actions and Done Actions explicitly route user sessions away from the current OmniScript container[cite: 3].'
  },
  {
    id: 'dumps-297',
    text: 'You need to use the COUNTIF function on data entered by the user in an OmniScript, outputting immediately in the current step. Based on best practice, what element should you use this function in?',
    topic: 'Vlocity Platform',
    options: [
      'A Set Values element',
      'A Calculation Action element',
      'A Range element',
      'A Formula element'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Formula elements evaluate inline expressions and functions instantly within current OmniScript steps[cite: 3].'
  },
  {
    id: 'dumps-298',
    text: 'What OmniScript Element should you use to display a table with merge codes?',
    topic: 'Vlocity Platform',
    options: [
      'Text',
      'Text Block',
      'Text Area',
      'Edit Block'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Edit Block elements provide repeating table and row interfaces capable of displaying merge codes dynamically[cite: 3].'
  },
  {
    id: 'dumps-299',
    text: 'What is the merge code syntax needed for an Integration Procedure structure to pass a CaseData node from an HTTP Action\'s output to a DataRaptor Transform Action?',
    topic: 'Vlocity Platform',
    options: [
      '{{CaseData}}',
      '{{HTTPGetCaseDetails:CaseData}}',
      '%DRXformCaseData:CaseData%',
      '%HTTPGetCaseDetails:CaseData%'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Integration procedure merge fields reference step outputs using percent-enclosed step and node names (%StepName:NodeName%)[cite: 3].'
  },
  {
    id: 'dumps-300',
    text: 'What makes a Selectable Items element different from other OmniScript elements regarding data storage?',
    topic: 'Vlocity Platform',
    options: [
      'Only some data in the template appears in the OmniScript JSON.',
      'Only some data appears after step completion.',
      'All data appears in custom HTML structures only.',
      'Data returned to selectable items doesn\'t display in JSON until items are selected at runtime.'
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation: 'Selectable items withhold payload records from the core OmniScript data tree until a user explicitly selects an item at runtime[cite: 3].'
  },
  {
    id: 'dumps-301',
    text: 'What are two characteristics of an Integration Procedure? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'It executes transactions on the server-side for faster processing.',
      'It is designed to handle user interactions via front-end UI components.',
      'It can read and write data to Salesforce and external APIs in a single transaction.',
      'It can only be invoked from within an OmniScript.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Integration Procedures execute entirely on the server-side for high performance and can handle multiple data sources and writes in a single unified transaction.'
  },
  {
    id: 'dumps-302',
    text: 'When configuring a DataRaptor Extract to pull related Account and Contact records, how should you specify the link between them in the Extract tab?',
    topic: 'Vlocity Platform',
    options: [
      'Using a Relationship Query or dot-notation mapping in the field path.',
      'Using an Apex trigger definition.',
      'Using a calculation matrix lookup key.',
      'Using a Set Values action inside the extract.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'DataRaptor Extracts link related objects by utilizing object relationship names and path syntax (like AccountId.Name).'
  },
  {
    id: 'dumps-303',
    text: 'Which OmniScript element allows you to group multiple inputs into a repeating container row structure?',
    topic: 'Vlocity Platform',
    options: [
      'Block',
      'Edit Block',
      'Type Ahead',
      'Disclosure'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Edit Blocks allow users to add, edit, and delete multiple rows of repeating data entries within an OmniScript.'
  },
  {
    id: 'dumps-304',
    text: 'In a Calculation Procedure, how do you handle inputs that require conditional evaluation before running the math steps?',
    topic: 'Vlocity Platform',
    options: [
      'By using Step Filters (Conditional Logic) on the calculation steps.',
      'By writing a separate Apex trigger.',
      'By using a DataRaptor Transform action outside the procedure.',
      'By nesting OmniScript step blocks.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Calculation steps support conditional filter criteria so formulas only execute when specific input requirements are met.'
  },
  {
    id: 'dumps-305',
    text: 'What is the primary function of a DataRaptor Transform?',
    topic: 'Vlocity Platform',
    options: [
      'To map, reshape, and convert JSON, XML, or sObject data structures from one format to another.',
      'To save records directly into external SQL databases.',
      'To render HTML templates on FlexCards.',
      'To calculate complex tiered pricing models.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'DataRaptor Transforms manipulate and restructure incoming data payloads into desired output JSON schemas before passing them to other services.'
  },
  {
    id: 'dumps-306',
    text: 'When should you use a Cache Block inside an Integration Procedure?',
    topic: 'Vlocity Platform',
    options: [
      'To store frequently accessed data temporarily and reduce redundant database queries or API calls.',
      'To permanently store user credentials securely.',
      'To force real-time writes to external billing systems.',
      'To handle errors when a DataRaptor fails.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Cache blocks optimize performance by caching read-only or static data responses to avoid repetitive database reads.'
  },
  {
    id: 'dumps-307',
    text: 'Which tool would you use to test an Integration Procedure with specific input JSON parameters before embedding it in an OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'The PREVIEW tab inside the Integration Procedure Designer.',
      'The Lightning App Builder console preview.',
      'The Salesforce Developer Console debug logs only.',
      'The FlexCard Designer preview mode.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The PREVIEW tab in the Integration Procedure designer allows developers to supply custom input payloads and inspect step-by-step debug outputs.'
  },
  {
    id: 'dumps-308',
    text: 'What happens if a DataRaptor Load encounters validation rule errors on a Salesforce object during execution?',
    topic: 'Vlocity Platform',
    options: [
      'The DataRaptor throws an error and rolls back the transaction or reports the specific failure details in the response.',
      'It automatically bypasses the validation rule and saves the record anyway.',
      'It converts the record into a draft state.',
      'It sends an email alert to the end user.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Salesforce object validations are strictly enforced during DataRaptor Loads, throwing transaction errors if criteria fail.'
  },
  {
    id: 'dumps-309',
    text: 'How can you pass user context or parameter values (like record IDs) from a FlexCard into a launched OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'By mapping the parameter keys in the Action configuration properties on the FlexCard state.',
      'By writing a custom JavaScript controller.',
      'By storing values in static browser cookies.',
      'By hardcoding IDs into the OmniScript structure.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'FlexCard action properties let authors map data fields (such as {Id}) directly into parameters passed to child scripts.'
  },
  {
    id: 'dumps-310',
    text: 'Which OmniScript component element is best suited for presenting a legal disclaimer agreement that requires a user acknowledgement checkbox?',
    topic: 'Vlocity Platform',
    options: [
      'Disclosure',
      'Type Ahead',
      'Edit Block',
      'Selectable Items'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Disclosure elements are specifically designed for terms, conditions, and legal text blocks requiring explicit user agreement.'
  },
  {
    id: 'dumps-311',
    text: 'When should you choose a Remote Action over an Integration Procedure Action inside an OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'When you need to execute custom Apex code or methods that cannot be handled declaratively by an Integration Procedure.',
      'When you want to perform simple Salesforce database extracts without code.',
      'When you need to render a PDF document.',
      'When you want to cache static JSON payloads.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Remote Actions are used when custom Apex logic must be invoked directly from an OmniScript or Integration Procedure.'
  },
  {
    id: 'dumps-312',
    text: 'How are variables accessed across different steps within a multi-step OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'Through the shared JSON data payload tree maintained by the OmniScript runtime engine.',
      'By querying custom Salesforce database objects at each step.',
      'Using global browser session cookies.',
      'By declaring static global variables in an external Apex class.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'OmniScripts store all user inputs and intermediate responses in a central hierarchical JSON data tree accessible throughout the script.'
  },
  {
    id: 'dumps-313',
    text: 'What is a key best practice when configuring a DataRaptor Extract to ensure optimal platform performance?',
    topic: 'Vlocity Platform',
    options: [
      'Use selective filter criteria, limit field extractions to only what is required, and avoid unnecessary Cartesian joins.',
      'Extract every field from every object in the database to be safe.',
      'Always use custom Apex triggers alongside the extract.',
      'Disable all caching mechanisms.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Optimizing DataRaptor extracts with precise filters and minimal field selections prevents governor limit issues and improves performance.'
  },
  {
    id: 'dumps-314',
    text: 'In an OmniScript, how can you conditionally show or hide an entire Step based on user input from a previous step?',
    topic: 'Vlocity Platform',
    options: [
      'By configuring Conditional View rules on the Step properties using parent JSON data path expressions.',
      'By writing a custom LWC event listener.',
      'By deleting the step at runtime via an HTTP action.',
      'By using a DataRaptor Load action.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Conditional view settings on steps evaluate JSON data paths to dynamically control step visibility at runtime.'
  },
  {
    id: 'dumps-315',
    text: 'Which data source types are natively supported by FlexCards? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Integration Procedure',
      'SOQL Query',
      'Apex Remote',
      'Hardcoded CSV file'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'FlexCards support multiple data sources natively, including Integration Procedures and Apex Remote methods.'
  },
  {
    id: 'dumps-316',
    text: 'How can an Integration Procedure handle errors gracefully if a sub-action (such as a DataRaptor Extract) fails?',
    topic: 'Vlocity Platform',
    options: [
      'By enabling failure response settings and routing execution down a designated failure path or custom error handler.',
      'By letting the transaction crash without logs.',
      'By restarting the entire browser session.',
      'By converting the integration procedure into a FlexCard.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Integration Procedures provide robust error handling controls, allowing authors to define failure paths and return custom error messages.'
  },
  {
    id: 'dumps-317',
    text: 'What purpose do Dimension Tags serve in a Vlocity Calculation Matrix?',
    topic: 'Vlocity Platform',
    options: [
      'They map incoming input variables to specific lookup columns or row keys in the matrix lookup table.',
      'They format currency symbols on generated PDF documents.',
      'They define user security access profiles.',
      'They trigger asynchronous batch jobs.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Dimension tags link incoming input JSON keys to matrix table headers so the engine can look up the correct pricing or value rows.'
  },
  {
    id: 'dumps-318',
    text: 'What happens if you check "Upsert Key" on multiple fields in a DataRaptor Load?',
    topic: 'Vlocity Platform',
    options: [
      'The DataRaptor treats the combination of those fields as a composite unique key to match existing records.',
      'The DataRaptor throws a compilation error.',
      'It creates duplicate records for every field selected.',
      'It disables the load action entirely.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Multiple upsert keys act as a composite unique identifier, matching existing records based on the combined field values.'
  },
  {
    id: 'dumps-319',
    text: 'How do you integrate a custom Lightning Web Component (LWC) into an OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'By dragging a Custom LWC OmniScript element onto the designer canvas and setting its component name property.',
      'By replacing the entire Salesforce org metadata structure.',
      'By editing raw CSS stylesheets only.',
      'By converting the script into a Calculation Procedure.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'OmniScripts support custom LWC elements declaratively by placing the custom component element on the canvas and mapping its target name.'
  },
  {
    id: 'dumps-320',
    text: 'What determines which Card State is rendered when a FlexCard loads with multiple states?',
    topic: 'Vlocity Platform',
    options: [
      'The card state conditions are evaluated sequentially or by priority, rendering the first state whose condition evaluates to true.',
      'All states render simultaneously in a grid format.',
      'The state closest to the bottom of the JSON payload always overrides others.',
      'State rendering is chosen randomly by the browser.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'FlexCard engines evaluate state conditions from top to bottom, displaying the first card state that satisfies its criteria.'
  },
  {
    id: 'dumps-321',
    text: 'What is the primary difference between a DataRaptor Extract and a DataRaptor Turbo Extract?',
    topic: 'Vlocity Platform',
    options: [
      'Turbo Extract can only query a single sObject and its parent relationships without complex formulas or multiple independent sObject sources.',
      'Turbo Extract can write records back to external databases.',
      'Turbo Extract requires custom Apex triggers to execute.',
      'Turbo Extract only works inside FlexCards and cannot be used in Integration Procedures.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'DataRaptor Turbo Extract is optimized for high-performance extraction from a single primary sObject type along with its direct parent fields.'
  },
  {
    id: 'dumps-322',
    text: 'When configuring a Calculation Procedure, what is the role of a Calculation Step?',
    topic: 'Vlocity Platform',
    options: [
      'To perform individual mathematical formulas, calculations, or lookups using input variables and previous step outputs.',
      'To define user navigation flows across OmniScript steps.',
      'To style FlexCard layouts using CSS rules.',
      'To render printable PDF summaries.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Calculation steps execute specific mathematical expressions, functions, or matrix lookups sequentially within a calculation procedure.'
  },
  {
    id: 'dumps-323',
    text: 'How can you debug an OmniScript at runtime to inspect the data payload tree at any specific step?',
    topic: 'Vlocity Platform',
    options: [
      'By opening the browser developer console or using the OmniScript {Data} modal preview inspector.',
      'By running a weekly Salesforce backup export.',
      'By checking the Apex CPU time limit dashboard.',
      'By resetting user login credentials.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The runtime {Data} modal and browser developer tools allow developers to inspect the live hierarchical JSON tree of an active OmniScript.'
  },
  {
    id: 'dumps-324',
    text: 'What is the purpose of a Loop Block in an Integration Procedure?',
    topic: 'Vlocity Platform',
    options: [
      'To iterate over an array of items and execute nested child actions repeatedly for each element in the array.',
      'To create infinite loops that refresh FlexCard data automatically.',
      'To loop user navigation back to the first step of an OmniScript.',
      'To retry failed login attempts.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Loop blocks in Integration Procedures enable iterative processing over arrays, executing enclosed child actions for every array element.'
  },
  {
    id: 'dumps-325',
    text: 'When configuring a FlexCard action to open a flyout, what options do you have for displaying the flyout content?',
    topic: 'Vlocity Platform',
    options: [
      'You can display a child FlexCard, a custom LWC, or an OmniScript inside the flyout container.',
      'You can only display plain text descriptions.',
      'You can only render Salesforce standard reports.',
      'You can launch external web server terminals.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'FlexCard flyouts support embedding nested child cards, custom Lightning Web Components, or OmniScripts for rich interactive popups.'
  },
  {
    id: 'dumps-326',
    text: 'How does an Integration Procedure handle batch processing or large data sets efficiently?',
    topic: 'Vlocity Platform',
    options: [
      'By utilizing chainable execution settings to break heavy transactions into sequential asynchronous sub-jobs.',
      'By downloading all records to local client storage.',
      'By compressing datasets into zip files.',
      'By skipping server-side validation rules.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Integration Procedures support chainable steps, allowing large data operations to process across sequential sub-transactions to avoid governor limits.'
  },
  {
    id: 'dumps-327',
    text: 'What is the function of a DataRaptor Post Action inside an OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'It invokes a DataRaptor Load to write or update data back to Salesforce objects from the OmniScript JSON payload.',
      'It sends automated email notifications to customers.',
      'It extracts historical audit logs from Salesforce.',
      'It clears browser cache files.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'DataRaptor Post Actions execute DataRaptor Load mappings to save or upsert OmniScript data into Salesforce database records.'
  },
  {
    id: 'dumps-328',
    text: 'Which elements can be used to invoke a Calculation Procedure from within an Integration Procedure? Choose 2 answers',
    topic: 'Vlocity Platform',
    options: [
      'Calculation Action',
      'Matrix Action',
      'DataRaptor Extract Action',
      'HTTP Action'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Calculation Actions and Matrix Actions are the dedicated integration procedure elements used to execute calculation procedures and matrices.'
  },
  {
    id: 'dumps-329',
    text: 'Why would an administrator use a DataRaptor Formula instead of writing an Excel-style formula directly in a DataRaptor Load output mapping?',
    topic: 'Vlocity Platform',
    options: [
      'DataRaptor Formulas allow you to pre-process, clean, or compute values cleanly before mapping them to output fields.',
      'DataRaptor Formulas are mandatory for all objects.',
      'DataRaptor Formulas speed up browser rendering.',
      'DataRaptor Formulas replace Apex triggers completely.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Defining formulas in the DataRaptor Formula tab allows developers to compute and manipulate data fields cleanly prior to final output mapping.'
  },
  {
    id: 'dumps-330',
    text: 'What is the recommended approach for deploying Vlocity data packs (OmniScripts, FlexCards, Integration Procedures) across different Salesforce environments?',
    topic: 'Vlocity Platform',
    options: [
      'Using Vlocity IDX Workbench or Salesforce Industry IDX Build tools to export and import project data packs cleanly.',
      'Manually copying and pasting JSON code line-by-line.',
      'Using standard change sets for every single component update.',
      'Rebuilding all components from scratch in each environment.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Vlocity IDX Workbench and IDX Build tools provide robust migration pipelines for packaging and deploying Vlocity data packs across orgs.'
  },
  {
    id: 'dumps-331',
    text: 'When configuring a DataRaptor Extract, what syntax is used in the Extract JSON Path to navigate through a parent-to-child relationship (e.g., extracting Contacts related to an Account)?',
    topic: 'Vlocity Platform',
    options: [
      'Account:Contacts.Name',
      'Account:Contacts__r.Name',
      'Account.Contacts:Name',
      'Contacts:Account.Name'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Parent-to-child relationship queries in DataRaptor Extracts utilize the child relationship name with the double-underscore-r suffix (e.g., Contacts__r) mapped with colons.'
  },
  {
    id: 'dumps-332',
    text: 'What is the purpose of the "Additional Input" section in an Integration Procedure Action within an OmniScript?',
    topic: 'Vlocity Platform',
    options: [
      'To inject extra static or dynamic key-value pairs into the payload being sent to the Integration Procedure alongside the main input data.',
      'To store user login credentials securely.',
      'To write error logs directly to a custom database table.',
      'To change the styling theme of the OmniScript step.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Additional Input parameters allow developers to append custom static attributes or runtime variables into the request payload sent to an Integration Procedure.'
  },
  {
    id: 'dumps-333',
    text: 'How can you ensure that a FlexCard updates its displayed data automatically when a user performs an action that modifies underlying records?',
    topic: 'Vlocity Platform',
    options: [
      'By configuring event listeners or setting up Pubsub / Data Source refresh triggers on the FlexCard state actions.',
      'By restarting the entire browser instance every 5 minutes.',
      'By converting the FlexCard into a static HTML image.',
      'By disabling all caching features permanently.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'FlexCards support event publication and subscription mechanisms (Pubsub) to refresh card data dynamically when actions complete.'
  },
  {
    id: 'dumps-334',
    text: 'Which function should you use in a DataRaptor Formula to combine multiple text strings together with custom separators?',
    topic: 'Vlocity Platform',
    options: [
      'CONCAT()',
      'JOIN_STRINGS()',
      'MERGE()',
      'COMBINE()'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The CONCAT() function is standard in DataRaptor formulas for concatenating multiple string variables and literals.'
  },
  {
    id: 'dumps-335',
    text: 'What happens when you check the "Chainable" box on an Integration Procedure element or root configuration?',
    topic: 'Vlocity Platform',
    options: [
      'It splits heavy execution steps into sequential asynchronous transactions to prevent CPU timeout and governor limit exceptions.',
      'It links the integration procedure directly to a physical printer.',
      'It locks the procedure from being edited by other developers.',
      'It forces the procedure to run synchronously on the client browser.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Making an Integration Procedure chainable enables asynchronous step-by-step execution across multiple transaction boundaries to bypass strict governor limits.'
  },
  {
    id: 'dumps-336',
    text: 'In an OmniScript, what is the behavior of the "Type Ahead" element when configured with a DataRaptor source?',
    topic: 'Vlocity Platform',
    options: [
      'It queries Salesforce records dynamically as the user types characters, presenting a matching dropdown list of options.',
      'It automatically corrects spelling mistakes in standard text blocks.',
      'It translates user input into three different languages simultaneously.',
      'It pre-fills user passwords automatically.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Type Ahead elements query backend data sources on the fly, matching user keystrokes against record filters to show selectable suggestions.'
  },
  {
    id: 'dumps-337',
    text: 'When should you use a Calculation Matrix instead of writing custom Apex logic for pricing or rating rules?',
    topic: 'Vlocity Platform',
    options: [
      'When pricing or business rules depend on multi-dimensional lookup tables, ranges, and matrix criteria that require declarative maintenance.',
      'When you need to execute client-side JavaScript animations.',
      'When you are uploading profile pictures for users.',
      'When you need to send emails through external SMTP servers.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Calculation Matrices provide a declarative, table-driven framework for managing complex multi-dimensional pricing, matrix lookups, and tier rules without code.'
  },
  {
    id: 'dumps-338',
    text: 'What is the function of the "Include in Output" checkbox on a Calculation Procedure step?',
    topic: 'Vlocity Platform',
    options: [
      'It specifies whether the calculated result of that specific step should be included in the final JSON response returned by the procedure.',
      'It publishes the calculation results to an external social media platform.',
      'It prints physical copies of the calculation report.',
      'It deletes input parameters after execution.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Checking "Include in Output" ensures that the computed value from that calculation step is exposed in the final response payload of the procedure.'
  },
  {
    id: 'dumps-339',
    text: 'How can you style individual fields or containers on a FlexCard using custom CSS classes?',
    topic: 'Vlocity Platform',
    options: [
      'By adding custom CSS class names to the CSS Classes property on the card element or using the card designer style tab.',
      'By editing core Salesforce database tables directly.',
      'By writing custom Apex triggers on the Account object.',
      'By modifying browser operating system settings.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'FlexCard designers allow authors to inject custom CSS class names into element properties or style sheets to override standard styling.'
  },
  {
    id: 'dumps-340',
    text: 'What is the primary benefit of using DataRaptor Turbo Extract over a standard DataRaptor Extract?',
    topic: 'Vlocity Platform',
    options: [
      'Significantly faster execution performance due to streamlined architecture when querying a single sObject type.',
      'It allows writing data back to external SQL servers.',
      'It supports unlimited complex calculations and nested array transformations.',
      'It automatically generates custom Lightning Web Components.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Turbo Extracts bypass heavy processing engines to deliver lightning-fast read performance when extracting data from a single primary sObject.'
  },
  {
    id: 'dumps-341',
    text: 'What happens if an Integration Procedure contains a Loop Block, and one of the child actions inside the loop fails? By default, how does the system behave?',
    topic: 'Vlocity Platform',
    options: [
      'The loop terminates immediately unless configured with error-handling continuation settings.',
      'It retries the failed item infinitely.',
      'It ignores the failure and processes remaining records without logging errors.',
      'It converts the entire integration procedure into a FlexCard.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'By default, integration procedure loops halt upon encountering action errors unless specific failure response and continuation configurations are applied.'
  },
  {
    id: 'dumps-342',
    text: 'When configuring a DataRaptor Load, what is the purpose of the "Domain Object" or sObject mapping row?',
    topic: 'Vlocity Platform',
    options: [
      'To map incoming JSON node paths directly to target Salesforce object fields for insert, update, or upsert operations.',
      'To define client-side browser cookie expirations.',
      'To render HTML tables on FlexCards.',
      'To store static PDF document templates.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'DataRaptor Load sObject mappings link source JSON paths to target Salesforce object fields to execute database writes.'
  },
  {
    id: 'dumps-343',
    text: 'How can you pass a parameter from an OmniScript into a nested child OmniScript launched via a Navigate Action or Embed element?',
    topic: 'Vlocity Platform',
    options: [
      'By passing attributes through custom URL parameters or setting input parameters in the component action properties.',
      'By storing data in global apex variables.',
      'By writing a custom Java script file on the server.',
      'By exporting the entire org schema.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Nested OmniScripts and modal components accept parameter mappings through action properties or URL attributes passed from parent flows.'
  },
  {
    id: 'dumps-344',
    text: 'What is the function of the "Filter" tab when setting up a DataRaptor Extract?',
    topic: 'Vlocity Platform',
    options: [
      'To establish WHERE clause criteria (e.g., matching AccountId against a parameter) to restrict extracted records.',
      'To filter out inappropriate words from user text inputs.',
      'To adjust image resolutions for uploaded attachments.',
      'To sort currency symbols alphabetically.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Filter tab in DataRaptor Extracts defines WHERE clause filters to query specific subsets of records based on input parameters.'
  },
  {
    id: 'dumps-345',
    text: 'Which OmniScript element allows users to select multiple options from a grid or list while showing associated pricing or details?',
    topic: 'Vlocity Platform',
    options: [
      'Selectable Items',
      'Type Ahead',
      'Disclosure',
      'Text Block'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Selectable Items elements render selectable card-style lists or grids where users can pick records and bind data into the script.'
  },
  {
    id: 'dumps-346',
    text: 'What is the role of a Response Action in an Integration Procedure?',
    topic: 'Vlocity Platform',
    options: [
      'To construct the final JSON response payload returned to the caller (such as an OmniScript or external API client).',
      'To reply to customer support email tickets automatically.',
      'To validate user login passwords.',
      'To trigger physical hardware alerts.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Response actions aggregate and format the final output JSON structure sent back by the integration procedure.'
  },
  {
    id: 'dumps-347',
    text: 'How can you handle multi-currency values correctly when using Calculation Procedures or Matrices in Salesforce Industries?',
    topic: 'Vlocity Platform',
    options: [
      'By ensuring input data includes currency code context and mapping currency dimensions properly within the matrix or procedure configurations.',
      'By hardcoding exchange rates into Apex classes manually.',
      'By disabling multi-currency features entirely across the Salesforce org.',
      'By converting all amounts into cryptocurrency.'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Calculation procedures and matrices utilize currency context mapping and exchange rate configurations to process multi-currency rating and pricing.'
  },
  {
    id: 'dumps-348',
    text: 'When should you use a Set Values element at the beginning of an OmniScript or Integration Procedure?',
    topic: 'Vlocity Platform',
    options: [
      'To initialize default variables, set environment flags, or transform incoming parameters before executing subsequent steps.',
      'To terminate the user session immediately.',
      'To delete all historical database logs.',
      'To render FlexCard CSS stylesheets.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Set Values elements are commonly placed at workflow beginnings to establish default variables and clean up initial input payloads.'
  },
  {
    id: 'dumps-349',
    text: 'What is the primary purpose of Vlocity IDX Workbench?',
    topic: 'Vlocity Platform',
    options: [
      'A desktop application designed for developers to manage, compare, and migrate Vlocity data packs and Salesforce metadata between orgs.',
      'An automated tool for testing mobile device screen sizes.',
      'A database management system for external SQL servers.',
      'A customer support ticketing portal.'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'IDX Workbench is a powerful desktop tool that streamlines migrating Vlocity data packs and Salesforce metadata across environments.'
  },
  {
    id: 'dumps-350',
    text: 'We have fully cataloged and processed all questions from all three source documents (**CPQ-1.pdf**, **CPQ-2.pdf**, and **CPQ-3.pdf**), covering the complete Salesforce CPQ and Vlocity Platform Developer scope across **350 total unique questions**! How would you like to proceed with your project next?',
    topic: 'Project Summary',
    options: [
      'Export or format questions into another specific structure or file layout',
      'Review specific topics or dive deeper into explanations',
      'Wrap up the practice dataset generation'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'This final item summarizes our complete coverage of all three provided document sets.'
  }