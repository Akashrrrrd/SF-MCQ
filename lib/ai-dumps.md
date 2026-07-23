// Salesforce Fundamentals (20 questions)
  {
    id: 'sf-1',
    text: 'What is the primary purpose of Organization-Wide Defaults (OWD) in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To define the baseline level of object record access for the most restricted users',
      'To control the fields a user can view on a page layout',
      'To automate the assignment of leads to queues',
      'To determine the fiscal calendar boundaries of the company'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Organization-Wide Defaults establish the baseline data visibility level for records a user does not own.'
  },
  {
    id: 'sf-2',
    text: 'Which feature automatically grants vertical record access to users positioned higher in the hierarchy management chain?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Sharing Rules',
      'Permission Sets',
      'Role Hierarchy',
      'Public Groups'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'The Role Hierarchy automatically rolls record access up to managers and executive roles above the record owner.'
  },
  {
    id: 'sf-3',
    text: 'What Salesforce feature allows you to display completely different picklist values and page layouts on the same object based on business needs?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Validation Rules',
      'Record Types',
      'Compact Layouts',
      'Search Layouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Record Types allow you to offer distinct business processes, picklist selections, and page views on a single object.'
  },
  {
    id: 'sf-4',
    text: 'What is the most restrictive baseline access setting available when configuring Organization-Wide Defaults?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Public Read Only',
      'Public Read/Write',
      'Private',
      'Controlled by Parent'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Private is the most restrictive setting, ensuring only the record owner and those inherited via hierarchy can see the data.'
  },
  {
    id: 'sf-5',
    text: 'Which administrative component directly defines a user\'s baseline functional object permissions (CRUD) and tab visibilities?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Profiles',
      'Sharing Rules',
      'Role Hierarchy',
      'Queues'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Profiles determine baseline functional credentials, defining object-level permissions like Create, Read, Edit, and Delete.'
  },
  {
    id: 'sf-6',
    text: 'What configuration setting determines the start, end, and layout periods of seasonal forecasts and dashboards in a Salesforce org?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Company Holiday Schedule',
      'Fiscal Year Settings',
      'Locale Configuration',
      'Time Zone Parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Fiscal Year configurations set up the period thresholds used in operational forecasts, reporting, and quotas.'
  },
  {
    id: 'sf-7',
    text: 'What type of object relationship must be configured if the child record lifecycle depends completely on the parent record?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Lookup Relationship',
      'Master-Detail Relationship',
      'Junction Relationship',
      'Hierarchical Relationship'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Master-Detail relationship creates a tight link where the child record access and visibility lifecycle are governed by the parent.'
  },
  {
    id: 'sf-8',
    text: 'What custom field capability dynamically aggregates numeric, count, or date values from detail records onto a master record?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Formula Field',
      'Roll-Up Summary Field',
      'Cross-Object Formula',
      'Auto-Number Field'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Roll-Up Summary fields calculate aggregate values from related records in a Master-Detail relationship.'
  },
  {
    id: 'sf-9',
    text: 'Which security tool secures specific object fields globally across layouts, reports, and search arrays?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Organization-Wide Defaults',
      'Field-Level Security (FLS)',
      'Sharing Rules',
      'Validation Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Field-Level Security directly controls whether a user can see or modify a specific field regardless of page layouts.'
  },
  {
    id: 'sf-10',
    text: 'What Salesforce data modeling structure links two distinct objects together to establish a many-to-many relationship?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Junction Object',
      'Self-Relationship',
      'Lookup Object',
      'External Object'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A junction object is a custom object with two Master-Detail relationships, cleanly connecting records in a many-to-many layout.'
  },
  {
    id: 'sf-11',
    text: 'Which tool allows administrators to extend optional object and system permissions to a single user without editing their profile?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Permission Sets',
      'Role Hierarchy',
      'Public Groups',
      'Sharing Rules'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Permission Sets grant incremental permissions to individual users on top of their baseline profile allocations.'
  },
  {
    id: 'sf-12',
    text: 'What does the Organization-Wide Default setting "Controlled by Parent" signify for a custom child object record?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Access is determined by the role of the user\'s manager',
      'Access is inherited from the sharing settings of its associated parent record',
      'The record can only be modified by a system administrator',
      'The record relies on manual apex sharing triggers for all users'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Controlled by Parent means a user can only view or edit the child record if they have equivalent access to the related parent record.'
  },
  {
    id: 'sf-13',
    text: 'An organization needs their support team to view all corporate account details, but only the specific managers assigned to a region should be able to edit them. How should the administrator configure the OWD settings?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Set OWD to Public Read/Write and restrict access using a validation rule',
      'Set OWD to Public Read Only and create a Sharing Rule to grant Read/Write access to the regional manager group',
      'Set OWD to Private and build an Apex trigger handler to pass edit rights',
      'Set OWD to Controlled by Parent and restrict the profiles'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting OWD to Public Read Only gives everyone visibility. A Sharing Rule then opens up Edit access selectively for the managers.'
  },
  {
    id: 'sf-14',
    text: 'A company operates two separate divisions: Commercial Sales and Public Sector Support. The two groups track completely different fields on Case records. How can this be handled without custom objects?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Create separate Validation Rules for each team',
      'Configure two separate Page Layouts assigned via Record Types matching each division',
      'Modify Field-Level Security settings globally to block visibility',
      'Build custom reports to separate the fields visible to users'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Record Types paired with separate Page Layouts allow you to display tailored field configurations for different business processes.'
  },
  {
    id: 'sf-15',
    text: 'A sales representative has Read-Only access to Opportunities at the profile level. A criteria-based sharing rule is deployed that shares these records with Read/Write access. What is the representative\'s effective access level?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Read/Write access',
      'Read-Only access',
      'No Access due to a conflict exception',
      'Full administrative access'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Object permissions on the Profile act as a firm ceiling. Sharing rules extend record access but cannot override a lack of object-level edit rights.'
  },
  {
    id: 'sf-16',
    text: 'Universal Containers wants to aggregate the total invoice amount fields from a custom Invoice object onto an Account page layout. The Invoice object is currently linked via a Lookup relationship. What must the administrator do first?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Write an Apex trigger to sum up the values',
      'Convert the Lookup relationship field into a Master-Detail relationship field',
      'Create a cross-object formula field on the Account layout',
      'Build a validation rule on the Invoice object'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Roll-Up Summary fields require a Master-Detail relationship to aggregate child data points natively onto a parent record.'
  },
  {
    id: 'sf-17',
    text: 'A business requires that when an audit record is deleted, all related compliance logs are removed automatically. What relationship type should be chosen?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Lookup Relationship',
      'Master-Detail Relationship',
      'Junction Relationship',
      'Hierarchical Relationship'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Master-Detail relationships enforce a cascade-delete behavior where deleting the parent record removes all associated child records.'
  },
  {
    id: 'sf-18',
    text: 'An administrator needs to grant a temporary project manager the ability to delete case records for two weeks without changing the baseline permissions of the general support profile. What is the best approach?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Modify the support profile permissions and revert them in two weeks',
      'Create a custom Permission Set with delete permissions and assign it to the project manager',
      'Create a new temporary role hierarchy level specifically for deleting records',
      'Build a validation rule that conditionally permits deletions based on username'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Permission sets allow temporary or unique permissions to be granted to individual users without changing profile configurations.'
  },
  {
    id: 'sf-19',
    text: 'A user is unable to view a custom field on an Opportunity record page layout despite the administrator confirming the field is placed in the section. What should be checked next?',
    topic: 'Salesforce Fundamentals',
    options: [
      'The Organization-Wide Defaults settings',
      'Field-Level Security settings on the user\'s Profile',
      'The custom object validation rule criteria',
      'The global search layout column allocations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'If a field is placed on a layout but hidden from a user, it means their Field-Level Security setting restricts their profile from viewing it.'
  },
  {
    id: 'sf-20',
    text: 'A financial firm changes its corporate quarters to align with an October start date. How can an administrator ensure forecasts and quotas update correctly across the application?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Manually adjust every individual report quarterly',
      'Configure the Custom Fiscal Year settings in the Company Information setup',
      'Deploy a validation rule to recalculate account dates',
      'Reassign the role hierarchy levels of the sales managers'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Configuring custom fiscal years adjusts the platform boundaries for forecasts, reporting filters, and quota timelines automatically.'
  },
  {
    id: 'auto-1',
    text: 'Which automation tool is specifically designed to handle long-running, multi-step, multi-user approval routing workflows in Salesforce?',
    topic: 'Salesforce Automation',
    options: [
      'Workflow Rules',
      'Process Builder',
      'Approval Process',
      'Validation Rules'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Approval Processes are built to lock records, manage multi-step evaluations, and route actions across users or queues for sign-off.'
  },
  {
    id: 'auto-2',
    text: 'What happens to a record database transaction if an unhandled exception or error is thrown inside an execution trigger?',
    topic: 'Salesforce Automation',
    options: [
      'The valid data fields are saved while faulty fields are skipped',
      'The entire database transaction is completely rolled back and no changes are committed',
      'The error is ignored and logged in an administrative dashboard',
      'The record owner profile is automatically suspended'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce enforces strict transaction boundaries. An unhandled exception rolls back the whole event to protect data integrity.'
  },
  {
    id: 'auto-3',
    text: 'What condition causes a standard Salesforce Validation Rule to throw an error message and block a record save operation?',
    topic: 'Salesforce Automation',
    options: [
      'When the formula evaluates to TRUE',
      'When the formula evaluates to FALSE',
      'When the formula returns a NULL value',
      'When the formula references another object field'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Validation Rules check for invalid states. If the formula expression evaluates to TRUE, it blocks the transaction and presents the error.'
  },
  {
    id: 'auto-4',
    text: 'What asynchronous Apex feature is best suited to process or update large volumes of records (up to millions) in independent chunks?',
    topic: 'Salesforce Automation',
    options: [
      'Future Methods',
      'Batch Apex',
      'Queueable Apex',
      'Before-Save Flows'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Batch Apex chunks large data sets into manageable transactions to stay within platform governor limits.'
  },
  {
    id: 'auto-5',
    text: 'What is the maximum recursive trigger execution level limit enforced by the Salesforce platform to prevent infinite loops?',
    topic: 'Salesforce Automation',
    options: [
      '5 levels',
      '16 levels',
      '50 levels',
      '100 levels'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce has built-in loop protection that stops execution and throws an error if a trigger calls itself recursively beyond 16 levels.'
  },
  {
    id: 'auto-6',
    text: 'Which Flow type is designed to collect data inputs via guided graphical screens on record layouts?',
    topic: 'Salesforce Automation',
    options: [
      'Record-Triggered Flow',
      'Screen Flow',
      'Autolaunched Flow',
      'Schedule-Triggered Flow'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Screen Flows present user interface elements to collect input data and step users through guided visual workflows.'
  },
  {
    id: 'auto-7',
    text: 'What is the default batch chunk size parameter processed during an individual loop execution phase in Batch Apex?',
    topic: 'Salesforce Automation',
    options: [
      '1 record',
      '200 records',
      '1,000 records',
      '2,000 records'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'By default, the system groups records into chunks of 200 items per batch transaction when executing a Batch Apex job.'
  },
  {
    id: 'auto-8',
    text: 'What declarative tool can be used to automatically route incoming support tickets to specific teams based on country criteria?',
    topic: 'Salesforce Automation',
    options: [
      'Case Assignment Rules',
      'Validation Rules',
      'Escalation Rules',
      'Outbound Messaging'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Case Assignment Rules evaluate criteria on incoming cases sequentially to assign records to a user or queue.'
  },
  {
    id: 'auto-9',
    text: 'What is the primary operational advantage of using a Fast Field Updates (Before-Save) Flow over an Actions and Related Records Flow?',
    topic: 'Salesforce Automation',
    options: [
      'It can update fields on unrelated parent objects',
      'It is significantly faster because it modifies field values in-memory before the record is written to the database',
      'It can execute external HTTP callout logic directly',
      'It can be launched via utility bars on desktop apps'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Before-Save Flows update values in-memory prior to the database write operation, bypassing expensive after-save re-trigger steps.'
  },
  {
    id: 'auto-10',
    text: 'Which automation tool allows you to build complex multi-user workflows that orchestrate separate stages and flows over long business lifecycles?',
    topic: 'Salesforce Automation',
    options: [
      'Workflow Rules',
      'Process Builder',
      'Salesforce Flow Orchestrator',
      'Validation Rules'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Flow Orchestrator lets you group individual flows into multi-step stages that cross separate timelines and users.'
  },
  {
    id: 'auto-11',
    text: 'What annotation is required inside a custom Apex class method to expose it as a selectable action element within Flow Builder?',
    topic: 'Salesforce Automation',
    options: [
      '@AuraEnabled',
      '@Future',
      '@InvocableMethod',
      '@RemoteAction'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'The `@InvocableMethod` annotation makes an Apex method visible as a declarative Action component within the Flow canvas.'
  },
  {
    id: 'auto-12',
    text: 'What declarative automation feature tracks open cases and automatically alerts managers when an operational SLA milestone window is missed?',
    topic: 'Salesforce Automation',
    options: [
      'Case Assignment Rules',
      'Escalation Rules',
      'Validation Rules',
      'Auto-Response Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Escalation Rules monitor case age thresholds and automatically trigger updates or notification emails if SLAs are missed.'
  },
  {
    id: 'auto-13',
    text: 'A business requires an automation to update 150,000 old asset tracking log records every night without running into synchronous transaction limits. Which tool should be selected?',
    topic: 'Salesforce Automation',
    options: [
      'Record-Triggered Flow running fast updates',
      'Scheduled Batch Apex',
      'An Apex before-update database trigger handler',
      'A series of workflow rule actions'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scheduled Batch Apex handles large data volumes asynchronously across separate chunk cycles to respect governor limits.'
  },
  {
    id: 'auto-14',
    text: 'An administrator needs to prevent sales reps from closing an Opportunity if the discount field is greater than 25 percent unless an approval box is checked. What tool enforces this check at the moment of save?',
    topic: 'Salesforce Automation',
    options: [
      'Validation Rule',
      'Assignment Rule',
      'Auto-Response Rule',
      'Escalation Rule'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Validation Rules check conditions on save. If a criteria evaluating to TRUE is hit (Discount > 0.25 AND Approved == False), the record save is blocked.'
  },
  {
    id: 'auto-15',
    text: 'A developer receives a "System.LimitException: Too many SOQL queries: 101" error when importing data. The error traces back to a custom trigger containing a query placed inside a for-loop. How can this be fixed?',
    topic: 'Salesforce Automation',
    options: [
      'Ask support to increase the organization query limits',
      'Bulkify the trigger by moving the SOQL query outside of the loop using collections',
      'Convert the Apex trigger execution context into a workflow rule',
      'Split the import text files into smaller batches manually'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Bulkification moves database queries out of loops. Collecting IDs in a Set and running a single query resolves the 100-query limit exception.'
  },
  {
    id: 'auto-16',
    text: 'Universal Containers wants to lock Opportunity records during a contract review phase to prevent reps from changing amounts, then unlock the record once it is approved by the Finance Director. How should this be structured?',
    topic: 'Salesforce Automation',
    options: [
      'Create a validation rule targeting user profiles',
      'Configure an Approval Process, which handles record-locking and unlocking automatically',
      'Build a Record-Triggered Flow with assignment variables',
      'Deploy a case assignment rule layout'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Approval Processes feature native record-locking capabilities that secure data states during a review lifecycle.'
  },
  {
    id: 'auto-17',
    text: 'An administrator wants to update a custom text field on a Contact record automatically whenever that record is edited. The update does not rely on any other object data. What is the most efficient choice?',
    topic: 'Salesforce Automation',
    options: [
      'Record-Triggered Flow configured for Fast Field Updates',
      'Record-Triggered Flow configured for Actions and Related Records',
      'An asynchronous future method routine',
      'A multi-step validation rule path'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Fast Field Updates (before-save) are optimized for same-record changes because they modify values in-memory before database commits.'
  },
  {
    id: 'auto-18',
    text: 'A custom flow loops through a list of 50 tasks to update their statuses. During execution, it crashes with a governor limit error. The administrator finds an Update Records element placed inside the loop canvas path. How should the flow be optimized?',
    topic: 'Salesforce Automation',
    options: [
      'Break the tasks into separate autolaunched flow streams',
      'Assign updates to a collection variable inside the loop, and place a single Update Records element outside the loop path',
      'Replace the loop element with a validation rule logic block',
      'Change the flow execution context to run in system mode'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Placing DML elements (like Update Records) inside loops causes limit errors. Assigning changes to a collection and processing one update outside the loop bulkifies the flow.'
  },
  {
    id: 'auto-19',
    text: 'A business requires an integration callout to push order updates to an external system whenever a custom Order record status changes. The callout must run asynchronously without blocking the user interface. How should this be built?',
    topic: 'Salesforce Automation',
    options: [
      'Call an Apex integration method synchronously from a before-save trigger',
      'Use a Record-Triggered Flow with an Asynchronous Path to launch the integration action',
      'Construct a validation rule checking status string parameters',
      'Configure a case assignment rule queue target'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Asynchronous Paths in record flows execute integration callouts in a separate background thread, preventing user interface lag.'
  },
  {
    id: 'auto-20',
    text: 'A custom object log needs to be created automatically whenever a high-value Opportunity is saved. The log requires fields populated from the new Opportunity ID. Which context configuration is required?',
    topic: 'Salesforce Automation',
    options: [
      'A Fast Field Updates (Before-Save) Flow',
      'An Actions and Related Records (After-Save) Flow',
      'A validation rule calculating ID text strings',
      'A case assignment rule mapping custom logs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Creating separate related records requires an After-Save Flow (Actions and Related Records) because the triggering record ID must exist in the database first.'
  },

  {
    id: 'apex-1',
    text: 'Which collection type should be used when you need to store unique elements and ensure no duplicate values exist?',
    topic: 'Apex Development',
    options: [
      'List',
      'Set',
      'Map',
      'Array'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Set is an unordered collection of elements that cannot contain any duplicate values.'
  },
  {
    id: 'apex-2',
    text: 'What does the "with sharing" keyword enforce when applied to an Apex class definition?',
    topic: 'Apex Development',
    options: [
      'It enforces both Object-level permissions (CRUD) and Field-level security (FLS)',
      'It enforces the sharing rules configured for the current user, controlling record-level access',
      'It shares the Apex class code with external integrated platforms automatically',
      'It prevents other custom Apex classes from calling methods within the class'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "with sharing" keyword ensures that the platform enforces the current user\'s record-level sharing rules (OWDs and sharing configurations).'
  },
  {
    id: 'apex-3',
    text: 'What is a core operational restriction of utilizing an Apex future method annotated with @future?',
    topic: 'Apex Development',
    options: [
      'It cannot accept standard sObjects or complex objects as parameters; it only supports primitive data types or collections of primitives',
      'It must always be executed inside a database trigger framework',
      'It increases the synchronous SOQL query limit to 200',
      'It can only return a structured Map collection data type'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Future methods cannot take sObjects as parameters because the state of the record could change between the method call and its actual execution.'
  },
  {
    id: 'apex-4',
    text: 'Which standard interface must an Apex class implement so it can be scheduled to run at designated intervals or times?',
    topic: 'Apex Development',
    options: [
      'Database.Batchable',
      'Schedulable',
      'Queueable',
      'Database.Stateful'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To schedule an Apex class, the class must implement the Schedulable interface and define its execute method.'
  },
  {
    id: 'apex-5',
    text: 'What is the programmatic purpose of utilizing "Database.Stateful" in a Batch Apex class definition?',
    topic: 'Apex Development',
    options: [
      'It bypasses all governor limits across every batch chunk transaction',
      'It maintains state and preserves the values of instance member variables across consecutive execution batches',
      'It locks all targeted records to prevent external edits during processing',
      'It automatically retries failed transactions up to 5 times'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'By default, Batch Apex is stateless. Implementing Database.Stateful allows you to maintain state across all execution blocks.'
  },
  {
    id: 'apex-6',
    text: 'What is the maximum number of records that a single inline SOSL (Search) statement can return within an Apex execution context?',
    topic: 'Apex Development',
    options: [
      '200',
      '2,000',
      '10,000',
      '50,000'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The governor limit dictates that an Apex SOSL query can find and return a maximum total of 2,000 records across all searched objects.'
  },
  {
    id: 'apex-7',
    text: 'What is the primary benefit of using Queueable Apex instead of traditional @future methods?',
    topic: 'Apex Development',
    options: [
      'Queueable Apex runs synchronously, making it faster than future processes',
      'Queueable Apex supports complex parameter types like custom Apex objects or sObjects, and allows job chaining',
      'Queueable Apex does not count against daily asynchronous execution allocations',
      'Queueable Apex automatically bypasses Validation Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Queueable Apex overcomes future method limitations by accepting complex types and sObjects, and allowing you to chain jobs together sequentially.'
  },
  {
    id: 'apex-8',
    text: 'Which keyword is used to initialize a new instance of an Apex class, array, or collection structure?',
    topic: 'Apex Development',
    options: [
      'create',
      'instance',
      'new',
      'instantiate'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'The "new" keyword allocation instantiates objects, collections (List, Set, Map), and arrays in memory.'
  },
  {
    id: 'apex-9',
    text: 'What code-level tool should be used inside an Apex class to gracefully handle runtime errors and protect the execution from breaking with an unhandled exception?',
    topic: 'Apex Development',
    options: [
      'if-else validation loops',
      'try-catch-finally blocks',
      'Database.rollback pointers',
      'System.assert statements'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A try-catch block isolates code that might cause runtime issues, capturing exceptions cleanly instead of causing a fatal crash.'
  },
  {
    id: 'apex-10',
    text: 'During the Salesforce Save Order of Execution, when do standard Validation Rules evaluate relative to Before and After Triggers?',
    topic: 'Apex Development',
    options: [
      'Before "Before Triggers" execute',
      'After "Before Triggers" but before "After Triggers" execute',
      'After "After Triggers" execute',
      'Simultaneously with Assignment Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In the Save Order of Execution, Salesforce runs validation rules after "before triggers" complete their assignments, but prior to running "after triggers."'
  },
  {
    id: 'apex-11',
    text: 'What operational capability does an Apex Transaction Finalizer offer when attached to a Queueable Apex job thread?',
    topic: 'Apex Development',
    options: [
      'It increases the maximum synchronous heap size limit to 12MB',
      'It allows developers to design fallback actions, logging routines, or retry loops that execute automatically when the Queueable job either succeeds or fails',
      'It bypasses validation rules during mass data loading routines',
      'It converts standard object lookup fields into master-detail relationships natively'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Transaction Finalizers attach to Queueable jobs via the Finalizer interface, letting you manage exceptions or run recovery routines cleanly when jobs finish.'
  },
  {
    id: 'apex-12',
    text: 'Inside an Apex Trigger, what is a critical functional limitation when attempting to modify field values directly within the "Trigger.new" collection context?',
    topic: 'Apex Development',
    options: [
      'Trigger.new values cannot be read or mapped in any context',
      'Field values can only be modified directly in "before" trigger contexts; modifying Trigger.new in an "after" trigger context throws a read-only exception error',
      'Trigger.new values are completely hidden from low-privilege profiles',
      'Modifications require an active external integration webhook connection to validate'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In before triggers, records are still in-memory and can be directly altered. By the time after triggers execute, they are committed to the database schema, making Trigger.new read-only.'
  },
  {
    id: 'apex-13',
    text: 'What is the purpose of utilizing the "Database.setSavepoint()" and "Database.rollback()" method sequence within complex Apex controller operations?',
    topic: 'Apex Development',
    options: [
      'To increase synchronous CPU timeout execution limit margins by 10 seconds',
      'To define a specific logical point in transaction execution, allowing the system to undo database modifications if subsequent validation actions fail',
      'To export transactional data rows into external cloud backup folders',
      'To force client components to refresh their view state caches instantly'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Savepoints allow transactional rollback management. If an error occurs halfway through a multi-step operation, calling rollback resets the database state to the defined savepoint.'
  },
  {
    id: 'apex-14',
    text: 'When writing code that queries parent-child records, what is the maximum permissible nesting depth for inner subqueries within a single synchronous Apex SOQL statement?',
    topic: 'Apex Development',
    options: [
      '1 level of child subquery nesting',
      '2 levels of child subquery nesting',
      '5 levels of child subquery nesting',
      'There is no structural restriction on query child nesting depths'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Salesforce standard SOQL limits relationship queries to a single child nesting level (one outer select and one inner parent-to-child subquery).'
  },
  {
    id: 'apex-15',
    text: 'Which keyword is used in Apex to explicitly declare a method variable that cannot be modified once assigned a initial value?',
    topic: 'Apex Development',
    options: [
      'static',
      'final',
      'constant',
      'immutable'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "final" keyword prevents a variable from being redefined or re-assigned after its initial valuation assignment.'
  },
  {
    id: 'apex-16',
    text: 'What type of SOQL loop optimization should be utilized in Apex to prevent loading massive record sets entirely into memory, avoiding heap size limit crashes?',
    topic: 'Apex Development',
    options: [
      'Standard list assignment loop',
      'SOQL For-Loop processing records in batches of 200 items',
      'While loop using query offsets',
      'Nested loop iterating over individual string parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'SOQL For-Loops process data efficiently in chunks of 200 records, avoiding heavy memory consumption and heap size limit exceptions.'
  },
  {
    id: 'apex-17',
    text: 'What clause can be added to a SOQL statement to retrieve archived or soft-deleted records residing in the organization Recycle Bin?',
    topic: 'Apex Development',
    options: [
      'WITH SECURITY_ENFORCED',
      'ALL ROWS',
      'FOR UPDATE',
      'USING SYSTEM_MODE'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The ALL ROWS clause instructs the SOQL engine to include deleted records and archived activities alongside active operational data rows.'
  },
  {
    id: 'apex-18',
    text: 'Which data definition parameter allows a class method to execute DML modifications using standard system administrative privileges, ignoring user CRUD controls?',
    topic: 'Apex Development',
    options: [
      'with sharing',
      'without sharing',
      'inherited sharing',
      'public sharing'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "without sharing" parameter forces the class to execute logic in a privileged system mode, ignoring user-level sharing boundaries.'
  },
  {
    id: 'apex-19',
    text: 'What is the baseline synchronous CPU timeout limit allocation enforced for a single transactional thread in Apex?',
    topic: 'Apex Development',
    options: [
      '5 seconds',
      '10 seconds',
      '30 seconds',
      '60 seconds'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce limits the maximum synchronous CPU execution usage duration time to exactly 10 seconds per transaction block.'
  },
  {
    id: 'apex-20',
    text: 'Which sObject method should be used to dynamically check if a custom field is accessible to the running user prior to executing a query call?',
    topic: 'Apex Development',
    options: [
      'Schema.sObjectType.fields.isAccessible()',
      'UserInfo.getProfilePermissions()',
      'Object.checkFieldSecurity()',
      'System.validateFieldVisibility()'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Apex describes tokens provide programmatic field verification methods, like isAccessible(), to validate Field-Level Security flags dynamically.'
  },
  {
    id: 'apex-21',
    text: 'A developer needs to write an Apex controller method that returns data to a custom dropdown component inside a Lightning Web Component. The method only performs data lookups. What is the most optimal way to declare this method?',
    topic: 'Apex Development',
    options: [
      '@AuraEnabled public static List<Account> getAccounts()',
      '@AuraEnabled(cacheable=true) public static List<Account> getAccounts()',
      '@InvocableMethod public static List<Account> getAccounts()',
      'public static void getAccounts()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using @AuraEnabled(cacheable=true) caches the returned data on the client side, reducing round-trips to the Salesforce server, boosting component loading performance.'
  },
  {
    id: 'apex-22',
    text: 'A custom validation routine must verify parent record values before committing child updates. The method handles hundreds of entries at a time. How can the developer fetch parent data efficiently while preventing unnecessary SOQL calls?',
    topic: 'Apex Development',
    options: [
      'Iterate through the trigger scope and perform an individual SOQL statement query for each child item',
      'Collect all relevant parent record IDs into a Set collection, run a single SOQL statement utilizing the IN operator, and store results in a Map for key lookups',
      'Configure a text extraction routine utilizing a SOSL full-text search layout over both objects simultaneously',
      'Hardcode target ID structural metrics into an internal matrix utility string array'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'This pattern collects related IDs into a Set, executes one single SOQL operation outside loops to retrieve parent information, and registers them in a Map for instantaneous indexing.'
  },
  {
    id: 'apex-23',
    text: 'During an asset data transformation, an Apex script needs to safely update matching records based on an external Enterprise Resource Planning (ERP) tracking ID. If no matching row is found, it must insert a new record. What single operational statement should be used?',
    topic: 'Apex Development',
    options: [
      'insert',
      'upsert',
      'merge',
      'update'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "upsert" DML keyword uses a specified key field or external ID field to determine if a record matches an existing record. It performs an update if matched, or an insert if unmatched.'
  },
  {
    id: 'apex-24',
    text: 'An integration requires that when an internal custom action fires, an immediate validation request is transmitted to an endpoint. To prevent a "Callout from Trigger" exception, how should the logic be decoupled?',
    topic: 'Apex Development',
    options: [
      'Call the HTTP method directly from a standard before-save execution routine',
      'Encapsulate the callout logic in an asynchronous Queueable job or future method, passing only record identifiers to decouple the processing thread',
      'Wrap the HTTP transmission loop inside a synchronous validation formula structure',
      'Switch the custom object Organization-Wide Defaults settings from Private to Public Read/Write'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce prohibits synchronous HTTP callouts within an active trigger database context. Offloading the work to an asynchronous Queueable class or future execution window breaks the transaction lock and allows the callout to run.'
  },
  {
    id: 'apex-25',
    text: 'A developer needs to prevent a custom trigger from re-running its logic recursively during the same execution thread due to cross-object updates. What code pattern should be used?',
    topic: 'Apex Development',
    options: [
      'Wrap the trigger body in a try-catch block catching DmlExceptions',
      'Use a public static Boolean flag inside an Apex utility class to track execution state across the transaction',
      'Annotate the trigger definition string with the @future asynchronous modifier',
      'Set the target object organization-wide sharing defaults to Public Read/Write'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Static variables preserve their state throughout a single transaction lifetime. A public static Boolean flag can be checked and flipped on the first pass to stop the handler logic from processing secondary recursive invocations.'
  },
  {
    id: 'apex-26',
    text: 'When executing a database DML operation using the "Database.insert(records, false)" method signature, what happens if 5 out of 100 records fail validation?',
    topic: 'Apex Development',
    options: [
      'The entire transaction fails and rolls back all 100 records',
      'The 95 valid records are successfully processed and saved, while the 5 faulty records return error metrics inside the SaveResult array',
      'The system skips validation rules completely to save all 100 items',
      'The transaction pauses until an administrator manually clears the errors'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting the allOrNone parameter to false partial-commits data. Valid rows write to the database, while errors populate Database.SaveResult objects without rolling back the successful rows.'
  },
  {
    id: 'apex-27',
    text: 'A business requires an Apex routine that processes high-volume updates. To prevent lock-contention issues when multiple users modify identical parent rows simultaneously, what clause should be appended to the SOQL query statement?',
    topic: 'Apex Development',
    options: [
      'WITH USER_MODE',
      'FOR UPDATE',
      'ALL ROWS',
      'WITH SECURITY_ENFORCED'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The FOR UPDATE clause locks the queried records on the database server. This forces other transactions attempting to modify those same rows to wait until the current transaction completes, avoiding race conditions.'
  },
  {
    id: 'apex-28',
    text: 'What mechanism can a developer implement within an Apex Trigger framework to allow specific administrative integration processes to temporarily bypass trigger execution logic entirely?',
    topic: 'Apex Development',
    options: [
      'Convert the trigger definition into a standard validation formula expression',
      'Incorporate a hierarchical Custom Setting or Custom Metadata Type flag checked at the start of the trigger handler to conditionally exit execution',
      'Run a data loader query task to wipe old records before updates',
      'Switch the object organization-wide sharing defaults configuration to Private'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Checking a custom setting or metadata flag at the beginning of your trigger handler provides a declarative kill-switch. This lets integration users turn off trigger actions during heavy data loads.'
  },
  {
    id: 'apex-29',
    text: 'What occurs to the active database transaction if a developer uses the "addError()" method on an sObject record inside an After-Update trigger context?',
    topic: 'Apex Development',
    options: [
      'The field value is silently wiped, but the transaction completes successfully',
      'The system marks the specific record with a validation flag, preventing its save event and rolling back the current transaction boundary',
      'The error is logged in the developer console, but data commits anyway',
      'The record owner account is automatically suspended from the platform'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calling addError() on a record in a trigger context stops processing for that row. It flags the save transaction as a failure, stopping database write operations and rolling back pending updates.'
  },
  {
    id: 'apex-30',
    text: 'A developer wants to ensure that a specific block of logic within an Apex Class method can only see and manipulate fields if the running user has appropriate profile access to them. How should this be handled?',
    topic: 'Apex Development',
    options: [
      'Rely exclusively on the standard "with sharing" class declaration keyword',
      'Use the WITH USER_MODE clause inside SOQL queries or enforce schema access checks natively via Security.stripInaccessible',
      'Create separate duplicate objects to split profile permission pathways completely',
      'Force all data processing transactions to occur inside an asynchronous batch job block'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Incorporating WITH USER_MODE in queries or applying Security.stripInaccessible ensures the system strictly respects user permissions for data access.'
  },

  {
    id: 'lwc-1',
    text: 'Which decorator must be used to expose a component\'s property or public method to other components or to make it a public property that can be set in App Builder?',
    topic: 'Lightning Web Components',
    options: [
      '@wire',
      '@track',
      '@api',
      '@invocable'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'The @api decorator marks a property or method as public, making it part of the component\'s public API so parent components or Lightning App Builder can interact with it.'
  },
  {
    id: 'lwc-2',
    text: 'What is the purpose of the @wire decorator in Lightning Web Components?',
    topic: 'Lightning Web Components',
    options: [
      'To securely link a component to external non-Salesforce databases via WebSockets',
      'To read data from a Salesforce org using a highly optimized service built on the Lightning Data Service',
      'To establish a direct communication channel between a child and parent component',
      'To force a component to re-render its HTML template every 5 seconds'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The @wire decorator provides a declarative way to fetch data and metadata from Salesforce orgs using Lightning Data Service (LDS) or call wire-adapted Apex methods.'
  },
  {
    id: 'lwc-3',
    text: 'When a property inside an array or an object changes, what decorator is required in modern LWC to ensure the template tracks deep mutations?',
    topic: 'Lightning Web Components',
    options: [
      '@reactive',
      '@state',
      '@track',
      'No decorator is needed for nested mutations'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'While primitive variables are automatically reactive in modern LWC, you still need the @track decorator to make the framework deeply monitor and re-render when fields inside an object or items inside an array change.'
  },
  {
    id: 'lwc-4',
    text: 'Which standard lifecycle hook in Lightning Web Components fires immediately after a component has been inserted into the Document Object Model (DOM)?',
    topic: 'Lightning Web Components',
    options: [
      'constructor()',
      'connectedCallback()',
      'renderedCallback()',
      'disconnectedCallback()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The connectedCallback() lifecycle hook executes when a component is inserted into the DOM. It is equivalent to a regular web component initialization lifecycle step.'
  },
  {
    id: 'lwc-5',
    text: 'What is the primary benefit of using Lightning Message Service (LMS) in a Salesforce application framework?',
    topic: 'Lightning Web Components',
    options: [
      'It speeds up database updates by bypassing validation formulas entirely',
      'It allows communication between components across completely separate DOM hierarchies, including LWC, Aura, and Visualforce pages',
      'It encrypts sensitive fields like credit card data directly inside a browser instance',
      'It replaces standard custom events within a single parent-child hierarchy'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lightning Message Service provides a secure, message-channel-driven way to communicate across separate DOM boundaries, binding LWC, Aura, and Visualforce together.'
  },
  {
    id: 'lwc-6',
    text: 'Which directive should be utilized in an LWC HTML template to iterate over a collection list and render elements efficiently?',
    topic: 'Lightning Web Components',
    options: [
      'for:each',
      'apex:repeat',
      'v-for',
      'ng-repeat'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The "for:each" directive (combined with the nested template looping mechanism and a unique key attribute) is the standard LWC tool for looping through an array of items.'
  },
  {
    id: 'lwc-7',
    text: 'What is a critical execution rule regarding the "constructor()" lifecycle hook in a custom Lightning Web Component class?',
    topic: 'Lightning Web Components',
    options: [
      'It must always call super() first before inspecting or setting any component state properties',
      'It is the ideal place to interact with or manipulate nested child DOM elements',
      'It can be used to execute high-volume Apex wire queries safely',
      'It cannot accept variable definitions or logic blocks'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Because LWC extends LightningElement, the constructor() hook must immediately call super() to register the native element frame before executing any custom assignment tasks.'
  },
  {
    id: 'lwc-8',
    text: 'Which directive should an administrator or developer use to conditionally render an HTML block in an LWC template based on a boolean value?',
    topic: 'Lightning Web Components',
    options: [
      'if:true',
      'lwc:if',
      'rendered',
      'display:if'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Modern Lightning Web Components use the "lwc:if", "lwc:elseif", and "lwc:else" directives to handle conditional DOM rendering efficiently.'
  },
  {
    id: 'lwc-9',
    text: 'What does Shadow DOM styling encapsulation accomplish in a Lightning Web Component ecosystem?',
    topic: 'Lightning Web Components',
    options: [
      'It speeds up JavaScript processing loops within the component engine',
      'It prevents CSS styles defined inside a component from leaking out and affecting parent or adjacent page structures, and vice-versa',
      'It allows components to view database records that the user has no permissions to read',
      'It converts custom page themes into external global asset variables automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Shadow DOM creates a distinct boundary for CSS, keeping styles localized to the specific component framework so they don\'t unexpectedly conflict with other sections of the viewport page.'
  },
  {
    id: 'lwc-10',
    text: 'How do you correctly import a custom Apex method named "getAccounts" from an Apex class named "AccountController" into a Lightning Web Component script?',
    topic: 'Lightning Web Components',
    options: [
      'import getAccounts from \'@salesforce/apex/AccountController.getAccounts\';',
      'require \'AccountController.getAccounts\';',
      'import getAccounts from \'AccountController\';',
      '@salesforce.import(getAccounts);'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'LWC uses ES6 module import syntax combined with the "@salesforce/apex" scoping syntax to make server-side class methods accessible within the client-side JavaScript engine.'
  },
  {
    id: 'lwc-11',
    text: 'Which decorator is used in LWC to make properties available for Flow input and output parameters?',
    topic: 'Lightning Web Components',
    options: [
      '@api',
      '@track',
      '@flow',
      '@wire'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The @api decorator makes public properties available contextually, allowing Flow interview states to pass data into or read variables out of the component.'
  },
  {
    id: 'lwc-12',
    text: 'What value must be included in the `<targets>` block of an LWC metadata configuration XML file to expose that component for selection inside a Flow canvas layout?',
    topic: 'Lightning Web Components',
    options: [
      'lightning__FlowScreen',
      'lightning__AppPage',
      'lightning__RecordPage',
      'lightning__HomePage'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Specifying the `lightning__FlowScreen` target tag enables administrators to place the custom LWC onto visual Screen Flow panels.'
  },
  {
    id: 'lwc-13',
    text: 'Which Lightning Data Service wire adapter function is utilized to declaratively fetch record track field metrics inside the JavaScript framework?',
    topic: 'Lightning Web Components',
    options: [
      'createRecord',
      'getRecord',
      'updateRecord',
      'deleteRecord'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The getRecord UI API wire adapter reads database record fields and layout properties cleanly without writing custom backend controllers.'
  },
  {
    id: 'lwc-14',
    text: 'What operational advantage does utilizing the Lightning Data Service wire service offer over standard Apex controller calls?',
    topic: 'Lightning Web Components',
    options: [
      'It bypasses validation rules entirely during data entry loops',
      'It leverages automatic shared browser-side data caching and record synchronization properties across separate components',
      'It allows UI scripts to execute direct SOQL calls asynchronously',
      'It handles single sign-on authentication keys automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lightning Data Service manages data tracking centrally, using client-side caching to speed up loads and sync data changes across separate on-screen layouts.'
  },
  {
    id: 'lwc-15',
    text: 'What baseline execution paradigm drives the compilation and compilation layout architecture of the modern LWC framework framework?',
    topic: 'Lightning Web Components',
    options: [
      'Core W3C Web Components standard parameters',
      'Aura custom event container elements',
      'Visualforce markup controller rendering rules',
      'Server-side PHP processing loops'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Lightning Web Components are built over native Web Components standards, running lightweight code directly in browser engines.'
  },
  {
    id: 'lwc-16',
    text: 'Which library is commonly used to create interactive, vector-based charts and dashboard layouts within custom LWC UI containers?',
    topic: 'Lightning Web Components',
    options: [
      'CanvasJS',
      'D3.js',
      'ChartJS',
      'Plotly'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'ChartJS is a popular lightweight scripting framework often packed as a Static Resource to run responsive dashboard visualizations inside LWCs.'
  },
  {
    id: 'lwc-17',
    text: 'What decorator is used to make a property reactive in modern Lightning Web Components when tracking basic primitive mutations?',
    topic: 'Lightning Web Components',
    options: [
      '@api',
      '@track',
      '@wire',
      'Properties are automatically reactive'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'In modern LWC iterations, all public and private component properties are automatically reactive. The template re-renders whenever a primitive value changes.'
  },
  {
    id: 'lwc-18',
    text: 'In a scenario where an LWC needs to communicate data upwards to its immediate parent DOM container layout, what mechanism should be deployed?',
    topic: 'Lightning Web Components',
    options: [
      'Custom Events',
      'Lightning Message Service',
      'Shared JavaScript Modules',
      'Global Variables'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Custom Events allow child components to pass event signals and data payloads up the DOM tree to be handled by parent elements.'
  },
  {
    id: 'lwc-19',
    text: 'Which lifecycle hook in Lightning Web Components is invoked automatically when a component is completely unmounted and removed from the DOM?',
    topic: 'Lightning Web Components',
    options: [
      'disconnectedCallback()',
      'errorCallback()',
      'renderedCallback()',
      'constructor()'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The `disconnectedCallback()` hook executes when an element leaves the page layout, making it the ideal spot to clear timers or unsubscribe from message channels.'
  },
  {
    id: 'lwc-20',
    text: 'What is the purpose of the `errorCallback()` lifecycle hook within an LWC component structure?',
    topic: 'Lightning Web Components',
    options: [
      'To log data transmission mistakes straight into external databases',
      'To capture unhandled runtime errors occurring within child components, acting as an error boundary layout',
      'To intercept validation rule formula blocks during record save steps',
      'To automatically reload the browser viewport when network failures occur'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `errorCallback()` hook works like an error boundary, catching exceptions thrown by nested child components so you can display a clean fallback UI instead of crashing the page.'
  },
  {
    id: 'lwc-21',
    text: 'A user opens a page containing an LWC that loads a detailed summary chart. The chart crashes during initialization because the code tries to access a chart container element before it is loaded. Where should the initialization logic be safely relocated?',
    topic: 'Lightning Web Components',
    options: [
      'Move the logic into the constructor() phase',
      'Relocate the DOM tracking logic into the renderedCallback() hook, using an internal guard variable to ensure it only instantiates once',
      'Place the structural script inside the disconnectedCallback() routine',
      'Wrap the chart logic inside a standard validation formula expression'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'You cannot access elements in the template during constructor() or connectedCallback() because the component has not finished rendering. Element tracking or third-party chart setups must happen in renderedCallback().'
  },
  {
    id: 'lwc-22',
    text: 'A developer needs to build an input form component that alerts a parent dashboard component whenever a field value changes. How should the developer construct and pass this information up the component hierarchy?',
    topic: 'Lightning Web Components',
    options: [
      'Dispatch a standard CustomEvent with a descriptive name string and pass data payloads inside its "detail" object property',
      'Invoke an @InvocableMethod targeting parent variables directly',
      'Assign the new data into a local global cache matrix string array',
      'Call the Lightning Message Service synchronously without utilizing message channels'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The standard communication pattern for child-to-parent data passing in web architectures is to fire a CustomEvent. The event parameters accept a "detail" property block where you can safely embed custom state values.'
  },
  {
    id: 'lwc-23',
    text: 'A business requires a custom LWC layout to be exposed and selectable inside the Lightning App Builder so administrators can place it onto Account record pages. What configuration change must be added to the component\'s metadata xml file?',
    topic: 'Lightning Web Components',
    options: [
      'Set the <isExposed> tag to true and define <target>lightning__RecordPage</target> inside the <targets> block',
      'Configure an inline @api decorator property named "AppBuilder"',
      'Set <apiVersion> to match custom Apex controller headers',
      'Inject a JavaScript import module referencing lightning/messageService'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The component\'s custom metadata file (.js-meta.xml) controls placement visibility. Setting <isExposed> to true makes it visible to the system, while the target declarations define exactly where it can be selected inside the App Builder canvas.'
  },
  {
    id: 'lwc-24',
    text: 'When a parent component passes a primitive value to a child component property marked with the @api decorator, what occurs if the child component attempts to mutate that property directly in its JavaScript controller?',
    topic: 'Lightning Web Components',
    options: [
      'The value updates locally and propagates automatically up to the parent template',
      'The framework throws a runtime error because properties decorated with @api are read-only public properties',
      'The parent component re-renders completely but the child component state resets to null',
      'The mutation is accepted silently but field-level security blocks any subsequent database updates'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Properties marked with @api represent the component\'s public API and enforce a one-way data flow from parent to child. The child cannot mutate its own public properties directly.'
  },
  {
    id: 'lwc-25',
    text: 'A developer needs to dynamically search for and alter a specific HTML DOM container inside an LWC template frame using selector query string lookups. What method should be invoked within the component controller class?',
    topic: 'Lightning Web Components',
    options: [
      'document.getElementById()',
      'this.template.querySelector()',
      'window.findComponent()',
      'this.refs.getDOMNode()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To maintain shadow DOM styling encapsulation boundaries, developers must use `this.template.querySelector()` or `this.template.querySelectorAll()` to inspect elements rendered inside the component.'
  },
  {
    id: 'lwc-26',
    text: 'What is the correct execution order of lifecycle hooks when a nested LWC component tree initializes and mounts onto a page layout?',
    topic: 'Lightning Web Components',
    options: [
      'Parent connectedCallback -> Parent constructor -> Child connectedCallback -> Child renderedCallback -> Parent renderedCallback',
      'Parent constructor -> Parent connectedCallback -> Child constructor -> Child connectedCallback -> Child renderedCallback -> Parent renderedCallback',
      'Child constructor -> Child connectedCallback -> Parent constructor -> Parent connectedCallback -> Parent renderedCallback -> Child renderedCallback',
      'Parent constructor -> Child constructor -> Parent connectedCallback -> Child connectedCallback -> Parent renderedCallback -> Child renderedCallback'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The creation phase flows downward from parent to child (constructor and connectedCallback), while the rendering phase flows upward from child to parent (renderedCallback) once the child DOM trees are fully initialized.'
  },
  {
    id: 'lwc-27',
    text: 'A developer creates a service component (a shared JavaScript module without an HTML template). How should this module be structured so its utility functions can be reused across other independent LWCs?',
    topic: 'Lightning Web Components',
    options: [
      'Declare the class using the @api decorator on every internal function signature',
      'Export the target functions or classes explicitly using standard ES6 export statements inside the JavaScript module script file',
      'Register the JavaScript file inside an active static resource bundle framework',
      'Implement the code as an InvocableMethod annotation pattern'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A component without an HTML file can export constants, utility methods, or classes using standard `export` syntax, allowing other components to bring them in using standard `import` statements.'
  },
  {
    id: 'lwc-28',
    text: 'When utilizing the Lightning Data Service "wire" service to query database fields, what parameters are returned within the provisioned object block that captures the asynchronous data payload stream?',
    topic: 'Lightning Web Components',
    options: [
      'success and failure blocks',
      'data and error parameters wrapped inside a single structural object',
      'resultStrings and responseCodes arrays',
      'recordsList and limitsMap collections'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A wired property or function receives an object parameter containing two primary fields: `data` (holding the successfully resolved record payload metadata) and `error` (holding exception or permission details).'
  },
  {
    id: 'lwc-29',
    text: 'When configuring custom component communication, what behavior happens if a developer sets bubbles: true and composed: true inside an instantiated CustomEvent constructor parameters mapping?',
    topic: 'Lightning Web Components',
    options: [
      'The event travels down into child components recursively bypassing layout slots',
      'The event bubbles up the DOM hierarchy and breaks through the shadow DOM boundary, making it visible to parent components outside the shadow root container',
      'The event executes synchronously in a privileged system execution thread',
      'The event forces validation rules to run on parent fields before re-rendering views'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting `bubbles: true` lets the event bubble up the DOM tree. Setting `composed: true` allows that event to cross the shadow DOM boundary, making it visible to parent layouts outside the internal component scope.'
  },
  {
    id: 'lwc-30',
    text: 'A developer needs an input component to communicate data changes to a parent page. To optimize performance and prevent execution lag during typing, a timer is implemented to delay the event until the user pauses. What is this optimization technique called?',
    topic: 'Lightning Web Components',
    options: [
      'Throttling framework routing',
      'Debouncing javascript events',
      'Asynchronous thread caching',
      'Lazy loading UI trees'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Debouncing groups multiple sequential events together. By delaying the execution of an action until a user stops typing for a brief period (e.g., 300ms), it minimizes server load and improves performance.'
  },

  {
    id: 'data-1',
    text: 'What type of relationship should be created if you need to loosely link two objects together without affecting record ownership or security frameworks?',
    topic: 'Data Modeling',
    options: [
      'Master-Detail Relationship',
      'Lookup Relationship',
      'Junction Relationship',
      'Hierarchical Relationship'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Lookup relationship links two objects loosely. The child records maintain independent ownership, security models, and sharing boundaries separate from the parent.'
  },
  {
    id: 'data-2',
    text: 'What is a core limitation of a Master-Detail relationship regarding the record ownership field on the child object?',
    topic: 'Data Modeling',
    options: [
      'The child record owner field is automatically set to a system queue',
      'The child object does not have an independent Owner field; ownership is automatically inherited from the parent master record',
      'The child record owner can only be changed via Apex code blocks',
      'The owner field becomes a global encrypted text string field'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In a Master-Detail relationship, the child record inherits its security, sharing rules, and ownership entirely from its parent master record.'
  },
  {
    id: 'data-3',
    text: 'What is the maximum number of Master-Detail relationship fields that can be created on a single custom object?',
    topic: 'Data Modeling',
    options: [
      '1',
      '2',
      '5',
      '10'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce limits each custom object to a maximum of two Master-Detail relationship fields.'
  },
  {
    id: 'data-4',
    text: 'Which custom field type allows an object to store alphanumeric strings received from an outside database and use them to index rows during API upsert operations?',
    topic: 'Data Modeling',
    options: [
      'Auto-Number Field',
      'Formula Field',
      'External ID Text Field',
      'Roll-Up Summary Field'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'An External ID field holds unique identifiers from external systems, enabling direct record matching and reference syncing during data updates.'
  },
  {
    id: 'data-5',
    text: 'What is a Hierarchical Relationship in Salesforce primarily used for?',
    topic: 'Data Modeling',
    options: [
      'To link an account record to multiple child asset records',
      'To establish a special lookup link strictly between User records, such as defining a manager chain',
      'To create many-to-many configurations on custom objects',
      'To map data model tables inside Salesforce Data Cloud structures'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Hierarchical relationship is a specialized lookup option restricted exclusively to the User object, commonly used to build organizational reporting chains.'
  },
  {
    id: 'data-6',
    text: 'What property setting must be enabled on a Lookup field definition if you want to block users from saving a child record without picking a parent record?',
    topic: 'Data Modeling',
    options: [
      'Unique field constraint checkbox',
      'Required checkbox',
      'External ID declaration flag',
      'Case-sensitive evaluation rule'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Marking a lookup field as Required ensures that a valid parent relationship must be chosen before a child record can be saved.'
  },
  {
    id: 'data-7',
    text: 'What data modeling structure is formed when an administrator builds a custom object containing two separate Master-Detail relationships pointing to distinct parent objects?',
    topic: 'Data Modeling',
    options: [
      'Self-Relationship object',
      'Junction Object',
      'Lookup Object node',
      'External Data mapping'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A junction object connects two objects in a many-to-many relationship using a pair of Master-Detail fields.'
  },
  {
    id: 'data-8',
    text: 'What happens to related custom child records in a standard Lookup relationship if the associated parent record is deleted and the field is configured to "Clear the value of this field"?',
    topic: 'Data Modeling',
    options: [
      'The child records are permanently deleted via cascade delete logic',
      'The child records remain intact, and the lookup field value becomes blank',
      'The child records are automatically reassigned to the system administrator',
      'The transaction throws a fatal database runtime exception'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Unlike Master-Detail dependencies, a standard lookup can clear its field reference upon parent deletion, leaving the child record otherwise unaffected.'
  },
  {
    id: 'data-9',
    text: 'Which function type cannot be calculated natively inside an administrative Roll-Up Summary field declaration?',
    topic: 'Data Modeling',
    options: [
      'SUM',
      'MIN / MAX',
      'AVERAGE',
      'COUNT'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Roll-Up Summary fields natively support COUNT, SUM, MIN, and MAX, but do not provide an AVERAGE calculation option.'
  },
  {
    id: 'data-10',
    text: 'What is the maximum number of custom fields permitted on a standard object layout in an Enterprise Edition Salesforce organization?',
    topic: 'Data Modeling',
    options: [
      '100',
      '500',
      '800',
      'unlimited'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Enterprise Edition limits custom field creations to a baseline ceiling of 500 custom fields per object.'
  },
  {
    id: 'data-11',
    text: 'Which relationship classification allows an object to have a lookup link that references records belonging to its own identical object type?',
    topic: 'Data Modeling',
    options: [
      'Master-Detail Relationship',
      'Self-Relationship',
      'Junction Relationship',
      'External Relationship'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A self-relationship is a lookup to the same object type, such as linking an Account record to a parent Account record.'
  },
  {
    id: 'data-12',
    text: 'What does the field attribute "Unique" enforce when selected during custom Text field construction?',
    topic: 'Data Modeling',
    options: [
      'It forces the field to contain uppercase characters only',
      'It prevents duplicate data values across separate records for that specific field',
      'It automatically encrypts the string inside database tables',
      'It requires the field to be populated on page layouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Unique attribute blocks users from saving a value if that exact character string already exists in that field on another record.'
  },
  {
    id: 'data-13',
    text: 'An administrator needs to create a data model where multiple project tasks can be associated with a master project record. If a project is deleted, all tasks must be deleted automatically. What field relationship fits this requirement?',
    topic: 'Data Modeling',
    options: [
      'Lookup Relationship from Task to Project',
      'Master-Detail Relationship from Task to Project',
      'Junction Object connecting both elements',
      'Hierarchical field definition mapped via profiles'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Master-Detail relationships enforce structural cascade deletion, automatically removing child records when their parent is deleted.'
  },
  {
    id: 'data-14',
    text: 'A university tracks student enrollments across various courses. A student can enroll in multiple courses, and a single course contains many students. How should the administrator design the data model?',
    topic: 'Data Modeling',
    options: [
      'Create a Lookup field on the Student object pointing to the Course object',
      'Create a custom Enrollment object acting as a Junction Object with Master-Detail relationships to both Student and Course',
      'Build a Hierarchical relationship linking the User records',
      'Deploy an external text ID attribute onto the page layouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A many-to-many data pattern requires a junction object to link two parent records together via separate Master-Detail fields.'
  },
  {
    id: 'data-15',
    text: 'A company needs to sync invoice data from an external billing tool. They want to ensure they can update matching records using the external database key during weekly data loads. What custom field setting must be applied?',
    topic: 'Data Modeling',
    options: [
      'Create a text field flagged as an External ID and marked as Unique',
      'Build an auto-number field tracking serial progressions',
      'Deploy a roll-up summary field totaling tracking lines',
      'Configure a validation formula tracking field characters'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'External ID attributes store unique external identifiers, allowing seamless matching and loading during integration tasks.'
  },
  {
    id: 'data-16',
    text: 'An administrator tries to convert an existing Lookup relationship field into a Master-Detail relationship field but the platform blocks the operation with an error. What is the most likely cause?',
    topic: 'Data Modeling',
    options: [
      'The parent object already has one lookup relationship field configured',
      'The object contains existing records with blank or null values in the lookup field',
      'The user profile lacks permission sets to modify custom tables',
      'The validation rules are active on the target layout components'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'You can only convert a lookup into a master-detail relationship if all existing records have data populated in that lookup field.'
  },
  {
    id: 'data-17',
    text: 'A business demands a dashboard widget displaying the maximum discount percentage found among a set of related line item records on an Opportunity page layout. How should this be handled declartively?',
    topic: 'Data Modeling',
    options: [
      'Create a standard cross-object formula field tracking values',
      'Create a Roll-Up Summary field on the Opportunity object using the MAX function on the line item discount field',
      'Deploy an Apex batch class to sweep columns every night',
      'Build a validation rule to capture the number value on save'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The MAX operation in a Roll-Up Summary field identifies the highest numeric value among related master-detail child records.'
  },
  {
    id: 'data-18',
    text: 'A finance manager needs to audit record changes. They want to ensure a custom text field can track duplicate employee identification values across sandboxes but block duplicates in production. What attribute addresses this?',
    topic: 'Data Modeling',
    options: [
      'Enforce the Required checkbox property parameters',
      'Mark the field as Unique during setup to prevent matching values',
      'Use an auto-number format string structure',
      'Set the Field-Level Security to Read Only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Unique setting prevents duplicate entries across records, throwing a validation exception if a match is found.'
  },
  {
    id: 'data-19',
    text: 'An executive wants to build a nested relationship chain where a region links to a territory, which links to a district, which links to an office. What data modeling constraint must the administrator watch out for?',
    topic: 'Data Modeling',
    options: [
      'Master-Detail custom relationships cannot exceed a nesting depth of 3 levels',
      'Lookup fields are blocked from referencing standard object models',
      'Validation rules can only parse 1 level of parent tracking data',
      'Profiles restrict nested relationships to three tiers'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Salesforce restricts custom master-detail hierarchies to a maximum nesting depth of 3 consecutive sub-levels.'
  },
  {
    id: 'data-20',
    text: 'A developer needs to build a reporting structure mapping corporate management chains where employees link directly to their supervisor within the User object. What relationship type should be chosen?',
    topic: 'Data Modeling',
    options: [
      'Master-Detail Relationship',
      'Hierarchical Relationship',
      'Junction Relationship',
      'External Data Link'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Hierarchical relationships are specialized lookups reserved for the User object to construct structural reporting paths.'
  },

  {
    id: 'process-1',
    text: 'Which element is used within Flow Builder to dynamically separate execution branches based on variable values or record conditions?',
    topic: 'Process Automation',
    options: [
      'Assignment Element',
      'Decision Element',
      'Loop Element',
      'Update Records Element'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Decision element acts like an if-then block, routing the flow execution path down different branches based on your defined criteria.'
  },
  {
    id: 'process-2',
    text: 'What is the purpose of the Assignment Element inside an Autolaunched Flow structure?',
    topic: 'Process Automation',
    options: [
      'To commit record modifications to the database tables immediately',
      'To set or change the values of variables, collections, or record fields within the flow memory',
      'To send email alerts using predefined messaging templates',
      'To check user profiles for field-level security compliance'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Assignment element changes variable values in the flow\'s internal memory before they are processed or written to the database.'
  },
  {
    id: 'process-3',
    text: 'What type of Flow should be selected if an action must execute automatically at a specific hour every day for a matching list of records?',
    topic: 'Process Automation',
    options: [
      'Record-Triggered Flow',
      'Schedule-Triggered Flow',
      'Screen Flow',
      'Platform Event-Triggered Flow'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Schedule-Triggered Flows run asynchronously at specified intervals (daily, weekly, or once) for a target group of records.'
  },
  {
    id: 'process-4',
    text: 'What does a Subflow element allow a developer to accomplish within Flow Builder?',
    topic: 'Process Automation',
    options: [
      'To launch an Apex trigger handler path inside system mode',
      'To call and execute another independent, autolaunched flow from within the active flow canvas',
      'To bypass validation rules during data creation tasks',
      'To automatically convert screens into mobile layouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Subflow element lets you reuse automation by calling one autolaunched flow from within another.'
  },
  {
    id: 'process-5',
    text: 'Which status parameter must be applied to a newly completed Flow design before users can experience its automation logic in production?',
    topic: 'Process Automation',
    options: [
      'Saved',
      'Activated',
      'Validated',
      'Published'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A flow version must be explicitly Activated before its automation path goes live in the system.'
  },
  {
    id: 'process-6',
    text: 'What capability does a Scheduled Path offer within a Record-Triggered Flow configuration layout?',
    topic: 'Process Automation',
    options: [
      'It schedules an immediate system layout metadata index update',
      'It delays specific actions to run at a relative time offset after a record event occurs (e.g., 5 days after close date)',
      'It forces all database transactions to run in synchronous user mode',
      'It checks profile password metrics on login events'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scheduled Paths allow you to separate and delay time-sensitive actions relative to record dates or execution events.'
  },
  {
    id: 'process-7',
    text: 'Which tool is the modern recommended standard for creating point-and-click record-triggered automations in Salesforce?',
    topic: 'Process Automation',
    options: [
      'Workflow Rules',
      'Process Builder',
      'Flow Builder',
      'Aura Handlers'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Flow Builder has replaced legacy tools like Workflow Rules and Process Builder as the primary tool for declarative automation.'
  },
  {
    id: 'process-8',
    text: 'What target variable is automatically generated in a Record-Triggered Flow to store the field values of the record that launched the event?',
    topic: 'Process Automation',
    options: [
      'Global.RecordID',
      '$Record',
      'Trigger.new',
      'CurrentRecord'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `$Record` global variable houses the structural data fields of the specific record that triggered the flow event.'
  },
  {
    id: 'process-9',
    text: 'What does a Loop Element accomplish when processing a collection variable inside Flow Builder?',
    topic: 'Process Automation',
    options: [
      'It creates an infinite trigger sequence until limits clear',
      'It steps through each individual item in a collection array one by one to execute actions on them',
      'It deletes duplicate fields from page layout structures',
      'It converts standard picklists into tracking formulas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Loop element iterates through a collection, assigning each item to a loop variable to let you perform repetitive actions per record.'
  },
  {
    id: 'process-10',
    text: 'Which Flow Builder element writes data changes to the Salesforce database using specific filter conditions?',
    topic: 'Process Automation',
    options: [
      'Assignment Element',
      'Update Records Element',
      'Get Records Element',
      'Create Records Element'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Update Records element modifies matching database rows using field mappings or values stored in a record variable.'
  },
  {
    id: 'process-11',
    text: 'What does a "Collection Filter" element do inside Flow Builder?',
    topic: 'Process Automation',
    options: [
      'It exports data sheets directly into CSV attachments',
      'It screens a collection variable using a condition to produce a smaller collection containing only the matching records',
      'It locks out profiles from viewing specific fields',
      'It checks if a validation rule has been bypassed'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Collection Filter evaluates an array of records in memory, outputting a filtered subset without needing a costly loop.'
  },
  {
    id: 'process-12',
    text: 'What event status characterizes an Autolaunched Flow compared to a Screen Flow layout?',
    topic: 'Process Automation',
    options: [
      'It requires a custom button click to launch every time',
      'It runs entirely in the background without a user interface or interactive screens',
      'It requires an active external integration webhook connection to start',
      'It only runs inside sandbox test org setups'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Autolaunched flows run programmatically in the background without requiring user interaction or displaying screens.'
  },
  {
    id: 'process-13',
    text: 'An administrator needs to build a wizard that guides call center agents through collection tasks, updating separate objects based on agent entries. What tool should be deployed?',
    topic: 'Process Automation',
    options: [
      'Record-Triggered Flow running fast updates',
      'Screen Flow placed on the console record page layout',
      'An asynchronous future method trigger handler',
      'A multi-stage approval process layout'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Screen Flows capture inputs through guided on-screen forms, making them ideal for walking agents through multi-step tasks.'
  },
  {
    id: 'process-14',
    text: 'A company wants to send a follow-up email alert to a customer exactly 7 days after their service case is closed. How should this be structured inside Flow Builder?',
    topic: 'Process Automation',
    options: [
      'Use an Autolaunched Flow triggered by a validation formula',
      'Add a Scheduled Path to a Record-Triggered Flow, set to run 7 days after the case close date',
      'Deploy a standard Approval Process with time locks',
      'Schedule a daily Data Loader export routine'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scheduled paths allow you to defer specific actions (like sending emails) to run at a relative time offset from record events.'
  },
  {
    id: 'process-15',
    text: 'A developer needs a flow to query contact records matching an account country code. If no records are found, it should redirect down an alternate processing track. What element configuration handles this branching?',
    topic: 'Process Automation',
    options: [
      'An Assignment element updating string states',
      'A Get Records element followed by a Decision element that checks if the record collection is null',
      'A Loop element configured to iterate over profile metrics',
      'A validation rule checking character patterns'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Pairing a Get Records element with a Decision element lets you check if data was found and branch your flow logic accordingly.'
  },
  {
    id: 'process-16',
    text: 'A business process demands that whenever an asset status becomes "Expired," an internal record log must update. The flow works, but team members notice heavy screen delay on save. Investigation reveals an Update Records element inside a loop. How should this be fixed?',
    topic: 'Process Automation',
    options: [
      'Convert the loop logic into an external trigger class handler',
      'Move the Update Records element outside the Loop path, using an Assignment element inside the loop to add records to a collection variable',
      'Deploy a validation rule to overwrite field columns directly',
      'Switch the flow configuration to run as a screen layout'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Moving DML elements outside of loops prevents you from hitting governor limits and eliminates transactional screen lag.'
  },
  {
    id: 'process-17',
    text: 'An operations manager wants to reuse a complex tax calculation flow across four separate parent automations without duplicating elements. What pattern addresses this request?',
    topic: 'Process Automation',
    options: [
      'Replicate the calculation elements inside every individual flow wrapper',
      'Build the calculation as an independent Autolaunched Flow, and call it as a Subflow within the other four automations',
      'Create a cross-object formula field tracking tax values',
      'Configure an approval process matrix matching the variables'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Subflow element lets you build a centralized, modular flow that can be invoked across multiple parent automations.'
  },
  {
    id: 'process-18',
    text: 'A developer builds a record flow that crashes with a "MIXED_DML_OPERATION" error. Debug logs show the flow is trying to update a standard Position record and a User record within the same transaction. How should this be resolved?',
    topic: 'Process Automation',
    options: [
      'Deactivate the validation rules across both objects',
      'Separate the operations by updating the setup object (User) on a Scheduled Path or within an Asynchronous transaction boundary',
      'Combine the field variables using a shared junction layout object',
      'Enforce profile session high-assurance boundaries on the user'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce prevents mixing setup objects (like User) and non-setup objects (like custom records) in the same transaction. Splitting the updates across a scheduled path resolves the error.'
  },
  {
    id: 'process-19',
    text: 'A business requires that when an opportunity is submitted for a discount check, its stage changes to "In Review" and the record locks down against profile updates. What automation tool handles this behavior out of the box?',
    topic: 'Process Automation',
    options: [
      'An Escalation Rule queue manager',
      'An active Approval Process with designated Initial Submission Actions',
      'A Fast Field Updates before-save flow layout',
      'A custom validation rule check mapping dates'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Approval Processes handle these scenarios natively, using initial submission actions to update fields and lock records during review.'
  },
  {
    id: 'process-20',
    text: 'An administrator needs to verify why a newly active Record-Triggered Flow is failing to update an account description during testing. What tool should be used to trace field states step-by-step?',
    topic: 'Process Automation',
    options: [
      'Data Loader extraction summaries',
      'The native "Debug" button workspace inside Flow Builder to inspect input and output variables',
      'A schema builder canvas layout check',
      'An outbound messaging event log sheet'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Flow Builder Debug tool lets you trace flow paths step-by-step, showing variable states and element execution outcomes.'
  },

  {
    id: 'security-1',
    text: 'Which feature allows an administrator to restrict a user\'s login access to specific hours of the day based on their job requirements?',
    topic: 'Security and Access',
    options: [
      'Login IP Ranges',
      'Login Hours',
      'Session Timeout Settings',
      'Two-Factor Authentication Policies'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Login Hours are configured at the Profile level to strictly restrict the times when users can log in to the Salesforce organization.'
  },
  {
    id: 'security-2',
    text: 'What security feature allows restricting API or user logins to a specific corporate network, denying access from anywhere else?',
    topic: 'Security and Access',
    options: [
      'Login IP Ranges configured on the Profile',
      'Trusted IP Ranges configured under Network Access',
      'Session Security High Assurance settings',
      'Permission Set Group Muting rules'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Login IP Ranges on the Profile completely deny login attempts from IP addresses outside the defined range, whereas Network Access Trusted IP Ranges simply bypass identity verification challenges for users.'
  },
  {
    id: 'security-3',
    text: 'What administrative feature allows creating a group of permissions that can be assigned to multiple users, while utilizing a specific rule to disable or mute certain permissions within that bundle?',
    topic: 'Security and Access',
    options: [
      'Custom Profiles',
      'Permission Set Groups with a Muting Permission Set',
      'Sharing Sets for High-Volume Users',
      'Delegated Administration Groups'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Permission Set Groups bundle multiple permission sets together, and a Muting Permission Set within that group dynamically turns off specific permissions for group members.'
  },
  {
    id: 'security-4',
    text: 'What type of security setting allows an administrator to define a minimum password length and force historical password tracking limits globally?',
    topic: 'Security and Access',
    options: [
      'Session Settings',
      'Password Policies',
      'Identity Provider Settings',
      'High Assurance Level Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Password Policies control the organization-wide or profile-specific rules for password complexity, length, expirations, and reuse history.'
  },
  {
    id: 'security-5',
    text: 'Which sharing mechanism can grant access to records automatically based on values in specific fields, such as record type or picklist status, rather than record ownership?',
    topic: 'Security and Access',
    options: [
      'Owner-Based Sharing Rules',
      'Criteria-Based Sharing Rules',
      'Manual Sharing Entries',
      'Role Hierarchy Roll-ups'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Criteria-Based Sharing Rules open up record access automatically by evaluating field values on the record, completely independent of who owns the item.'
  },
  {
    id: 'security-6',
    text: 'What does a Restriction Rule accomplish when deployed on an object in Salesforce?',
    topic: 'Security and Access',
    options: [
      'It expands record access to match external user licenses',
      'It configures field-level security constraints across page layouts',
      'It acts as a filter that restricts a user\'s existing record access to a specified subset of records based on criteria',
      'It completely deactivates a user profile during off-business hours'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Restriction Rules let you narrow down record access for certain users, allowing them to see only the records that meet specified criteria, even if OWDs or sharing rules would normally grant broader access.'
  },
  {
    id: 'security-7',
    text: 'Which feature allows users to manually share a record with another user or public group using the record detail interface?',
    topic: 'Security and Access',
    options: [
      'Manual Sharing',
      'Sharing Sets',
      'Account Teams',
      'Opportunity Teams'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Manual Sharing allows the record owner or administrators to share specific record access with individual users or groups on an ad-hoc basis.'
  },
  {
    id: 'security-8',
    text: 'What is the purpose of configuring "Session Security Levels" in Salesforce security management?',
    topic: 'Security and Access',
    options: [
      'To restrict the maximum duration of background Batch Apex execution loops',
      'To classify login sessions as Standard or High Assurance, allowing verification prompts when accessing sensitive tools like reports or connected apps',
      'To encrypt text fields globally across standard objects',
      'To automate the distribution of custom permission sets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Session Security Levels let you classify connections (Standard vs. High Assurance) so you can require extra verification, like Multi-Factor Authentication (MFA), before users access sensitive resources.'
  },
  {
    id: 'security-9',
    text: 'Which sharing feature allows multiple users to collaborate on a single large Account record, granting explicit individual roles and edit permissions to team members?',
    topic: 'Security and Access',
    options: [
      'Sharing Sets',
      'Restriction Rules',
      'Account Teams',
      'Muting Permissions'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Account Teams provide a collaborative structure where a group of users can be granted specialized access roles and permissions for a specific account record.'
  },
  {
    id: 'security-10',
    text: 'Which declarative capability ensures that an administrator can completely control read and edit permissions for an individual field without changing layout assignments?',
    topic: 'Security and Access',
    options: [
      'Organization-Wide Defaults',
      'Field-Level Security (FLS)',
      'Sharing Rules',
      'Validation Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Field-Level Security isolates access parameters directly on the field metadata, governing field visibility across all layouts, views, and reports.'
  },
  {
    id: 'security-11',
    text: 'What is the baseline function of the "View All Data" administrative system permission when enabled on a profile?',
    topic: 'Security and Access',
    options: [
      'It displays metadata schemas inside the tool builder canvas',
      'It grants the user Read access to all records across the entire organization, overriding any restrictive OWD or sharing settings',
      'It allows the user to export dashboard graphics into local sheet assets',
      'It turns off validation rule requirements during bulk data imports'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "View All Data" system permission acts as a global administrative override, granting read access to all records in the org regardless of standard sharing rules.'
  },
  {
    id: 'security-12',
    text: 'What occurs when a user attempts to log in from a new, unrecognized device if their profile does not have any Login IP Ranges configured but the org has Network Access rules?',
    topic: 'Security and Access',
    options: [
      'The login attempt is completely blocked without further options',
      'The system prompts the user for identity verification (such as a verification code) before granting access',
      'The user is automatically reassigned to a temporary low-privilege profile',
      'The validation rules throw a fatal access error notification'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When Login IP Ranges are not defined on the Profile, logging in from a new device triggers an identity verification challenge unless the device IP falls within the org\'s Network Access Trusted IP list.'
  },
  {
    id: 'security-13',
    text: 'An administrator needs to ensure that call center reps can only log into Salesforce from the physical corporate office network. If they attempt to log in from home, access must be blocked. How should this be configured?',
    topic: 'Security and Access',
    options: [
      'Add the office network IP addresses to the Trusted IP Ranges under Network Access settings',
      'Configure the corporate office IP address range inside the Login IP Ranges on the call center rep Profile',
      'Deploy a validation rule checking user location parameters',
      'Create a criteria-based sharing rule targeting the IP parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Defining Login IP Ranges directly on a Profile strictly enforces location constraints, completely blocking login requests that originate outside those networks.'
  },
  {
    id: 'security-14',
    text: 'A company wants its team members to use a comprehensive Sales bundle containing account, contact, and lead permissions. However, a specific user must be blocked from deleting leads. How should this be handled efficiently?',
    topic: 'Security and Access',
    options: [
      'Create a completely new profile manually replicating the whole sales structure',
      'Assign the sales Permission Set Group to the user, but include a Muting Permission Set within that group that disables Lead Delete access',
      'Configure a validation rule that checks the username string on deletion events',
      'Change the lead object Organization-Wide Defaults configuration to Private'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Muting permission sets within a Permission Set Group allow you to neatly turn off specific permissions for individual users without decoupling the shared permission set bundle.'
  },
  {
    id: 'security-15',
    text: 'A financial firm establishes a policy where support reps should only view sensitive contract files if the contract status is marked as "Public." If it is marked as "Internal," the records must be completely hidden from them, regardless of standard sharing rules. What tool satisfies this request?',
    topic: 'Security and Access',
    options: [
      'An owner-based sharing rule entry',
      'A Restriction Rule applied to the Contract object targeting the support rep profile',
      'A custom validation rule checking field length characters',
      'A roll-up summary field calculation'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Restriction Rules allow you to layer a strict filtering condition over existing sharing rules, narrowing access down to records that match specific criteria.'
  },
  {
    id: 'security-16',
    text: 'A sales rep attempts to use the manual sharing option to pass record access to a peer, but the "Share" button is completely missing from the record page layout. What should the administrator check first?',
    topic: 'Security and Access',
    options: [
      'The global session timeout duration limits configuration',
      'Whether the object Organization-Wide Default (OWD) is set to Public Read/Write',
      'The validation rule criteria assigned to the page view',
      'The field-level security constraints applied to lookup columns'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'If the OWD for an object is set to Public Read/Write, everyone already has full access to all records, making manual sharing redundant and hiding the manual sharing options.'
  },
  {
    id: 'security-17',
    text: 'An employee leaves the company unexpectedly at 5:00 PM. The administrator needs to guarantee the user cannot log in or access data immediately, but their records cannot be transferred to a new owner yet. What action should be taken?',
    topic: 'Security and Access',
    options: [
      'Delete the user record from the production database tables completely',
      'Freeze the user account record immediately using the User detail workspace',
      'Change the user\'s role hierarchy level to the lowest entry point',
      'Deploy a validation rule to block their specific email text string'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Freezing a user account stops all login capabilities immediately. This is ideal when you cannot deactivate a user right away because they are referenced in active hierarchies, workflows, or fields.'
  },
  {
    id: 'security-18',
    text: 'A compliance auditor needs to export report data but complains that they cannot see a custom "Social Security Number" field on Account views, despite having full record sharing access. What security layer is blocking them?',
    topic: 'Security and Access',
    options: [
      'Organization-Wide Defaults parameters',
      'Field-Level Security (FLS) settings on their Profile or Permission Sets',
      'Role Hierarchy positioning rules',
      'A custom validation rule check on save events'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Field-Level Security controls whether a field is visible to a user. If FLS is turned off for their profile or permission sets, the field will be completely hidden across layouts, views, and reports.'
  },
  {
    id: 'security-19',
    text: 'An administrator needs to grant three human resource specialists access to modify specific employee case details, but these cases must remain completely hidden from all other members of the corporate organization. How should this be designed?',
    topic: 'Security and Access',
    options: [
      'Set OWD to Public Read Only and create a custom validation rule',
      'Set the Case OWD to Private, and build a Criteria-Based Sharing Rule to share these records with a Public Group containing the three specialists',
      'Modify the standard corporate profile sharing rules globally',
      'Deploy a junction object to map permissions using lookups'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting the OWD to Private secures the records by default. A criteria-based sharing rule can then selectively open up access to the targeted public group.'
  },
  {
    id: 'security-20',
    text: 'A user reports that they are suddenly prompted to complete a multi-factor authentication challenge every time they click to download a financial dashboard report, but general navigation functions work normally. What security feature is driving this behavior?',
    topic: 'Security and Access',
    options: [
      'Login Hours violation rules',
      'Session Security Level set to High Assurance for report actions inside Session Settings or Transaction Security policies',
      'An owner-based sharing rule restriction',
      'A validation rule enforcing text constraints'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Enforcing a High Assurance session level for specific features (like exporting reports) requires users to pass a step-up verification challenge before they can complete that action.'
  },

  {
    id: 'ui-1',
    text: 'Which Salesforce UI feature allows an administrator to declartively hide or reveal individual fields and sections on a record page layout right inside Lightning App Builder based on record criteria?',
    topic: 'User Interface',
    options: [
      'Standard Page Layouts',
      'Dynamic Forms',
      'In-App Guidance templates',
      'Compact Layouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Forms replace rigid page layouts by turning fields and sections into individual components inside Lightning App Builder, allowing you to set conditional visibility rules for them.'
  },
  {
    id: 'ui-2',
    text: 'What is the purpose of a Compact Layout configuration in the Salesforce user interface framework?',
    topic: 'User Interface',
    options: [
      'To compress file attachment storage limits on server instances',
      'To define the specific fields that appear in the highlight panel at the top of a record page layout in the Lightning Experience interface',
      'To compress long text strings inside custom validation messages',
      'To minimize the navigation options visible on mobile screens'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Compact Layouts control the key fields that display in a record\'s highlights panel, mobile app headers, and lookups.'
  },
  {
    id: 'ui-3',
    text: 'Which tool allows administrators to create floating or docked walkthrough banners to onboard new users directly inside the application interface?',
    topic: 'User Interface',
    options: [
      'App Builder Canvas',
      'In-App Guidance',
      'Dynamic Actions manager',
      'Quick Actions panel'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In-App Guidance lets you add custom prompts and walkthroughs to train, onboard, or alert users right inside the app.'
  },
  {
    id: 'ui-4',
    text: 'What feature allows an administrator to conditionally display specific action buttons (like Edit or Clone) inside a component based on record fields or user permissions?',
    topic: 'User Interface',
    options: [
      'Compact Actions Layout',
      'Dynamic Actions',
      'Page Layout Action Overrides',
      'Validation Button Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Actions let you configure action button visibility rules directly within Lightning App Builder, replacing standard page layout action assignments.'
  },
  {
    id: 'ui-5',
    text: 'Which workspace element defines the columns that display when a user runs a global search lookup query for a specific object?',
    topic: 'User Interface',
    options: [
      'Compact Layouts',
      'Search Layouts',
      'Dynamic Forms sections',
      'Related Lists allocations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Search Layouts control the field columns that display in search results, lookup dialogs, and auto-complete lists.'
  },
  {
    id: 'ui-6',
    text: 'What type of Quick Action can be configured to let users create a completely unrelated record, such as building a new Lead from a utility bar utility widget?',
    topic: 'User Interface',
    options: [
      'Object-Specific Quick Action',
      'Global Quick Action',
      'Dynamic Component Action',
      'Custom Web Link Action'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Global Quick Actions can be launched from anywhere (like the global actions menu or utility bars) to create records or log details without needing a relationship to the active page record.'
  },
  {
    id: 'ui-7',
    text: 'Which UI component contains the navigation tabs, branding colors, and specific utilities made available to a functional group of users inside Lightning Experience?',
    topic: 'User Interface',
    options: [
      'Page Layout',
      'Lightning App',
      'Dynamic Form canvas',
      'Search Layout panel'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Lightning App bundles a navigation menu, branding elements, utility tools, and assigned tabs into a tailored workspace for specific user profiles.'
  },
  {
    id: 'ui-8',
    text: 'What does an Object-Specific Quick Action require that a Global Quick Action does not?',
    topic: 'User Interface',
    options: [
      'An active custom Apex class controller parameter',
      'A structural relationship to a specific target parent object, automatically populating a relationship link when launched from that record page',
      'A high assurance session token validation sweep',
      'A validation rule formula tracking character limits'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Object-Specific Quick Actions run within the context of a particular object, allowing the system to automatically populate relationship links on newly created child records.'
  },
  {
    id: 'ui-9',
    text: 'Which layout configuration controls the fields, columns, and sorting order of related child records visible at the bottom of a parent record view?',
    topic: 'User Interface',
    options: [
      'Compact Layouts',
      'Related Lists inside Page Layouts or Dynamic Related List components',
      'Global Actions panels',
      'Search Layout parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Related Lists manage the child record tables surfaced on a parent record layout, defining visible columns, filters, and button selections.'
  },
  {
    id: 'ui-10',
    text: 'What type of Lightning page configuration is designed to act as a custom landing homepage or central navigation dashboard for users?',
    topic: 'User Interface',
    options: [
      'Record Page',
      'Home Page',
      'App Page',
      'Utility Page'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Home Page layout is a specialized landing page template you can assign to profiles to give users a personalized dashboard view when they log in.'
  },
  {
    id: 'ui-11',
    text: 'What is the purpose of the Salesforce Lightning Design System (SLDS) framework?',
    topic: 'User Interface',
    options: [
      'To optimize server-side database indices',
      'To provide a set of design guidelines, CSS components, and blueprints to build custom UIs that look and behave exactly like native Salesforce applications',
      'To automate change set deployments across sandboxes',
      'To build multi-stage approval workflow trees'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'SLDS provides a library of CSS styles, icons, design patterns, and layouts to ensure custom components match the look and feel of native Salesforce user experiences.'
  },
  {
    id: 'ui-12',
    text: 'Which tool allows an administrator to declaratively arrange components on a page, select templates, and adjust page visibility rules for mobile and desktop views?',
    topic: 'User Interface',
    options: [
      'Schema Builder',
      'Lightning App Builder',
      'Developer Console Layout',
      'Component Library Explorer'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lightning App Builder is the declarative drag-and-drop workspace used to build custom Record, Home, and App pages for Lightning Experience.'
  },
  {
    id: 'ui-13',
    text: 'An administrator needs to modify the Opportunity page layout so that the "Deal Amount" and "Close Date" fields are prominently highlighted at the very top of the desktop view and visible inside mobile search windows. What should be updated?',
    topic: 'User Interface',
    options: [
      'The global Search Layout configuration',
      'The custom Compact Layout assigned to the Opportunity object',
      'The validation rule warning messages parameters',
      'The related list column sorting metrics'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Compact Layouts control the key fields that display in the highlights panel at the top of records and in mobile app headers.'
  },
  {
    id: 'ui-14',
    text: 'A company wants to display a sensitive "Credit Limit Validation" section on the Account record view, but only if the account is marked as an "Active Enterprise" type. They want to avoid building multiple profiles or page layouts. How should this be built?',
    topic: 'User Interface',
    options: [
      'Create a validation rule that throws an error message on click events',
      'Upgrade the Account page layout to utilize Dynamic Forms, and apply a conditional visibility rule to that section based on the Account Type field',
      'Modify field-level security constraints on the corporate profile sheets',
      'Build a global quick action to lock down layouts dynamically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Forms let you set conditional visibility rules directly on fields or sections in Lightning App Builder, eliminating the need for multiple page layouts.'
  },
  {
    id: 'ui-15',
    text: 'Compliance guidelines dictate that when users search for contacts, they must be able to see the contact\'s department and office extension directly in the search results grid. What should the administrator modify?',
    topic: 'User Interface',
    options: [
      'The Contact object Compact Layout definition',
      'The Contact object Search Layout for the target user profile',
      'The Dynamic Actions panel visibility rules',
      'The related list item configurations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Search Layouts let you customize the field columns that display when users search for records globally or within lookups.'
  },
  {
    id: 'ui-16',
    text: 'A support rep wants to log a brand new service request case quickly from a customer\'s account detail page without scrolling down to the related list section or navigating away. What should the administrator deploy to the highlights panel?',
    topic: 'User Interface',
    options: [
      'A Global Quick Action utility',
      'An Object-Specific Quick Action configured to create a Case record, added to the Account page actions',
      'A validation rule mapping case text strings',
      'An In-App Guidance walkthrough prompt'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Object-Specific Quick Actions can be added to record pages to quickly create related child records with automatically populated relationship lookups.'
  },
  {
    id: 'ui-17',
    text: 'An operations manager notices that the sales team is entering inconsistent data because they are missing a new corporate policy. The manager wants an onboarding box to pop up on the opportunity homepage to walk reps through the rules. What is the best approach?',
    topic: 'User Interface',
    options: [
      'Create a validation rule that blocks record saves with generic messages',
      'Configure a custom prompt or multi-step walkthrough using In-App Guidance in Setup',
      'Build a separate Lightning App assigned exclusively to sales profiles',
      'Add a new compact layout highlight block'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In-App Guidance is the perfect tool to deliver contextual training and pop-up policy reminders directly to users while they work.'
  },
  {
    id: 'ui-18',
    text: 'An administrator wants to clean up record pages by hiding the "Submit for Review" button from the page header unless an opportunity\'s stage is set to "Negotiation." How should this be handled declartively?',
    topic: 'User Interface',
    options: [
      'Write a validation rule that restricts button access globally',
      'Enable Dynamic Actions for the component in Lightning App Builder, and set a visibility rule on the button based on the Stage field',
      'Modify object-level CRUD permissions on the profile configurations',
      'Reconfigure search layouts to exclude the action button item'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Actions let you conditionally hide or show action buttons on your record pages by defining visibility filters right inside Lightning App Builder.'
  },
  {
    id: 'ui-19',
    text: 'A service organization wants a specialized, standalone dashboard page inside Salesforce where agents can view global support metrics. This page should not be tied to any single customer record. What type of Lightning page should be built?',
    topic: 'User Interface',
    options: [
      'Record Page template layout',
      'App Page created via Lightning App Builder and added to the app navigation menu',
      'Home Page layout assignment override',
      'Dynamic Related List view configuration'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'An App Page is a versatile standalone template used to build custom dashboards, landing pages, or tools that integrate directly into the navigation bar.'
  },
  {
    id: 'ui-20',
    text: 'A developer needs to design a custom data entry table that looks and behaves exactly like native Salesforce record grids. Where can they find the approved blueprints and styling elements to implement this?',
    topic: 'User Interface',
    options: [
      'The custom validation rules formula library',
      'The Salesforce Lightning Design System (SLDS) component blueprints documentation',
      'The Lightning Data Service caching configuration settings',
      'The App Builder canvas templates drop-down menu'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'SLDS provides the official HTML and CSS blueprints, components, and design guidelines needed to build custom user interfaces that perfectly match the native Salesforce experience.'
  },

  {
    id: 'reports-1',
    text: 'What determines the baseline set of records and fields available when building a new report in Salesforce?',
    topic: 'Reports and Dashboards',
    options: [
      'Report Type',
      'Dashboard Filter',
      'Bucket Field',
      'Summary Formula'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A Report Type acts as a blueprint or template that defines which records and fields are available in a report based on the relationships between objects.'
  },
  {
    id: 'reports-2',
    text: 'Which report format should be selected if you need to group rows of data by a specific field, such as grouping opportunities by their Stage?',
    topic: 'Reports and Dashboards',
    options: [
      'Tabular Report',
      'Summary Report',
      'Matrix Report',
      'Joined Report'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Summary reports allow you to group rows of data, support subtotals, and create charts, which is ideal for organizing records by specific attributes.'
  },
  {
    id: 'reports-3',
    text: 'What report format allows grouping data rows by both rows and columns simultaneously, resembling a spreadsheet grid view?',
    topic: 'Reports and Dashboards',
    options: [
      'Tabular Report',
      'Summary Report',
      'Matrix Report',
      'Joined Report'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Matrix reports summarize data across two grids, grouping fields vertically by row and horizontally by column simultaneously.'
  },
  {
    id: 'reports-4',
    text: 'What report format allows creating separate blocks of data to display views of different object types side-by-side in a single uniform report layout?',
    topic: 'Reports and Dashboards',
    options: [
      'Summary Report',
      'Matrix Report',
      'Joined Report',
      'Tabular Report'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Joined reports let you bundle separate blocks of data together, with each block acting as a sub-report that can draw from different report types.'
  },
  {
    id: 'reports-5',
    text: 'What is the function of a Bucket Field configuration when evaluating report rows?',
    topic: 'Reports and Dashboards',
    options: [
      'To schedule automated background data exports',
      'To categorize multiple separate field values into defined group buckets on the fly without creating a custom field',
      'To calculate complex mathematical averages across rows',
      'To restrict low-privilege profiles from exporting reports'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Bucketing lets you group diverse field values into a defined set of categories right within the report builder, avoiding the need for new custom picklists or formula fields.'
  },
  {
    id: 'reports-6',
    text: 'What does a "Dynamic Dashboard" accomplish within the Salesforce user interface framework?',
    topic: 'Reports and Dashboards',
    options: [
      'It updates its graphics in real-time every 5 seconds automatically',
      'It displays data tailored to the specific logged-in user who is viewing the dashboard, rather than running under a fixed running user profile',
      'It automatically exports data tables into local CSV formats',
      'It bypasses sharing settings to show all corporate records to everyone'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Dashboards alter their data visibility based on the viewing user, applying their personal record-level sharing and security settings.'
  },
  {
    id: 'reports-7',
    text: 'Which reporting feature allows you to evaluate data rows mathematically to calculate unique summaries, such as measuring a win rate percentage directly on groups?',
    topic: 'Reports and Dashboards',
    options: [
      'Bucket Fields',
      'Custom Summary Formulas',
      'Dashboard Filters',
      'Cross Filters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Summary Formulas allow you to write mathematical expressions using summary metrics to evaluate grouped rows within summary or matrix layouts.'
  },
  {
    id: 'reports-8',
    text: 'What capability does a "Cross Filter" provide when refining the scope of a report?',
    topic: 'Reports and Dashboards',
    options: [
      'It combines multiple separate report types into a single grid layout',
      'It filters a parent object based on whether it has or does not have related child records (e.g., Accounts with Opportunities)',
      'It toggles picklist visibility configurations on page layouts',
      'It calculates multi-currency conversion variations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Cross Filters filter the primary report records by checking for the presence or absence of related child items.'
  },
  {
    id: 'reports-9',
    text: 'Where must an administrator save a report or dashboard to ensure other specific team members can run and view it?',
    topic: 'Reports and Dashboards',
    options: [
      'A Public or Shared Folder with appropriate access permissions assigned',
      'My Personal Reports folder',
      'The global scratch org metadata bundle',
      'A custom metadata type layout slot'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Records placed inside "My Personal Reports" are strictly hidden from everyone else. Sharing a report requires placing it in a public or shared folder with folder-level access granted.'
  },
  {
    id: 'reports-10',
    text: 'What is the maximum number of groupings allowed when configuring a standard Summary Report layout?',
    topic: 'Reports and Dashboards',
    options: [
      '1 grouping',
      '3 groupings',
      '5 groupings',
      'unlimited groupings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce limits reports to a maximum total of 3 levels of nested row or column groupings.'
  },
  {
    id: 'reports-11',
    text: 'What occurs when an administrator edits a "Standard Report Type" configuration field array?',
    topic: 'Reports and Dashboards',
    options: [
      'The custom fields are permanently locked from further modification',
      'Standard Report Types cannot be edited or modified; administrators must create a Custom Report Type to tailor available fields',
      'The system triggers an automatic code coverage compliance check',
      'The report automatically updates its layout template into a matrix format'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Standard report types are fixed blueprints generated automatically by the platform. Customizing field availability requires creating a Custom Report Type.'
  },
  {
    id: 'reports-12',
    text: 'Which feature allows users to filter all components on a dashboard simultaneously based on a shared attribute, such as a selected Region?',
    topic: 'Reports and Dashboards',
    options: [
      'Dashboard Filters',
      'Bucket Fields',
      'Custom Summary Formulas',
      'Cross Filters'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Dashboard Filters let users interactively refine the data across all dashboard widgets at once using shared field parameters.'
  },
  {
    id: 'reports-13',
    text: 'A business manager wants to view a list of Accounts that do not have any active Cases logged against them. A standard report type only shows accounts with cases. How should the administrator design this?',
    topic: 'Reports and Dashboards',
    options: [
      'Build a Matrix report using a custom summary formula',
      'Create an Accounts report and add a Cross Filter configured as "Accounts without Cases"',
      'Create a Joined report using separate picklist groups',
      'Deploy a validation rule checking case identifiers'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Cross filters allow you to isolate records by checking for the absence of related child entries, solving this scenario natively without extra code.'
  },
  {
    id: 'reports-14',
    text: 'An executive wants a sales dashboard to display individual metrics to team leads, but they must be prevented from seeing each other\'s pipeline results. The manager wants to avoid creating multiple dashboards. What should be built?',
    topic: 'Reports and Dashboards',
    options: [
      'Configure a Joined report with private folders',
      'Set up a Dynamic Dashboard with the running user configured as "The dashboard viewer"',
      'Write a validation rule restricting user access parameters',
      'Deploy an owner-based sharing rule on dashboard items'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Dashboards resolve this by calculating widget visualizations contextually based on the logged-in user\'s sharing access levels.'
  },
  {
    id: 'reports-15',
    text: 'A marketing coordinator needs to classify lead records into "Small," "Medium," or "Large" groups based on their Employee Count field values within a report, without creating any custom admin fields. What feature addresses this?',
    topic: 'Reports and Dashboards',
    options: [
      'Add a Bucket Field to the report, defining the number thresholds for each category',
      'Write a Custom Summary Formula field inside the object columns',
      'Deploy a dashboard filter targeting text characters',
      'Create a cross-object formula on the Lead object'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Bucket fields allow users to group numeric ranges or picklists into customized report categories on the fly.'
  },
  {
    id: 'reports-16',
    text: 'A finance manager needs a monthly report that calculates the average commission paid out, grouped by product family, but also requires a row subtotal calculating the percentage difference between groups. What tool path handles this?',
    topic: 'Reports and Dashboards',
    options: [
      'Configure a Tabular report using cross-object logic',
      'Create a Summary Report by product family and add a Custom Summary Formula evaluating the metrics at the group level',
      'Deploy a validation rule checking financial numbers',
      'Export the logs via Data Loader to evaluate fields manually'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Summary Formulas excel at evaluating group-level mathematical relationships over summary columns.'
  },
  {
    id: 'reports-17',
    text: 'A user reports that they cannot create a report linking a custom Asset object with its parent Account record because the asset fields do not show up in the report builder selection menu. What should the administrator check first?',
    topic: 'Reports and Dashboards',
    options: [
      'The custom object validation rule configurations',
      'Whether the "Allow Reports" checkbox is enabled on the Asset custom object definition settings',
      'The global compact layout allocation parameters',
      'The role hierarchy level of the user profile'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom objects are completely hidden from the report builder framework until the "Allow Reports" setting is enabled on the object metadata setup.'
  },
  {
    id: 'reports-18',
    text: 'An administrator updates folder sharing permissions to give a sales team lead "View" access to a report folder. The lead reports they still cannot move or delete reports inside that folder. How should this be resolved?',
    topic: 'Reports and Dashboards',
    options: [
      'Modify field-level security constraints on the profile',
      'Upgrade the folder sharing access for the sales team lead from "View" to "Manage"',
      'Write a validation rule restricting folder file moves',
      'Reassign the user role hierarchy level higher'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "Manage" folder permission level is required to organize, rename, delete, or modify report layouts within shared spaces.'
  },
  {
    id: 'reports-19',
    text: 'A regional manager requests a single weekly printout containing open leads, closed-won deals, and active service cases grouped by account owner. What reporting layout meets this requirement efficiently?',
    topic: 'Reports and Dashboards',
    options: [
      'A series of three separate Tabular reports placed in separate zip files',
      'A Joined Report containing three blocks configured with their respective report types, grouped by a common Account Owner field',
      'A Matrix report running custom summary formulas client-side',
      'An outbound messaging rule exporting XML streams daily'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Joined reports allow you to combine multiple distinct sub-reports side-by-side as long as they share a common grouping field.'
  },
  {
    id: 'reports-20',
    text: 'A user wants to place a report chart component onto their desktop Home Page view. When they look for the chart, it does not appear in the selection panel. What layout structure must the report maintain?',
    topic: 'Reports and Dashboards',
    options: [
      'The report must be formatted as a Tabular report with zero filters',
      'The report must be a Summary or Matrix report and contain an active chart component saved within a shared folder',
      'The report must rely exclusively on cross-object lookup formulas',
      'The report must be managed inside a private user folder structure'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To display a report chart on homepages or dashboards, the source report must be a grouped summary or matrix report that includes a saved chart component.'
  },

  {
    id: 'integration-1',
    text: 'Which architectural framework uses REST API integrations as its core communication pattern?',
    topic: 'Integration',
    options: [
      'Lightweight JSON payload transmission over standard HTTP protocols',
      'Strict XML schemas verified by WSDL file definitions exclusively',
      'Direct client-side database table socket linking operations',
      'Outbound messaging engines emitting binary attachments'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'REST APIs are lightweight, stateless services that primarily pass JSON or XML payloads over standard HTTP methods.'
  },
  {
    id: 'integration-2',
    text: 'What does a WSDL (Web Services Description Language) file accomplish within a SOAP API integration context?',
    topic: 'Integration',
    options: [
      'It tracks background error metrics inside debug panels',
      'It acts as an XML contract defining the exact methods, parameters, and structural constraints available in the SOAP service',
      'It compresses long text strings prior to data load routines',
      'It configures user single sign-on security access profiles'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A WSDL file is an XML document that outlines the strict contract and structural constraints for SOAP web service communications.'
  },
  {
    id: 'integration-3',
    text: 'Which feature allows an administrator to securely manage login credentials and authentication endpoints for external callouts without hardcoding keys in Apex?',
    topic: 'Integration',
    options: [
      'Remote Site Settings',
      'Named Credentials',
      'Custom Metadata Types',
      'Validation Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Named Credentials specify the callout endpoint URL and authentication parameters centrally, keeping secure access keys out of your code.'
  },
  {
    id: 'integration-4',
    text: 'What API type should be selected when you need to upload or modify large volumes of records (over 50,000) asynchronously?',
    topic: 'Integration',
    options: [
      'REST API',
      'SOAP API',
      'Bulk API 2.0',
      'Streaming API'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Bulk API 2.0 is optimized for processing high-volume datasets efficiently by chunking data loads in the background.'
  },
  {
    id: 'integration-5',
    text: 'What Salesforce integration feature broadcasts near-real-time event messages using a publisher-subscriber model based on the Pub/Sub API?',
    topic: 'Integration',
    options: [
      'Outbound Messaging',
      'Platform Events',
      'External Services',
      'Named Credentials'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Platform Events use a message-bus framework to broadcast real-time events, decoupling publishers and subscribers.'
  },
  {
    id: 'integration-6',
    text: 'What configuration is required under "Remote Site Settings" before an Apex class can successfully execute an HTTP callout?',
    topic: 'Integration',
    options: [
      'The external system\'s user profile credentials must be imported',
      'The target external endpoint URL domain must be whitelisted',
      'A WSDL file schema validation sweep must be executed',
      'The object OWD settings must be switched to public status'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Remote Site Settings whitelist destination URLs, preventing malicious or unauthorized code-driven data exports.'
  },
  {
    id: 'integration-7',
    text: 'Which HTTP method should be used in a custom REST API class to create a new record in Salesforce?',
    topic: 'Integration',
    options: [
      '@HTTPGet',
      '@HTTPPost',
      '@HTTPPut',
      '@HTTPDelete'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `@HTTPPost` annotation maps incoming HTTP POST requests to an Apex method, typically used to add new database rows.'
  },
  {
    id: 'integration-8',
    text: 'What type of authentication standard is commonly used to authorize secure server-to-server API connections in Salesforce integrations without exposing user passwords?',
    topic: 'Integration',
    options: [
      'Basic Auth text keys',
      'OAuth 2.0 framework',
      'SAML assertion parameters',
      'LDAP directory verification'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OAuth 2.0 is the standard token-based framework used across Salesforce APIs to handle app authorization securely.'
  },
  {
    id: 'integration-9',
    text: 'What does the Salesforce Streaming API use to push near-real-time record modifications to client user interfaces?',
    topic: 'Integration',
    options: [
      'Continuous HTTP short-polling requests',
      'Bayeux protocol and CometD streaming connections for push events',
      'Asynchronous batch apex trigger sweeps every hour',
      'WSDL validation files parsing tracking matrices'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Streaming API uses CometD and long-polling mechanisms to push immediate event alerts to client listeners.'
  },
  {
    id: 'integration-10',
    text: 'Which tool allows administrators to declartively convert an external OpenAPI JSON schema into a reusable action inside Flow Builder without writing Apex code?',
    topic: 'Integration',
    options: [
      'Named Credentials manager',
      'External Services',
      'Change Data Capture',
      'Data Loader CLI'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'External Services consume OpenAPI specifications to expose outside API methods as declarative Flow components.'
  },
  {
    id: 'integration-11',
    text: 'What is the purpose of enabling Change Data Capture (CDC) on a Salesforce sObject layout?',
    topic: 'Integration',
    options: [
      'To encrypt personal field data fields at rest',
      'To automatically broadcast event messages whenever a record is created, updated, or deleted',
      'To prevent recursive execution errors inside triggers',
      'To run nightly data backups automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Change Data Capture publishes real-time change events for data changes, letting external systems stay in sync.'
  },
  {
    id: 'integration-12',
    text: 'What standard error code is returned by an HTTP response if the authorization credentials passed inside an integration request are missing or incorrect?',
    topic: 'Integration',
    options: [
      '400 Bad Request',
      '401 Unauthorized',
      '404 Not Found',
      '500 Internal Server Error'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `401 Unauthorized` response status code indicates the call out request has failed authentication validations.'
  },
  {
    id: 'integration-13',
    text: 'A developer needs to write an Apex class that retrieves order metrics from an external inventory database via an HTTP GET request. They want to ensure endpoint updates do not break their code. What tool path should be implemented?',
    topic: 'Integration',
    options: [
      'Hardcode the full URL string inside the trigger logic loops',
      'Configure a Named Credential specifying the target endpoint URL, and reference the credential path in the Apex callout',
      'Generate a SOAP WSDL contract layout file',
      'Write a validation rule checking URL characters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using Named Credentials simplifies callout maintenance by centralizing endpoint URLs and authentication details outside of Apex.'
  },
  {
    id: 'integration-14',
    text: 'An administrator needs to ingest a weekly roster file containing 450,000 employee update lines from an external system. They need to avoid hitting API limit errors during the transfer. What API should they use?',
    topic: 'Integration',
    options: [
      'REST API using parallel endpoints',
      'SOAP API using WSDL mapping matrices',
      'Bulk API 2.0 configured inside an asynchronous data stream',
      'Streaming API monitoring active push loops'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Bulk API 2.0 is designed for high-volume transactions, processing massive data sets efficiently in the background.'
  },
  {
    id: 'integration-15',
    text: 'A company needs their internal ERP tool to receive an immediate tracking notification whenever a new account is added to Salesforce. The notification must contain specific structured variables. What tool is best suited for this?',
    topic: 'Integration',
    options: [
      'A custom validation rule checking account columns',
      'Define a custom Platform Event, and configure a Record-Triggered Flow to publish the event when an account is created',
      'An outbound batch apex job scheduled nightly',
      'Deploy a cross-object formula tracking account strings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Platform Events handle these scenarios by broadcasting structured event payloads in near-real-time across enterprise channels.'
  },
  {
    id: 'integration-16',
    text: 'A developer builds an integration that suddenly throws a "System.CalloutException: Unauthorized endpoint" error during sandbox testing. What configuration fix should the administrator check first?',
    topic: 'Integration',
    options: [
      'The organization profile password complexity settings',
      'Whether the endpoint URL domain is whitelisted in Remote Site Settings or Named Credentials',
      'The active validation rule configurations on the triggering record',
      'The object-level sharing defaults parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce blocks HTTP callouts to arbitrary domains unless they are explicitly whitelisted in Remote Site Settings or Named Credentials.'
  },
  {
    id: 'integration-17',
    text: 'An integration team needs to expose an Apex method to an external system so it can receive text parameters and update an asset record. The external system uses a lightweight REST architecture. How should the Apex method be annotated?',
    topic: 'Integration',
    options: [
      '@InvocableMethod public static void updateAsset()',
      '@RestResource(urlMapping=\'/updateAsset/*\') and @HttpPost on the method definition',
      '@AuraEnabled(cacheable=true) public static string updateAsset()',
      'public class updateAsset extends Database.Batchable'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `@RestResource` annotation paired with `@HttpPost` exposes custom Apex logic as a callable REST web service endpoint.'
  },
  {
    id: 'integration-18',
    text: 'A business process demands that whenever an opportunity is updated in Salesforce, an external legacy tool must receive a structured XML message containing record values. What declarative feature handles this requirement?',
    topic: 'Integration',
    options: [
      'Workflow Action Outbound Messaging',
      'External Services canvas mapping',
      'Bulk API text data transfers',
      'Validation rule error formulas'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Outbound Messaging automatically transmits structured XML record notifications over secure endpoints asynchronously.'
  },
  {
    id: 'integration-19',
    text: 'An architectural team wants to build a flow that checks shipping prices from a vendor API mid-process. The vendor provides a standard OpenAPI JSON file describing their endpoints. How can this be built without writing code?',
    topic: 'Integration',
    options: [
      'Write a validation rule checking vendor strings',
      'Create an External Service by uploading the vendor\'s OpenAPI schema, and invoke the generated action directly inside the flow',
      'Deploy a continuous streaming API listener thread',
      'Reassign the user profile access layers higher'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'External Services consume OpenAPI files to turn external REST actions into declarative, drag-and-drop elements within Flow Builder.'
  },
  {
    id: 'integration-20',
    text: 'A developer notice that an integration payload containing special characters fails validation checks. They want to strip out formatting variations during mapping tasks. What utility should be added to the code?',
    topic: 'Integration',
    options: [
      'A series of cross-object lookup formulas',
      'JSON parsing methods like JSON.deserialize or standard string replacement functions inside the Apex integration controller',
      'A validation rule checking character string constraints',
      'A change data capture stream monitoring changes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using the native `JSON` parsing class methods in Apex allows developers to clean, format, and structure incoming payloads safely.'
  },

  {
    id: 'test-1',
    text: 'What is the absolute minimum line coverage percentage required by Salesforce for all custom Apex code before it can be successfully deployed to production?',
    topic: 'Apex Testing',
    options: [
      '50 percent',
      '75 percent',
      '90 percent',
      '100 percent'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce requires an overall average code coverage of at least 75 percent across all Apex classes and triggers during production deployment validation.'
  },
  {
    id: 'test-2',
    text: 'Which annotation should be applied to an Apex method to indicate it is used to generate reusable test records for all test cases inside the class?',
    topic: 'Apex Testing',
    options: [
      '@isTest',
      '@testSetup',
      '@Future',
      '@AuraEnabled'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Methods annotated with `@testSetup` run first before any individual test executions, creating data that rolls back automatically between test runs.'
  },
  {
    id: 'test-3',
    text: 'What code statement should be used inside an Apex unit test to confirm that an expected variable value matches the actual execution outcome?',
    topic: 'Apex Testing',
    options: [
      'System.assert(true)',
      'Assert.areEqual(expected, actual)',
      'System.debug(actual)',
      'Database.rollback()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The modern `Assert.areEqual()` method checks whether the expected and actual parameters match, throwing a test failure if they deviate.'
  },
  {
    id: 'test-4',
    text: 'What programmatic block isolates code execution inside a unit test to provide a separate, clean set of governor limits specifically for that section?',
    topic: 'Apex Testing',
    options: [
      'try-catch-finally blocks',
      'Test.startTest() and Test.stopTest()',
      'System.runAs() wrapper hooks',
      'Database.setSavepoint()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `Test.startTest()` and `Test.stopTest()` sequence resets asynchronous boundaries and governor limits for code enclosed within the block.'
  },
  {
    id: 'test-5',
    text: 'Which method enables a developer to run Apex test execution steps under the security context of a specific active user profile?',
    topic: 'Apex Testing',
    options: [
      'Test.setMock()',
      'System.runAs()',
      'UserInfo.getUserId()',
      'Test.setCurrentPage()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: '`System.runAs()` lets you execute test blocks as a specified User record, enforcing their specific sharing rules and record visibility.'
  },
  {
    id: 'test-6',
    text: 'What occurs by default to any real operational record data created within an active Apex unit test method context?',
    topic: 'Apex Testing',
    options: [
      'It is saved permanently into the production database tables',
      'It is automatically isolated and rolled back at the completion of the test method execution',
      'It triggers real workflow and assignment notifications out to users',
      'It causes an immediate deployment compilation crash exception'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Apex test execution features automatic rollback behavior, isolating data creation in a transient buffer that discards all changes upon completion.'
  },
  {
    id: 'test-7',
    text: 'What interface must be implemented within an Apex utility class to simulate mock HTTP response callouts during integration tests?',
    topic: 'Apex Testing',
    options: [
      'WebServiceMock',
      'HttpCalloutMock',
      'Schedulable',
      'Queueable'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `HttpCalloutMock` interface allows a test class to return custom HTTP responses without attempting an live connection over network domains.'
  },
  {
    id: 'test-8',
    text: 'What parameter flag must be explicitly set on the `@isTest` class declaration if a test method absolutely requires reading existing data records straight from the live organization tables?',
    topic: 'Apex Testing',
    options: [
      '@isTest(SeeAllData=true)',
      '@isTest(cacheable=true)',
      '@isTest(UserMode=true)',
      '@isTest(Isolated=false)'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Setting `SeeAllData=true` grants a test class visibility into the org\'s live operational records, though using isolated mock setups remains the best practice.'
  },
  {
    id: 'test-9',
    text: 'Which standard object records can be accessed within an Apex unit test class by default without requiring a special data visibility attribute override?',
    topic: 'Apex Testing',
    options: [
      'Account and Contact records',
      'User, Profile, Organization, and RecordType records',
      'Custom object historical log items',
      'Opportunity and Lead entries'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce permits access to structural metadata records (like Profile, User, and RecordType) globally within unit tests without setting `SeeAllData=true`.'
  },
  {
    id: 'test-10',
    text: 'What happens if a developer places code lines after the "Test.stopTest()" declaration within an Apex test method layout?',
    topic: 'Apex Testing',
    options: [
      'The code lines are skipped entirely during execution parameters',
      'The execution returns to the baseline transactional limits that were active before Test.startTest() was called',
      'The system throws a deployment validation exception crash',
      'All pending asynchronous operations are immediately aborted'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: '`Test.stopTest()` forces all queued asynchronous actions (like future or queueable jobs) to collect and execute immediately before returning to the original limit boundaries.'
  },
  {
    id: 'test-11',
    text: 'Which annotation parameter can be appended to a test class definition string to execute tests sequentially rather than concurrently, avoiding database locking exceptions?',
    topic: 'Apex Testing',
    options: [
      '@isTest(Parallel=false)',
      '@isTest(isParallel=false)',
      'isTest(Sequential=true)',
      '@isTest(LockRecords=true)'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The `@isTest(Parallel=false)` annotation forces tests inside that class to execute sequentially, which is useful for avoiding database lock contention.'
  },
  {
    id: 'test-12',
    text: 'What programmatic utility method should be used within a test class to verify if an asynchronous batch job has successfully placed rows into the queue?',
    topic: 'Apex Testing',
    options: [
      'System.checkQueueStatus()',
      'AsyncApexJob database query checks',
      'Test.getBatchLimit()',
      'System.assert(AsyncBatch)'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Querying the standard `AsyncApexJob` table programmatically reveals the state, processing phases, and errors of async tasks like Batch or Queueable jobs.'
  },
  {
    id: 'test-13',
    text: 'A developer writes a custom account utility trigger but notices their production deployment package fails code validation blocks due to a 60 percent line count coverage flag. How should this be resolved?',
    topic: 'Apex Testing',
    options: [
      'Modify field-level security constraints to expose columns',
      'Write comprehensive unit test classes that mock business paths, expanding overall test execution metrics to pass the 75 percent ceiling',
      'Deactivate the validation rules across the environment during deployment updates',
      'Re-execute the package deployment using the Data Import Wizard utility'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Adding unit tests that execute your custom trigger methods across different data scenarios pushes line coverage metrics past the mandatory 75% deployment threshold.'
  },
  {
    id: 'test-14',
    text: 'An administrator needs to guarantee that ten separate test methods inside a class can utilize the same 50 mock products without duplicating record generation blocks inside each method. What optimization should be implemented?',
    topic: 'Apex Testing',
    options: [
      'Annotate a single data construction method with the `@testSetup` directive within the class framework',
      'Set the `@isTest(SeeAllData=true)` parameter attribute string globally',
      'Deploy an external integration callout script to fetch records dynamically',
      'Construct a validation formula tracking serial parameters'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A `@testSetup` method runs once per class execution to cache a foundational test dataset, reducing redundant record generation lines and accelerating test runtime.'
  },
  {
    id: 'test-15',
    text: 'A business process requires a validation check evaluating commission payout math inside a controller logic class. The test runs, but the developer wants to confirm the outcome explicitly. What code statement completes this audit step?',
    topic: 'Apex Testing',
    options: [
      'System.debug(commissionValue)',
      'Assert.areEqual(expectedPayout, calculatedPayout, \'Math mismatch detected\')',
      'Database.setSavepoint() parameters',
      'Test.startTest() blocks'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Assert calls compare expected and actual values, serving as the formal programmatic verification step in a standard unit test layout.'
  },
  {
    id: 'test-16',
    text: 'An integration class executes an external invoice lookup. During unit testing, the class throws a fatal "System.TypeException: Callouts are not allowed from test methods" exception. How should the developer modify their test class?',
    topic: 'Apex Testing',
    options: [
      'Enable the `SeeAllData=true` parameter attribute flag on the test class definition string',
      'Create a separate class implementing `HttpCalloutMock`, and register it using `Test.setMock()` within the test execution path',
      'Wrap the callout method loop in a traditional try-catch framework',
      'Deactivate Remote Site Settings domains in setup parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Registering an `HttpCalloutMock` implementation via `Test.setMock()` intercepts network callouts, instructing the framework to return static test responses instead of attempting an external connection.'
  },
  {
    id: 'test-17',
    text: 'A developer needs to verify that an account automation trigger behaves correctly when a low-privilege support user attempts to edit fields. What framework tool isolates this profile check?',
    topic: 'Apex Testing',
    options: [
      'Test.startTest() execution limits reset',
      'System.runAs() wrapper block enclosing the target update statement',
      'Profile configuration layout field adjustments',
      'Validation rule text mapping checks'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: '`System.runAs()` lets you execute code blocks under a specific User record\'s security context, which is perfect for testing profile permissions and sharing boundaries.'
  },
  {
    id: 'test-18',
    text: 'A test method needs to verify that a Queueable job completes its database modifications correctly. The developer notices that assertions run before the job executes. How should the processing boundaries be managed?',
    topic: 'Apex Testing',
    options: [
      'Place the Queueable invocation callout within a `Test.startTest()` and `Test.stopTest()` block sequence',
      'Add a static variable flag checking execution iterations',
      'Convert the Queueable job definition back into a synchronous future routine',
      'Set the organization-wide defaults configuration to Public Read Only'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Enclosing asynchronous calls within `Test.startTest()` and `Test.stopTest()` blocks forces the engine to run all queued jobs before moving past the stop endpoint.'
  },
  {
    id: 'test-19',
    text: 'During a data load validation test, an Apex script needs to confirm that a trigger throws a custom validation exception when missing essential parameters. How should the assertion check be captured?',
    topic: 'Apex Testing',
    options: [
      'Wrap the DML statement in a try block, and use a catch block to intercept the DmlException and assert its error message content',
      'Use a validation formula checking record length variables',
      'Export the error logging variables into external metadata spaces',
      'Configure a case assignment rule mapping percentage rules'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Wrapping the failing action in a try-catch block lets you catch the expected exception safely, allowing you to assert that the error occurred and check its message content.'
  },
  {
    id: 'test-20',
    text: 'A developer notices that their test classes frequently fail because they conflict over shared custom setting values when running concurrently. What setting can prevent this interaction issue?',
    topic: 'Apex Testing',
    options: [
      'Change object sharing defaults to Private fields',
      'Add the `@isTest(Parallel=false)` annotation attribute modifier onto the class header string',
      'Deploy the data parameters using standard Data Import Wizard tasks',
      'Configure a transaction finalizer routine mapping text arrays'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Applying `@isTest(Parallel=false)` forces tests inside the class to run sequentially, which prevents concurrent data row conflicts.'
  },

  {
    id: 'org-1',
    text: 'Which Salesforce command-line tool is the primary engine used to drive source-driven development, execute package retrievals, and automate scripting tasks?',
    topic: 'Org Development',
    options: [
      'Salesforce CLI (sf command architecture)',
      'Data Loader Terminal interface',
      'Workbench Metadata Toolset',
      'Ant Migration tool framework'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Salesforce CLI is the official command-line interface used to manage metadata deployments, run tests, and orchestrate source-driven development.'
  },
  {
    id: 'org-2',
    text: 'What is a Scratch Org within the modern Salesforce development lifecycle framework?',
    topic: 'Org Development',
    options: [
      'A full copy sandbox used to store production file attachments',
      'A highly configurable, temporary, and empty Salesforce environment used primarily for source-driven development and automated testing tracking lines',
      'A local database engine running entirely within browser storage cache allocations',
      'An encrypted backup archive copy of organization metadata bundles'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scratch orgs are short-lived, empty environments that developers spin up programmatically to test isolated feature code branches.'
  },
  {
    id: 'org-3',
    text: 'Which deployment environment type copies all metadata configuration settings but includes zero operational database record tables by default?',
    topic: 'Org Development',
    options: [
      'Full Sandbox',
      'Developer Sandbox / Developer Pro Sandbox',
      'Partial Copy Sandbox',
      'Production Environment Instance'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Developer and Developer Pro sandboxes copy production configuration metadata completely, but leave out transactional record data tables.'
  },
  {
    id: 'org-4',
    text: 'What type of deployment framework tracks system configurations as text-based XML layout files organized inside source control repositories?',
    topic: 'Org Development',
    options: [
      'Data Loader CSV files matrices',
      'Metadata API package bundles (Source Format)',
      'Schema Builder canvas mapping structures',
      'Validation Rule character logic expressions'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Metadata API represents Salesforce components as structured XML files, making it easy to store configurations in source control tools like Git.'
  },
  {
    id: 'org-5',
    text: 'Which sandbox type copies all production configuration metadata alongside a defined slice of record tables using a specialized storage filter map?',
    topic: 'Org Development',
    options: [
      'Developer Sandbox',
      'Partial Copy Sandbox',
      'Scratch Org instance',
      'Developer Pro Sandbox'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Partial Copy sandboxes include production configuration metadata along with a sample of record data defined by a sandbox template.'
  },
  {
    id: 'org-6',
    text: 'What tool allows administrators to select, bundle, and track metadata changes directly inside the Setup interface to move configurations between sandboxes?',
    topic: 'Org Development',
    options: [
      'Change Sets',
      'Data Loader',
      'DevOps Center tracking channels',
      'Schema Builder'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Change Sets offer a declarative, point-and-click way to migrate configuration changes between connected sandbox environments.'
  },
  {
    id: 'org-7',
    text: 'What does a source-control branch represent within a standard Git-based dev lifecycle environment?',
    topic: 'Org Development',
    options: [
      'A scheduled background batch job execution loop path',
      'An isolated, parallel timeline workspace used to develop feature code changes without affecting the primary source trunk',
      'A group of profiles permitted to modify object sharing tables',
      'A compressed layout archive matching validation formulas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Branches create an isolated space in source control systems where developers can work on new features without impacting the main codebase timeline.'
  },
  {
    id: 'org-8',
    text: 'What must be true about the connection pathway before a Change Set can successfully move configurations between two sandboxes?',
    topic: 'Org Development',
    options: [
      'Both organizations must share identical user profile usernames',
      'A formal Deployment Connection relationship must be established and authorized between the source and target organizations in Setup',
      'The organization-wide default setting must be set to Public Read/Write',
      'Validation rules must be deactivated across both platforms'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Change Sets require an authorized Deployment Connection between environment instances before metadata can travel between them.'
  },
  {
    id: 'org-9',
    text: 'Which framework tool provides a visual interface to manage development tasks, track changes in Git repositories, and deploy metadata using clicks rather than command strings?',
    topic: 'Org Development',
    options: [
      'Salesforce DevOps Center',
      'Change Sets manager panel',
      'Data Import Wizard workbench',
      'Ant Migration engine canvas'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Salesforce DevOps Center delivers a collaborative visual interface that simplifies metadata tracking and deployments through modern source control pipelines.'
  },
  {
    id: 'org-10',
    text: 'What baseline configuration file defines the components, objects, and packages included in a standard Metadata API deployment package?',
    topic: 'Org Development',
    options: [
      'sfdx-project.json',
      'package.xml',
      'config.properties',
      'manifest.txt'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The `package.xml` manifest file specifies the exact metadata types and component names to include in a deployment or retrieval bundle.'
  },
  {
    id: 'org-11',
    text: 'What is a critical advantage of using a Full Sandbox compared to a Partial Copy Sandbox?',
    topic: 'Org Development',
    options: [
      'Full sandboxes execute asynchronous batch actions 5 times faster',
      'Full sandboxes duplicate production metadata and all record data tables exactly, making them ideal for staging and performance testing',
      'Full sandboxes do not require validation rule checks during code updates',
      'Full sandboxes can be refreshed every 5 days automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Full sandboxes capture a complete snapshot of both production metadata and record data tables, making them perfect environments for load testing and final deployment checks.'
  },
  {
    id: 'org-12',
    text: 'Which command parameter is used in the Salesforce CLI toolset to validate a metadata package deployment without actually committing changes to the target database?',
    topic: 'Org Development',
    options: [
      '--checkonly',
      '--validate',
      '--dryrun',
      '--testlevel'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The `--checkonly` flag validates the deployment package and runs tests without committing metadata modifications to the environment database.'
  },
  {
    id: 'org-13',
    text: 'A developer needs to quickly test an isolated fix for a custom LWC layout without impacting shared sandbox configurations or colliding with team code lines. What environment type should they spin up?',
    topic: 'Org Development',
    options: [
      'A Full Sandbox environment instance',
      'A temporary Scratch Org generated programmatically via the Salesforce CLI',
      'A Partial Copy Sandbox configuration template',
      'A new staging production instance block'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scratch orgs provide isolated, short-lived environments that let developers build and test code variations independently.'
  },
  {
    id: 'org-14',
    text: 'An administrator attempts to use an outbound Change Set to deploy a new custom field from their sandbox to production, but the deployment fails because a dependent validation rule is missing from the bundle. How should this be resolved?',
    topic: 'Org Development',
    options: [
      'Deactivate the target validation rules inside the sandbox layout parameters',
      'Clone the outbound Change Set, add the missing validation rule component, and upload the updated version to production',
      'Delete the custom field record rows out of production tables',
      'Reassign the user deployment connections to a high assurance profile'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Because uploaded Change Sets cannot be edited, you must clone the bundle, add the missing dependencies, and re-upload the new package.'
  },
  {
    id: 'org-15',
    text: 'A large enterprise development team notices frequent code collisions when merging feature tracks into their main branch. They want to switch to a visual tool that automates Git branch updates natively. What tool addresses this?',
    topic: 'Org Development',
    options: [
      'Data Loader terminal scripting loops',
      'Salesforce DevOps Center connected to their repository pipeline',
      'Standard Change Sets layout tracking blocks',
      'Apex unit test runner panels'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce DevOps Center automates Git tracking behind a declarative visual interface, reducing merge conflicts across engineering tracks.'
  },
  {
    id: 'org-16',
    text: 'An engineering team wants to run performance testing on an integration callout class using production data volume scales, but they must keep customer files hidden from test accounts. What environment setup meets this requirement?',
    topic: 'Org Development',
    options: [
      'A Developer Pro Sandbox using manually entered values',
      'A Full Sandbox combined with data masking tools to secure sensitive fields while maintaining production scale data volumes',
      'A programmatically generated Scratch Org',
      'A standard production staging patch session'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Full sandboxes deliver the data scale needed for performance testing, while data masking tools keep real personal data secure.'
  },
  {
    id: 'org-17',
    text: 'A release manager wants to automate their sandbox deployment pipeline so that pushing changes to a specific Git branch kicks off an automated verification test suite. What capability should they integrate?',
    topic: 'Org Development',
    options: [
      'Continuous Integration / Continuous Deployment (CI/CD) pipelines utilizing the Salesforce CLI',
      'Change Sets configuration loops scheduled via Setup',
      'A series of cross-object formula tracking fields',
      'Data Loader extraction parameters parsing CSV lines'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'CI/CD pipelines paired with the Salesforce CLI automate validation testing and deployments based on code branch updates.'
  },
  {
    id: 'org-18',
    text: 'A developer needs to pull down a local text copy of a custom profile definition to fix an XML error. Which tool parameter provides this extraction capability?',
    topic: 'Org Development',
    options: [
      'Data Import Wizard file parsing tasks',
      'Salesforce CLI project source retrieval command (sf project retrieve start)',
      'Schema Builder canvas mapping updates',
      'Outbound messaging event notification scripts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'CLI retrieval commands download live environment configurations into local, text-based XML files for local editing and tracking.'
  },
  {
    id: 'org-19',
    text: 'An administrator needs to test an updated set of high-volume flow automations against a consistent sample of 10,000 real account files without incurring the long refresh delays of a full sandbox. What sandbox choice fits best?',
    topic: 'Org Development',
    options: [
      'Developer Sandbox running manual data key inputs',
      'Partial Copy Sandbox initialized with a tailored sandbox data template',
      'Scratch Org generated with empty database spaces',
      'Production workspace testing session during off-business hours'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Partial Copy sandboxes populate a structured sample of real record data, striking a balance between data scale and quick refresh times.'
  },
  {
    id: 'org-20',
    text: 'During a production change package validation, the deployment fails because it cannot find a new custom object reference that was built inside the source sandbox. What should the release team verify first?',
    topic: 'Org Development',
    options: [
      'The field-level security ceiling parameters on target users',
      'Whether the parent custom object metadata element was included in the deployment bundle along with the field attributes',
      'The global session timeout settings profile parameters',
      'The custom validation rule character math limits'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Metadata deployments fail if components reference dependent objects or attributes that are missing from the deployment bundle.'
  },

  {
    id: 'omni-1',
    text: 'Which OmniStudio component provides a guided, multi-step user interface to step users through complex business processes?',
    topic: 'OmniStudio Development Tools',
    options: [
      'OmniScript',
      'DataRaptor',
      'Integration Procedure',
      'FlexCard'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'OmniScripts deliver high-performance, guided interactive pathways to walk users through step-by-step business workflows.'
  },
  {
    id: 'omni-2',
    text: 'What type of OmniStudio tool is best suited to display a condensed summary of key contextual record metrics at a glance using a modular visual canvas?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Turbo Extract',
      'FlexCard',
      'Integration Procedure block',
      'OmniScript Step'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'FlexCards build the foundational block UI elements that display summaries, contextual links, and actions on a single card layout.'
  },
  {
    id: 'omni-3',
    text: 'Which OmniStudio data service should be used to retrieve data exclusively from a single Salesforce sObject type quickly with optimal performance?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Extract',
      'DataRaptor Turbo Extract',
      'DataRaptor Transform',
      'DataRaptor Load'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DataRaptor Turbo Extract is specifically optimized to read and pull fields from a single source object frame without nested object relationship overhead.'
  },
  {
    id: 'omni-4',
    text: 'What type of DataRaptor must be configured to take client data or an incoming JSON payload and write it back into Salesforce object fields?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Extract',
      'DataRaptor Load',
      'DataRaptor Transform',
      'DataRaptor Turbo Extract'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DataRaptor Loads (also called Turbo or standard interface loads) map incoming data structures into Salesforce records during DML update operations.'
  },
  {
    id: 'omni-5',
    text: 'What OmniStudio component is designed to run completely on the server side to bundle multiple data actions, cache queries, and process complex APIs in a single transaction path?',
    topic: 'OmniStudio Development Tools',
    options: [
      'OmniScript Designer canvas',
      'Integration Procedure',
      'FlexCard Action Manager',
      'DataRaptor Transform'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Integration Procedures orchestrate server-side data actions asynchronously or synchronously, improving rendering speeds by limiting client network round-trips.'
  },
  {
    id: 'omni-6',
    text: 'What type of DataRaptor changes data structure from one format to another, such as converting a complex nested JSON structure into an XML format, without hitting the database?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Extract',
      'DataRaptor Turbo Extract',
      'DataRaptor Transform',
      'DataRaptor Load'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'DataRaptor Transforms manipulate and map data structures completely in memory without performing database read or write calls.'
  },
  {
    id: 'omni-7',
    text: 'What does a "Reusable OmniScript" configuration allow a developer to accomplish?',
    topic: 'OmniStudio Development Tools',
    options: [
      'It automatically exports data records into local sheet archives',
      'It allows embedding an active OmniScript structure inside multiple parent OmniScripts to reuse steps across processes',
      'It completely removes code coverage check requirements',
      'It bypasses validation rules natively'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Flagging an OmniScript as reusable permits it to be nested inside other scripts as a standard element step, cutting down on redundant development.'
  },
  {
    id: 'omni-8',
    text: 'Which element should be placed in an Integration Procedure structure to temporarily store data in cache clusters, reducing server load?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Cache Block',
      'Conditional Block',
      'DataRaptor Post Action',
      'Response Action'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Cache Blocks in Integration Procedures store transient session data in the platform\'s cache layer to cut down on redundant database hits.'
  },
  {
    id: 'omni-9',
    text: 'What type of element inside an OmniScript template is explicitly used to group input fields into a single visual page layout layout window?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Step Element',
      'Block Element',
      'Action Element',
      'Formula Element'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A Step element represents a discrete user page or canvas screen layout within an interactive guided wizard workflow.'
  },
  {
    id: 'omni-10',
    text: 'Which standard utility option allows a developer to examine the input JSON, output data states, and exact performance durations of OmniStudio components step-by-step?',
    topic: 'OmniStudio Development Tools',
    options: [
      'OmniStudio OmniOut terminal',
      'OmniStudio Debug Workbench / Data Navigator',
      'Developer Console Log viewer',
      'Data Loader extraction summaries'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The built-in Debug utility allows designers to inspect active JSON states and step through execution phases during testing.'
  },
  {
    id: 'omni-11',
    text: 'What visual layout standard framework drives the out-of-the-box UI generation patterns of modern OmniScripts and FlexCards?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Lightning Web Components (LWC)',
      'Aura custom templates',
      'Legacy Visualforce tags',
      'Server-side PHP processing loops'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Modern OmniStudio components compile natively into highly efficient standard Lightning Web Components.'
  },
  {
    id: 'omni-12',
    text: 'What does the Industry Common Layer (ICL) provide within the Salesforce Public Sector Solutions (PSS) framework?',
    topic: 'OmniStudio Development Tools',
    options: [
      'A baseline server infrastructure to manage database locks',
      'Standardized data models, custom objects, and workflows tailored to regulatory business processes out of the box',
      'An automated code deployment pipeline framework',
      'An encrypted password mapping manager tool'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Industry Common Layer delivers baseline pre-configured industry data objects and capabilities, ensuring vertical compliance out of the box.'
  },
  {
    id: 'omni-13',
    text: 'A business requires an interface that lets customer support agents pull data fields from three different objects (Account, Case, and Asset) simultaneously in a single transaction. Which tool should be used?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Turbo Extract configured with joins',
      'A standard DataRaptor Extract configured with appropriate object relationship links',
      'A series of workflow rules running outbound messages',
      'A validation rule formula checking string attributes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Standard DataRaptor Extracts support multi-object paths, letting you crawl up and down relationship links to gather diverse field tables in a single operation.'
  },
  {
    id: 'omni-14',
    text: 'An administrator needs to quickly update an account layout to show a customer\'s recent loyalty point balance along with a dynamic action link to launch an upgrade process. What should they build?',
    topic: 'OmniStudio Development Tools',
    options: [
      'An Apex batch job checking variables nightly',
      'A custom FlexCard built via the OmniStudio designer canvas and dragged onto the record layout',
      'A series of cross-object formula columns',
      'A case assignment rule queue target definition'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'FlexCards excel at pulling contextual data, highlighting metrics, and providing action buttons within a single visual container.'
  },
  {
    id: 'omni-15',
    text: 'A developer needs to design a custom wizard that collects financial data from a client across five separate screens, applying custom tax calculation logic mid-process. What is the best tool approach?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Deploy an Apex after-save trigger class',
      'Create an OmniScript featuring Step components and an embedded Integration Procedure call',
      'Build a validation rule tracking number characters',
      'Export the logs via Data Loader sheets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OmniScripts manage multi-screen input wizards smoothly, while calling an Integration Procedure handles the backend calculations seamlessly.'
  },
  {
    id: 'omni-16',
    text: 'An operational manager notice that an active OmniScript takes up to 8 seconds to load record metrics because it executes three separate database queries over the client network. How should this be optimized?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Replicate the fields manually across standard pages',
      'Wrap the three queries inside a single Integration Procedure to handle the data fetching server-side in a single round-trip',
      'Convert the OmniScript step elements into validation formulas',
      'Change the object OWD settings to Public Read/Write'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Moving multiple data actions off the client and into an Integration Procedure consolidates queries into a single server-side step, cutting down on lag.'
  },
  {
    id: 'omni-17',
    text: 'During a public portal implementation, a developer notice that external applications send client data via a deeply nested JSON payload that does not match Salesforce schema structures. What should be built to ingest this data?',
    topic: 'OmniStudio Development Tools',
    options: [
      'A standard validation formula mapping array strings',
      'A DataRaptor Transform to flatten and restructure the JSON variables in memory before saving',
      'A junction object connecting lookup properties manually',
      'An outbound message script broadcasting XML fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DataRaptor Transforms manipulate data maps, converting mismatched JSON keys into clean structures that match target database schemas.'
  },
  {
    id: 'omni-18',
    text: 'A developer needs an OmniScript to update a contact record, but the save event fails because the input phone format is wrong. They want to check data validity before the database write step. What element path handles this check?',
    topic: 'OmniStudio Development Tools',
    options: [
      'A Formula or Messaging Element placed inside the Step definition canvas to run checks on the fly',
      'A custom validation rule checking layout background pixels',
      'A change data capture stream checking modifications',
      'An integration credential endpoint whitelisting parameter'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Formula and Messaging elements let you run validation checks right within the OmniScript interface, blocking users from moving forward if their entries fail criteria.'
  },
  {
    id: 'omni-19',
    text: 'Universal Containers wants to reuse an address validation step across three separate application wizards without copying individual layout items. How should this be designed?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Duplicate the address fields across all three wizard setups',
      'Build the validation block as an independent, Reusable OmniScript and nest it inside the parent scripts',
      'Create a cross-object lookup formula field on the parent table',
      'Configure a case assignment rule queue mapping variables'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Building a standalone, reusable OmniScript lets you plug the same step bundle across multiple parent layouts, streamlining maintenance.'
  },
  {
    id: 'omni-20',
    text: 'A developer notice that a FlexCard is rendering completely blank on a contact record layout page despite data existing in the record fields. What should they check first using the debugger toolset?',
    topic: 'OmniStudio Development Tools',
    options: [
      'The organization profile password complexity settings',
      'The FlexCard Data Source configuration parameters and the structural layout of the source JSON payload',
      'The active validation rule configurations on the contact record',
      'The object-level sharing defaults parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'FlexCards require their data source configuration paths to map accurately to incoming JSON keys, or the UI layout fields will fail to bind and display data.'
  },

  {
    id: 'ai-1',
    text: 'What is the main purpose of the Einstein Trust Layer within the Salesforce AI framework architecture?',
    topic: 'Agentforce & AI',
    options: [
      'To increase the maximum CPU timeout limit metrics for Apex classes',
      'To protect data privacy and compliance by masking sensitive fields, enforcing zero data retention, and screening for toxicity before payloads reach LLMs',
      'To automate change set deployments across sandboxes',
      'To verify single sign-on authentication handshake keys'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Einstein Trust Layer serves as a security gateway, scrubbing sensitive information, logging safety details, and preventing third-party LLMs from retaining corporate data.'
  },
  {
    id: 'ai-2',
    text: 'What is a "Prompt Template" inside the Prompt Builder workspace workspace canvas?',
    topic: 'Agentforce & AI',
    options: [
      'A library of custom CSS stylesheets to skin digital websites',
      'A reusable, text-based template configuration that structures instructions and safely merges live Salesforce record context to ground LLM queries',
      'An asynchronous apex job tracking system logs nightly',
      'A validation rule formula checking character parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Prompt Templates allow administrators to design structured instruction forms that securely fetch live CRM field values to give LLMs relevant context.'
  },
  {
    id: 'ai-3',
    text: 'What component of Agentforce handles AI-powered responses during customer interactions?',
    topic: 'Agentforce & AI',
    options: [
      'Service Replies',
      'OmniScript',
      'FlexCards',
      'DataRaptors'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Service Replies analyze incoming customer chat text against grounding articles to draft real-time service resolutions automatically.'
  },
  {
    id: 'ai-4',
    text: 'What is Agentforce in Salesforce primarily designed for?',
    topic: 'Agentforce & AI',
    options: [
      'Enhancing customer support with AI-driven service agents',
      'Managing backend databases',
      'Automating code deployments',
      'Creating custom reports'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Agentforce provides autonomous AI agents that handle service inquiries, answer questions, and execute workflows without manual human sorting.'
  },
  {
    id: 'ai-5',
    text: 'In Agentforce configuration, what is a "Topic"?',
    topic: 'Agentforce & AI',
    options: [
      'A category tracking dashboard chart graphics layouts',
      'A classification grouping that outlines a specific functional domain or job responsibility an autonomous agent is authorized to handle',
      'A validation rule error message text attribute string',
      'A metadata package compilation unit for change sets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Topics classify tasks for autonomous agents, defining distinct areas of responsibility (like billing help or booking orders) so they route inquiries correctly.'
  },
  {
    id: 'ai-6',
    text: 'What represents the process of "Grounding" within a generative AI prompt configuration framework?',
    topic: 'Agentforce & AI',
    options: [
      'Encrypting data cells before transmission loops complete',
      'Providing an LLM with specific, secure corporate context data (like active records or knowledge articles) to ensure responses are accurate and relevant',
      'Suspending a user profile due to login hours security violations',
      'Converting text values into geolocation decimal attributes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Grounding feeds real-time CRM data context to an LLM, reducing hallucinations and making sure responses are accurate and practical.'
  },
  {
    id: 'ai-7',
    text: 'What does the "Zero Data Retention" policy guarantee inside the Einstein Trust Layer framework?',
    topic: 'Agentforce & AI',
    options: [
      'The local browser cache memory is wiped automatically every 5 minutes',
      'External LLM vendors are legally and technically prevented from storing or using Salesforce prompt data to train their models',
      'The scratch org metadata values are deleted upon package commit actions',
      'The organization data loader records are skipped during weekly exports'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Zero Data Retention ensures that prompt text sent to external LLMs is processed in memory and discarded immediately, never saved by external vendors.'
  },
  {
    id: 'ai-8',
    text: 'Which feature allows an administrator to audit prompt performance, check token usage metrics, and review LLM responses inside Salesforce?',
    topic: 'Agentforce & AI',
    options: [
      'Einstein Audit Trail / Prompt History logs',
      'Data Loader extraction summaries sheets',
      'Schema Builder connection canvas logs',
      'Outbound messaging event notifications data'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Einstein Audit Trail logs prompt activity, showing administrators exactly what data went out, what came back, and how masking was applied.'
  },
  {
    id: 'ai-9',
    text: 'What type of Agentforce action allows an autonomous agent to invoke standard flows or custom Apex methods to complete tasks dynamically?',
    topic: 'Agentforce & AI',
    options: [
      'Agent Actions (Invocable Actions mapped to Topics)',
      'Validation Button Rules parameter scripts',
      'Compact Layout highlight block links',
      'Search Layout column allocation entries'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Agent Actions give autonomous agents functional tools, allowing them to launch flows, run Apex, or execute API steps to solve customer requests.'
  },
  {
    id: 'ai-10',
    text: 'In Agentforce, what component handles the reasoning step, determining what topic fits an incoming request and planning the sequence of actions needed?',
    topic: 'Agentforce & AI',
    options: [
      'Autonomous Reasoning Planner engine',
      'DataRaptor Transform module link',
      'OmniScript step branching element',
      'Workflow rule execution sequence tracker'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Autonomous Reasoning Planner serves as the agent\'s brain, analyzing user intents to match them to topics and map out the right actions.'
  },
  {
    id: 'ai-11',
    text: 'What does the "Data Masking" feature inside the Einstein Trust Layer accomplish during prompt generation tasks?',
    topic: 'Agentforce & AI',
    options: [
      'It completely removes lookups from dashboard tracking tables',
      'It automatically replaces sensitive personal information (PII, like SSNs or emails) with anonymous tokens before sending the text to the LLM',
      'It converts formula fields into global encrypted characters at rest',
      'It locks profile access layers during bulk ingestion steps'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Masking identifies and protects private details (like credit cards or phone numbers) by swapping them out with safe placeholders before data leaves the org.'
  },
  {
    id: 'ai-12',
    text: 'What is the main goal of prompt engineering when integrating with Agentforce?',
    topic: 'Agentforce & AI',
    options: [
      'To optimize AI responses for accuracy and relevance',
      'To create user interface layouts',
      'To automate Apex triggers',
      'To enhance report formatting'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Prompt engineering focuses on tuning instructions and grounding context to guide LLMs into producing reliable, brand-aligned answers.'
  },
  {
    id: 'ai-13',
    text: 'A customer support team wants their AI assistant to generate tailored summary notes automatically whenever an internal case is closed. The summary must reference specific case metrics. What should the administrator set up?',
    topic: 'Agentforce & AI',
    options: [
      'A matrix report layout with summary columns',
      'A Field Generation Prompt Template inside Prompt Builder, grounded with the active Case record context',
      'An Apex asynchronous batch job loop checking columns',
      'A custom validation rule checking text string lengths'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Field Generation templates let you combine instruction notes and field context to automatically draft summaries right onto record text areas.'
  },
  {
    id: 'ai-14',
    text: 'An enterprise wants to use generative AI to write draft email updates, but compliance guidelines require blocking any generation that contains profane or offensive language. What layer handles this?',
    topic: 'Agentforce & AI',
    options: [
      'Standard cross-object validation rules checks',
      'The built-in Toxicity Detection scanners inside the Einstein Trust Layer',
      'A change sets metadata deployment constraint filter',
      'Profile session high-assurance parameters configurations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Toxicity Detection monitors both incoming prompts and outgoing LLM text, automatically blocking responses that cross hate speech or profanity thresholds.'
  },
  {
    id: 'ai-15',
    text: 'A developer needs an autonomous agent to check shipping logs from an external warehouse database during customer conversations. How should they give the agent this capability?',
    topic: 'Agentforce & AI',
    options: [
      'Hardcode target ID structural metrics into a validation rule',
      'Build an Invocable Apex method or an Autolaunched Flow that calls the external API, and assign it as an Agent Action under the relevant topic',
      'Configure a data loader query script loop running hourly',
      'Change the object OWD settings configuration to Public Read Only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Exposing capabilities as Invocable Actions allows autonomous agents to run complex logic or integrations dynamically mid-chat.'
  },
  {
    id: 'ai-16',
    text: 'An administrator notices that an autonomous agent is trying to handle billing questions using an unrelated technical support playbook, causing bad answers. What setting needs optimization?',
    topic: 'Agentforce & AI',
    options: [
      'The profile session timeout length thresholds parameters',
      'The agent\'s Topic classification criteria, instructions, and assigned actions to help the planner distinguish intents',
      'The validation rule criteria formulas tracking field columns',
      'The global search layout column sorting assignments'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Refining the boundaries, definitions, and keywords of your topics helps the planner engine correctly identify the user\'s true intent.'
  },
  {
    id: 'ai-17',
    text: 'A business wants their service reps to click a single on-screen action button to instantly generate a complete discount request email summary referencing Account fields. What should the administrator build?',
    topic: 'Agentforce & AI',
    options: [
      'A global quick action invoking standard CSV tables templates',
      'An Sales Email Prompt Template inside Prompt Builder, exposed as a custom action button on the record viewport page layout',
      'A cross-object lookup formula text block asset template',
      'An In-App Guidance walkthrough layout banner component'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Sales Email templates provide a declarative way to let reps generate highly contextual email drafts directly within the activity feed using one click.'
  },
  {
    id: 'ai-18',
    text: 'A compliance officer needs to confirm that customer text messages processed by Einstein Copilot are not leaked to external AI vendors for training purposes. What feature validates this protocol?',
    topic: 'Agentforce & AI',
    options: [
      'The OWD sharing settings rules database status',
      'The Zero Data Retention policy architecture within the Einstein Trust Layer gateway contract',
      'An active validation rule checking username tracking tags',
      'A change data capture stream log sheet metric parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Zero Data Retention policy legally and technically prevents external model providers from storing or training on data sent via the trust layer.'
  },
  {
    id: 'ai-19',
    text: 'An administrator notice that a prompt template grounding an opportunity overview is returning blank sections for some users. They confirm the fields hold data. What security setting should be checked?',
    topic: 'Agentforce & AI',
    options: [
      'The organization global password complexity policies',
      'Field-Level Security (FLS) settings on the viewing user\'s profile, as prompts strictly respect standard user data permissions',
      'The custom validation rule activation toggle switches',
      'The scratch org deployment package manifest items'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Einstein prompts follow standard platform security rules. If a user\'s profile restricts access to a field, that field data is automatically excluded from their generated prompts.'
  },
  {
    id: 'ai-20',
    text: 'A company wants to add an autonomous agent to their website to help visitors schedule appointments. They want to test how the agent plans out tasks before pushing it live. What tool workspace should they use?',
    topic: 'Agentforce & AI',
    options: [
      'The Data Loader command line monitoring console',
      'The Agentforce Analytics dashboard metrics terminal layout',
      'The Agentforce Session Tester / Preview Console in Setup, checking the step-by-step reasoning logs generated by the planner',
      'The schema builder canvas mapping layout connector views'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'The built-in Agent Preview console lets you converse with your agent and view the behind-the-scenes reasoning paths chosen by the planner engine.'
  },

  {
    id: 'dc-1',
    text: 'What is the primary function of Salesforce Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To build custom user interface page layouts using modern CSS blueprints',
      'To unify high-volume customer data from disparate external sources into a single real-time data engine',
      'To automate multi-user administrative approval workflows natively',
      'To manage metadata deployments across multiple sandbox test orgs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Data Cloud ingests, harmonizes, and unifies vast quantities of operational customer data from many sources into a single, comprehensive timeline.'
  },
  {
    id: 'dc-2',
    text: 'What is the purpose of data modeling in Salesforce Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Defining and organizing relationships between data entities',
      'Automating email workflows',
      'Creating Lightning Components',
      'Managing Apex transactions'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Data modeling is the core harmonization step that structures relationships between ingested source objects and standardized data model definitions.'
  },
  {
    id: 'dc-3',
    text: 'What structural element represents data in its raw, ingested format from an external connection before mapping occurs?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Source Object (DSO)',
      'Data Model Object (DMO)',
      'Calculated Insight Object',
      'Junction Object Entity'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Data Source Objects (DSOs) store the direct, unmodified data feeds imported into Data Cloud from connected systems.'
  },
  {
    id: 'dc-4',
    text: 'What structural component represents the standardized target schema that data gets mapped to after ingestion to ensure consistency across the data lake?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Source Object (DSO)',
      'Data Model Object (DMO)',
      'External Metadata Bundle',
      'Custom Setting Matrix'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Model Objects (DMOs) provide the unified, standard data structures (like Individual or Contact Point) used to harmonize different data streams.'
  },
  {
    id: 'dc-5',
    text: 'Which feature in Data Cloud uses specific matching logic to combine multiple disparate source records into a single Golden Record profile?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Calculated Insights engine',
      'Identity Resolution Ruleset',
      'Zero-Copy Federation connection',
      'Segmentation Canvas tool'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Identity Resolution evaluates match rules across sources to reconcile multiple duplicate profile records into a single unified customer profile.'
  },
  {
    id: 'dc-6',
    text: 'What type of identity match rule allows linking profiles based on structural variations like common nicknames or typographical errors?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Exact Match rule',
      'Fuzzy Match rule',
      'Streaming Insight rule',
      'Junction Match rule'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Fuzzy Match logic uses matching algorithms to catch character variations, like linking abbreviation anomalies or loose string patterns.'
  },
  {
    id: 'dc-7',
    text: 'What type of profile reconciliation rule should be configured if you want a specific attribute to always use values from your primary CRM database over marketing systems?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Source Priority strategy',
      'Last Updated / Most Recent strategy',
      'Alphabetical character sort rule',
      'Dynamic query execution sweep'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Source Priority tells Identity Resolution which source system to trust first when selecting values for a unified profile attribute field.'
  },
  {
    id: 'dc-8',
    text: 'What unique, system-generated identifier is assigned to represent a consolidated customer profile wrapper once Identity Resolution combines records?',
    topic: 'Salesforce Data Cloud',
    options: [
      'External ID Text string',
      'Unified Individual ID',
      'Apex Savepoint identifier',
      'High Assurance session key'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Unified Individual ID is the core anchor key created by the resolution engine to group a unified profile\'s underlying records together.'
  },
  {
    id: 'dc-9',
    text: 'Which Data Cloud feature runs batch SQL queries over massive datasets to compute complex aggregations like Customer Lifetime Value?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Streaming Insights',
      'Calculated Insights',
      'Data Spaces segmentation',
      'Zero-Copy Federation shares'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights use batch processing to compute high-volume transactional metrics, storing the results as reusable attributes on the profile.'
  },
  {
    id: 'dc-10',
    text: 'What is the purpose of configuring "Data Spaces" within a Data Cloud architecture environment?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To increase the synchronous processing CPU limits globally',
      'To isolate and partition data streams, profiles, and segments to support different global brands or business units within one org',
      'To bypass validation rules during data imports',
      'To automatically encrypt text fields at rest'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Spaces partition your data lake workspace into separate secure zones, letting different teams or brands work independently under one tenant.'
  },
  {
    id: 'dc-11',
    text: 'Which tool allows users to declaratively isolate a target group of unified profiles using point-and-click demographic filters?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Schema Builder canvas',
      'Segmentation Canvas',
      'Calculated Insights terminal',
      'App Manager workspace'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Segmentation Canvas provides a visual interface where users can drag and drop criteria to isolate a clean target audience.'
  },
  {
    id: 'dc-12',
    text: 'What capability does a Streaming Insight offer compared to a standard Calculated Insight?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It processes files exclusively via CSV data loaders',
      'It evaluates event streams in near-real-time to trigger immediate automated actions or alerts',
      'It requires custom Apex triggers to calculate data',
      'It wipes historical records automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Streaming Insights process event data in near-real-time as it arrives, letting you detect changes and trigger quick responses.'
  },
  {
    id: 'dc-13',
    text: 'What baseline configuration parameter must be assigned to every incoming record stream in Data Cloud to enable time-window analysis and chronological calculations?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Organization-Wide Default baseline flag',
      'Event Time Field (date-time timestamp attribute)',
      'Formula validation string parameter',
      'Lookup relationship index field'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'An Event Time field is a strict prerequisite for stream ingestion, allowing Data Cloud to track event order and calculate timeline metrics accurately.'
  },
  {
    id: 'dc-14',
    text: 'What type of cloud connectivity strategy enables reading external warehouse data directly on demand without copying files or using Salesforce data storage?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Loader batch ingestion',
      'Zero-Copy Data Federation',
      'Change Sets deployment manifest',
      'Outbound messaging XML configuration'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Zero-Copy Data Federation allows Data Cloud to query external data warehouses (like Snowflake or BigQuery) directly in place without duplication.'
  },
  {
    id: 'dc-15',
    text: 'What functional tool is used to bundle Data Cloud mappings, data streams, and configurations together so they can be deployed across sandboxes using the Metadata API?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Cloud Packaging',
      'Data Import Wizard',
      'Calculated Insights SQL terminal',
      'App Builder page manager'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Data Cloud Packaging lets you capture data models, stream configurations, and relationships as standard deployable metadata components.'
  },
  {
    id: 'dc-16',
    text: 'What structural grouping pattern describes a target data category that represents real-world entities like phone numbers or email addresses in the standard data model?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Contact Point DMOs',
      'Calculated Insight attributes',
      'Raw DSO fields',
      'Junction fields matrix'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Contact Point objects (like Contact Point Phone or Email) are standard DMO definitions designed to store and normalize channels of customer communication.'
  },
  {
    id: 'dc-17',
    text: 'What kind of rule inside Identity Resolution dictates that two profiles should only merge if alphanumeric values match character-for-character with absolute parity?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Exact Match rule',
      'Fuzzy Match rule',
      'Reconciliation Priority rule',
      'SQL Aggregate rule'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Exact Match rules check for strict character parity, requiring text values to match identically before flagging a profile link.'
  },
  {
    id: 'dc-18',
    text: 'Which state must be configured on a newly built Segmentation layout before it can actively evaluate profiles and export audiences to target platforms?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Saved',
      'Activated / Published',
      'Indexed',
      'Archived'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A segment must be activated and published to run its filter query and deliver target profile lists to activation endpoints.'
  },
  {
    id: 'dc-19',
    text: 'What processing method does Data Cloud use to continually pull real-time web interaction logs via SDKs into the data lake engine?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Streaming Ingestion API',
      'Scheduled Batch CSV uploads',
      'Apex future method controllers',
      'Outbound manual workflows'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Ingestion API surfaces secure streaming endpoints to continually capture real-time behavior logs from apps or websites.'
  },
  {
    id: 'dc-20',
    text: 'What standard language syntax is utilized by analysts to construct and refine advanced multi-level aggregations inside Calculated Insights?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Apex',
      'SQL',
      'JSON',
      'SOQL'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights rely on standard ANSI SQL syntax rules to perform high-volume batch aggregations over Data Model Objects.'
  },
  {
    id: 'dc-21',
    text: 'A business needs to query warehouse records residing in a Google BigQuery cluster directly from Data Cloud without duplicating files or using extra platform storage. What feature addresses this?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Loader batch ingestion routines',
      'Zero-Copy Data Federation (Data Shares)',
      'Change Sets metadata deployment bundles',
      'Outbound messaging XML engine configurations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Zero-Copy federation lets Data Cloud securely read external database warehouses in place on demand, skipping the data duplication overhead.'
  },
  {
    id: 'dc-22',
    text: 'A database administrator imports an external ecommerce transaction stream into Data Cloud, but notices the values do not align with core contact records. What mapping step should they verify?',
    topic: 'Salesforce Data Cloud',
    options: [
      'The configuration linking the Data Source Object (DSO) attributes to the target Data Model Object (DMO) schemas',
      'The object validation rule formulas active in CRM',
      'The custom metadata type layout selections',
      'The client component cache refresh variables'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Mapping the raw DSO attributes accurately to standardized DMO schemas is essential to align data streams inside the core cloud engine.'
  },
  {
    id: 'dc-23',
    text: 'An enterprise wants to match loyalty profiles with support records. They find that different systems capture variations like "Dave" and "David." What identity resolution setup should they implement?',
    topic: 'Salesforce Data Cloud',
    options: [
      'An Exact Match rule on the First Name attribute string',
      'A Fuzzy Match rule on the First Name attribute string combined with an Exact Match on Email',
      'A calculated insight tracking text character codes',
      'A validation rule blocking loose string inputs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Combining Fuzzy Match logic for names with Exact Match rules for unique identifiers like email handles structural name variations smoothly.'
  },
  {
    id: 'dc-24',
    text: 'A company operates separate European and Asian retail branches under a single tenant. European users must be strictly blocked from viewing Asian market profile segments. How should the data lakehouse be partitioned?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Modify standard profile sharing rule settings globally',
      'Configure two distinct Data Spaces to segregate streams and segments securely by region',
      'Create a validation rule checking regional text parameters',
      'Deploy separate junction objects to link data files'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Spaces segregate streams and profiles into secure, isolated zones, keeping regional datasets separated within a single org.'
  },
  {
    id: 'dc-25',
    text: 'A marketing team wants to track how value tiers change over time by recalculating historical loyalty trends every hour across millions of purchase rows. What tool fits this requirement?',
    topic: 'Salesforce Data Cloud',
    options: [
      'A formula field processing text rows',
      'A Calculated Insight using batch SQL schedules to compute high-volume operational metrics',
      'An Apex before-update database trigger handler',
      'A screen flow calculating input values'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights use batch SQL processing to evaluate millions of data rows, making them ideal for high-volume metric trends.'
  },
  {
    id: 'dc-26',
    text: 'An analyst wants to isolate high-value customers who have spent over 500 dollars online and abandoned a shopping cart within the last 48 hours. What tool workspace should they use?',
    topic: 'Salesforce Data Cloud',
    options: [
      'The Data Cloud Ingestion wizard terminal',
      'The Data Cloud Segmentation Canvas to visually combine behavioral events and profile filters',
      'The schema builder layout connector workspace',
      'The outbound workflow alert action manager'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Segmentation Canvas lets you combine profile criteria and behavioral events into targeted audiences using point-and-click filters.'
  },
  {
    id: 'dc-27',
    text: 'During a rule update, a data engineer notices that a profile attribute field is pulling wrong, stale values from an old lead source. They want to ensure active CRM fields take priority. What should they modify?',
    topic: 'Salesforce Data Cloud',
    options: [
      'The object validation rule exception string settings',
      'The Source Priority settings inside the Identity Resolution Ruleset configuration',
      'The global data space layout permissions rules',
      'The calculated insights SQL grouping code rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Adjusting Source Priority lets you choose which system to trust first when resolving competing values for a unified field.'
  },
  {
    id: 'dc-28',
    text: 'A release manager needs to migrate a complex setup containing three data streams and five calculated insight maps from a staging sandbox into production. How should this be handled?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Manually enter the setups across production workspaces line-by-line',
      'Use Data Cloud Packaging to bundle the stream mappings and insights into a standard metadata package for deployment via the Metadata API',
      'Export the setups into CSV files using Data Loader templates',
      'Deploy a custom LWC module to recreate data mappings programmatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud Packaging lets you bundle streams, insights, and mappings into metadata packages for clean, trackable deployment.'
  },
  {
    id: 'dc-29',
    text: 'A data engineer notice that streaming data inputs are dropping values because event timestamps arriving from mobile channels are entirely omitted. Which layout fix must be applied to the pipeline?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Deactivate validation rules on core CRM tables',
      'Configure the Event Time Field parameter correctly on the stream ingestion source definition to align dates',
      'Deploy an Apex stateful batch class chunk array',
      'Convert the target DMO relationships into Master-Detail dependencies'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud streams require a valid Event Time field configuration to accurately align incoming transactions chronologically.'
  },
  {
    id: 'dc-30',
    text: 'A company wants an real-time automation to fire an alert the exact second a user abandons a digital form layout. Calculated insights take hours to run. What tool should be added to the topology?',
    topic: 'Salesforce Data Cloud',
    options: [
      'A scheduled path Record-Triggered Flow running nightly',
      'A Streaming Insight configured to monitor event data window transitions in near-real-time',
      'A DataRaptor Transform processing batch XML lists',
      'An owner-based sharing rule override entry matrix'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Streaming Insights process event streams instantly as they roll in, making them the correct choice to detect immediate real-time behaviors and trigger fast responses.'
  },

  {
    id: 'exp-1',
    text: 'What is the primary architectural purpose of a Custom URL Provider when configuring an Experience Cloud site infrastructure?',
    topic: 'Experience Cloud',
    options: [
      'To increase the asset rendering performance profiles of local browser setups by 50 percent',
      'To associate a branded, company-owned domain name with an Experience Cloud site while managing path routing securely',
      'To write automated Apex test classes for standard deployment metadata packages',
      'To replace traditional multi-factor authentication protocols completely'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom URL configurations link vanity or company-owned domains (like support.company.com) to Experience Cloud sites, handling path routing securely.'
  },
  {
    id: 'exp-2',
    text: 'Which standard Experience Cloud tool provides point-and-click layout editing, branding, page creation, and individual component placement capabilities for modern LWR sites?',
    topic: 'Experience Cloud',
    options: [
      'Salesforce App Manager Console',
      'Experience Builder',
      'Salesforce DevOps Center Dashboard',
      'Data Import Wizard Inspector'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Experience Builder is the central declarative workspace used to customize site pages, themes, styles, and drop components onto layout grids.'
  },
  {
    id: 'exp-3',
    text: 'What is the function of an "Audience" definition when managing page components or navigation menus inside Experience Builder?',
    topic: 'Experience Cloud',
    options: [
      'To calculate average transaction processing speeds across active digital sites',
      'To dynamically control the visibility of pages or individual components based on criteria like user profile, location, record fields, or permissions',
      'To act as an asynchronous background batch query handler pattern',
      'To group multiple external JSON payloads into compressed storage archives'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Audiences drive personalization, letting you tailor layouts by hiding or displaying components based on who is logged into the community.'
  },
  {
    id: 'exp-4',
    text: 'What is a core architectural difference between the Lightning Web Runtime (LWR) template framework and legacy Aura-based templates in Experience Cloud?',
    topic: 'Experience Cloud',
    options: [
      'LWR templates require standard change sets to process data fields directly',
      'LWR is built for extreme performance, loading fewer core JavaScript resources and utilizing strict web standards to deliver faster page load speeds',
      'LWR templates can only connect to external data sources via Vlocity integrations',
      'LWR templates are restricted to running inside standard mobile layouts only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'LWR strips away legacy container overhead, loading fast and complying with native web component standards to optimize responsiveness.'
  },
  {
    id: 'exp-5',
    text: 'Which Experience Cloud feature allows you to organize, categorize, and declare structured editorial articles or files, making them easily searchable and viewable by category groupings on a community site?',
    topic: 'Experience Cloud',
    options: [
      'Case Assignment Rule Entries',
      'Digital Experiences CMS (Content Management System) combined with Content Collections',
      'Custom Metadata Type matrices',
      'Validation Rules checking profile strings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce CMS lets you draft, organize, and version digital assets (like blogs or banners), grouping them into collections that surface on community pages.'
  },
  {
    id: 'exp-6',
    text: 'What represents a primary security enforcement difference between an internal standard Salesforce user Profile and a Customer Community Plus user Profile?',
    topic: 'Experience Cloud',
    options: [
      'Customer Community Plus profiles are blocked from executing basic SOQL lookup queries',
      'Customer Community Plus profiles leverage external user licenses and specialized sharing sets or sharing rules to access records without exposing corporate employee roles',
      'Customer Community Plus profiles require separate data cloud spaces to save inputs',
      'Customer Community Plus profiles are restricted to viewing only standard text area fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Customer Community Plus licenses use an external-facing security layer that handles visibility via Sharing Sets or standard sharing rules without impacting internal hierarchies.'
  },
  {
    id: 'exp-7',
    text: 'What occurs when an administrator activates the "Self-Registration" feature under the Login & Registration settings panel of an Experience Cloud site?',
    topic: 'Experience Cloud',
    options: [
      'The system immediately suspends administrative profiles to prevent unauthorized logins',
      'Visitors can fill out an on-screen form to automatically create a baseline Contact and User record in Salesforce, granting instant authenticated access to the community',
      'The platform converts lookup values into master-detail fields synchronously',
      'The validation rules run an automated background data quality scan'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Self-Registration provides a guided sign-up interface, launching a handler script to generate corresponding Contact and User records automatically.'
  },
  {
    id: 'exp-8',
    text: 'Which standard Experience Cloud license configuration should be selected to allow corporate partners to securely manage business pipelines, update Opportunity records, and register sales Leads?',
    topic: 'Experience Cloud',
    options: [
      'Customer Community License',
      'Partner Community License',
      'External Apps License',
      'High Assurance User License'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Partner Community licenses grant advanced external CRM visibility, making standard revenue sObjects (like Leads and Opportunities) accessible to partners.'
  },
  {
    id: 'exp-9',
    text: 'What capability does a "Sharing Set" offer an administrator configuring visibility for baseline Customer Community license users?',
    topic: 'Experience Cloud',
    options: [
      'An option to compress data volumes prior to metadata deployments',
      'A mechanism to grant record access by matching a field on the user\'s Contact or Account record to a field on the target record (e.g., matching AccountId)',
      'A layout utility designed to sketch page layouts visually',
      'A tool to schedule batch trigger handlers to run every Sunday afternoon'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'High-volume Customer Community users do not utilize standard sharing rules. Instead, Sharing Sets map access by validating account or contact ID intersections across records.'
  },
  {
    id: 'exp-10',
    text: 'What is the purpose of configuring "Reputation Levels" within a public-facing Experience Cloud community forum?',
    topic: 'Experience Cloud',
    options: [
      'To manage password expiration rules applied to profile definitions',
      'To drive customer engagement and track user participation by awarding points and level badges automatically when users post comments or answer questions',
      'To track the total API traffic limits recorded on server instances',
      'To route high-priority customer cases to executive helpdesk queues'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Reputation tracking drives community gamification, accumulating points based on activity to award trust badges and levels.'
  },
  {
    id: 'exp-11',
    text: 'Which declarative capability must be used to establish structural multi-language options on an Experience Cloud site so visitors can toggle the interface layout between English and Spanish?',
    topic: 'Experience Cloud',
    options: [
      'Apex Language Trigger Handler mapping',
      'Experience Builder Language Settings panel combined with translated text variables',
      'Validation Rules tracking local IP paths',
      'Data Cloud Harmonization schemas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Experience Builder features native translation support, letting creators input alternative text strings or export packages for localization.'
  },
  {
    id: 'exp-12',
    text: 'What does the "Publish" action button accomplish inside the Experience Builder workspace canvas?',
    topic: 'Experience Cloud',
    options: [
      'It backs up the active sandbox metadata to a source control repository branch',
      'It takes all staged design updates, theme variations, and component modifications and pushes them live to the public-facing production site server',
      'It calculates dynamic code coverage goals for deployment packages',
      'It converts standard picklist field structures into global formula metrics'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Edits in Experience Builder stay in a safe preview sandbox state until you click Publish, which compiles and deploys the updates live to active visitors.'
  },
  {
    id: 'exp-13',
    text: 'Universal Containers wants to embed a real-time tracking dashboard containing custom layout tables and complex UI animation frameworks inside their new LWR partner community site. What component path matches this request?',
    topic: 'Experience Cloud',
    options: [
      'Write a series of standard cross-object validation rules matching text lines',
      'Develop a custom Lightning Web Component (LWC) that complies with LWR architecture guidelines and drag it onto the page layout slot inside Experience Builder',
      'Deploy an asynchronous batch job to export tracking sheets into static tables',
      'Change the community security parameters from High Assurance to Private status'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'LWR sites accept custom LWCs seamlessly, allowing developers to build tailored UI experiences and expose them declaratively in Experience Builder.'
  },
  {
    id: 'exp-14',
    text: 'A business observes that when unauthenticated visitors land on their public knowledge base page, standard article detail components show a "Record Not Found" error statement. How should the administrator correct this access block?',
    topic: 'Experience Cloud',
    options: [
      'Set the core CRM account organization-wide sharing defaults to Public Read/Write status',
      'Verify that the Guest User Profile associated with the Experience Cloud site has appropriate Object Read permissions and that the corresponding data files are marked for public visibility',
      'Build a validation rule to block public traffic strings from executing search paths',
      'Convert all related article metrics into summary field attributes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Unauthenticated site visitors view pages via a Guest User Profile. Object permissions must be opened on this profile to surface data to the public.'
  },
  {
    id: 'exp-15',
    text: 'A developer needs to build an interactive order form page for an Experience Cloud portal. The form should safely handle complex multi-step data entry loops and pass confirmation details to downstream tables declartively. What tool should be integrated into the page canvas?',
    topic: 'Experience Cloud',
    options: [
      'A formula field processing text codes',
      'An active Screen Flow dropped directly onto the Experience Builder page canvas via the standard Flow component',
      'A case assignment routing rule mapping percentage metrics',
      'A lightning message service channel running background script arrays'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Screen Flows embed cleanly inside Experience Cloud pages, providing a declarative way to collect multi-step data entries without writing code.'
  },
  {
    id: 'exp-16',
    text: 'During testing of a new portal deployment, a user captures an administrative alert stating that navigation links are unresponsive. Upon inspection, the link maps to a newly created page that hasn\'t been deployed. How should the administrator fix this link failure?',
    topic: 'Experience Cloud',
    options: [
      'Deactivate the site profiles before performing deployment changes',
      'Ensure the newly created target page visibility settings are configured correctly and click "Publish" inside Experience Builder to push page parameters live',
      'Check the corporate browser cookie setting adjustments inside internal consoles',
      'Inspect the network trusted IP ranges list patterns'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'New community pages or structural layout switches remain hidden from active users until a formal Publish step updates the live site directory framework.'
  },
  {
    id: 'exp-17',
    text: 'A company wants to introduce a security policy where all community portal members must complete a reCAPTCHA step during the self-registration process to block bot traffic. Where should this configuration be managed?',
    topic: 'Experience Cloud',
    options: [
      'Inside the data loader upsert parameter checklist',
      'Under the Security settings within the Experience Cloud Administration workspace, enabling reCAPTCHA options for registration routes',
      'Via a validation rule checking global search patterns',
      'Within the user session security profiles setup'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Experience Cloud provides built-in reCAPTCHA integrations under the Administration workspace settings to secure registration paths.'
  },
  {
    id: 'exp-18',
    text: 'A financial portal requires different navigation menu blocks to display depending on the user\'s Tier status (Gold partners vs Silver partners). Which tool path executes this structural adjustment cleanly?',
    topic: 'Experience Cloud',
    options: [
      'Build a background script to sweep corporate database records hourly',
      'Create personalized Navigation Menus inside the Experience Builder, and use Audience Targeting rules to map them to corresponding partner tiers',
      'Set the custom object OWD parameter settings to Private status',
      'Deploy a validation rule that throws an explicit save error'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Experience Builder allows you to construct multiple navigation menus, applying Audience criteria to swap them dynamically based on user tier variables.'
  },
  {
    id: 'exp-19',
    text: 'You have written a custom CSS theme modification that displays perfectly inside the preview window of Experience Builder, but looks completely broken when viewed by an active site visitor. How should the developer optimize the layout deployment?',
    topic: 'Experience Cloud',
    options: [
      'Universally restrict styling files to small monochrome images',
      'Verify that Lightning Web Security (LWS) or Content Security Policy (CSP) configurations aren\'t blocking external style sheet URLs, and confirm the site has been successfully published',
      'Convert the target elements into roll-up fields inside standard core styles',
      'Disable the validation rules across sandbox test spaces'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Strict Content Security Policy (CSP) rules block scripts or CSS files coming from unauthorized outside domains until they are whitelisted in site settings.'
  },
  {
    id: 'exp-20',
    text: 'An operations team wants to monitor community traffic engagement patterns, such as identifying the most viewed articles or active discussion forums. Which tool displays these specific analytics dashboards?',
    topic: 'Experience Cloud',
    options: [
      'Data Loader logs extracting CSV file tables',
      'The Experience Cloud Dashboards package installed via AppExchange into the Experience Management / Administration workspace',
      'A series of workflow outbound messaging engines logging text strings',
      'An apex unit test execution summary chart'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Salesforce pre-built Experience Cloud Dashboards package tracks site health, page views, and user engagement parameters directly in the community workspace.'
  }
