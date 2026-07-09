import { ExamQuestion } from './types'

const QUESTIONS: ExamQuestion[] = [
  // Apex Development (30 questions)
  {
    id: 'apex-arch-1',
    text: 'What is the correct order of execution when a record is saved with both a before trigger and validation rules?',
    topic: 'Apex Development',
    options: [
      'Before trigger → Validation rules → After trigger',
      'Validation rules → Before trigger → After trigger',
      'Before trigger → After trigger → Validation rules',
      'System validation → Before trigger → Custom validation rules → After trigger'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'The correct order is: System validation → Before triggers → Custom validation rules → Record saved → After triggers → Assignment rules → Auto-response rules → Workflow rules → Processes → Escalation rules → Entitlement rules → Roll-up summary → Criteria-based sharing → Commit'
  },
  {
    id: 'apex-arch-2',
    text: 'What is the maximum recursion depth for triggers before Salesforce throws a "Maximum trigger depth exceeded" exception?',
    topic: 'Apex Development',
    options: [
      '5 levels',
      '10 levels',
      '16 levels',
      '20 levels'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Salesforce allows up to 16 levels of trigger depth to prevent infinite recursion loops.'
  },
  {
    id: 'apex-arch-3',
    text: 'When implementing a bulkification pattern, what is the most efficient way to handle related record queries?',
    topic: 'Apex Development',
    options: [
      'Query inside the trigger loop for each record',
      'Use a Map to collect all IDs, then query once outside the loop',
      'Use individual SOQL queries with LIMIT 1',
      'Use Database.query() with dynamic SOQL inside loops'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Collecting all IDs in a collection and querying once outside the loop prevents hitting SOQL query governor limits and follows bulkification best practices.'
  },
  {
    id: 'apex-arch-4',
    text: 'In a scenario where you have a trigger that fires on Account updates, what is the best practice to prevent recursive trigger execution?',
    topic: 'Apex Development',
    options: [
      'Use a static variable to track if the trigger has already executed',
      'Disable the trigger temporarily using Trigger.isExecuting',
      'Use Database.update() with allOrNone set to false',
      'Implement a try-catch block around all DML operations'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Using a static variable or static set to track execution prevents infinite recursion by ensuring the trigger logic only runs once per transaction context.'
  },
  {
    id: 'apex-arch-5',
    text: 'What happens when you use System.Finalizer in an Apex transaction?',
    topic: 'Apex Development',
    options: [
      'It executes immediately within the same transaction',
      'It executes asynchronously after the transaction commits',
      'It only executes if the transaction fails',
      'It replaces the need for after triggers'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'System.Finalizer executes asynchronously after the main transaction commits, allowing you to perform additional processing without affecting the original transaction.'
  },
  {
    id: 'apex-arch-6',
    text: 'Which pattern should you use to handle DML operations on large datasets efficiently?',
    topic: 'Apex Development',
    options: [
      'Process all records in a single DML statement',
      'Use Database methods with partial success options',
      'Break into smaller chunks and use Database.Savepoint',
      'Use @future methods for all DML operations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Database methods with allOrNone=false allow partial success, letting you handle errors for individual records without failing the entire operation.'
  },
  {
    id: 'apex-arch-7',
    text: 'What is the correct way to handle Transaction Control in Apex when you need to conditionally rollback changes?',
    topic: 'Apex Development',
    options: [
      'Use Database.rollback() method',
      'Use Savepoint and Database.rollback(savepoint)',
      'Throw a custom exception to rollback',
      'Use System.abort() method'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Savepoints allow you to mark a point in the transaction and rollback to that specific point if needed, providing fine-grained transaction control.'
  },
  {
    id: 'apex-arch-8',
    text: 'In the Order of Execution, when do Assignment Rules execute?',
    topic: 'Apex Development',
    options: [
      'Before validation rules',
      'After before triggers but before validation rules',
      'After record is saved to database but before after triggers',
      'After after triggers but before workflow rules'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Assignment rules execute after after triggers but before workflow rules in the order of execution.'
  },
  {
    id: 'apex-arch-9',
    text: 'What is the maximum number of synchronous Apex transactions that can be queued?',
    topic: 'Apex Development',
    options: [
      '5',
      '10',
      '25',
      '100'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Salesforce allows a maximum of 25 synchronous Apex transactions to be queued at any given time.'
  },
  {
    id: 'apex-arch-10',
    text: 'When should you use the @TestVisible annotation in Apex?',
    topic: 'Apex Development',
    options: [
      'To make private methods accessible in test classes',
      'To make classes visible in managed packages',
      'To enable debugging in production',
      'To bypass field-level security in tests'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: '@TestVisible allows test methods to access private or protected members of a class, enabling better unit testing without exposing implementation details.'
  },
  {
    id: 'apex-arch-11',
    text: 'What happens during the "System Validation" phase in the Order of Execution?',
    topic: 'Apex Development',
    options: [
      'Custom validation rules are checked',
      'Required fields, field formats, and maximum field length are validated',
      'Trigger logic is executed',
      'Workflow rules are evaluated'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'System Validation checks required fields, field data types, field formats, and maximum field length before any custom logic runs.'
  },
  {
    id: 'apex-arch-12',
    text: 'Which bulkification pattern is most efficient for processing trigger records with related data?',
    topic: 'Apex Development',
    options: [
      'Query for each record individually within the loop',
      'Use SOQL for loops to process records',
      'Collect IDs in a Set, query once, then process with Map lookups',
      'Use Dynamic SOQL with String concatenation'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Collecting IDs in a collection, querying once outside the loop, and using Map lookups is the most efficient bulkification pattern that avoids SOQL governor limits.'
  },
  {
    id: 'apex-arch-13',
    text: 'What is the purpose of the Database.executeBatch() method\'s optional scope parameter?',
    topic: 'Apex Development',
    options: [
      'To limit the total number of records processed',
      'To specify how many records are processed in each batch',
      'To set the execution priority of the batch job',
      'To determine which users can monitor the batch job'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The scope parameter determines the batch size - how many records are passed to the execute method in each batch iteration.'
  },
  {
    id: 'apex-arch-14',
    text: 'When implementing a trigger framework, what is the recommended pattern for trigger handlers?',
    topic: 'Apex Development',
    options: [
      'Write all logic directly in the trigger',
      'Use a single handler class with methods for different trigger events',
      'Create separate handler classes for each sObject',
      'Use static methods only to avoid instantiation overhead'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A single handler class per sObject with methods for different trigger events (beforeInsert, afterUpdate, etc.) provides the cleanest and most maintainable trigger framework.'
  },
  {
    id: 'apex-arch-15',
    text: 'What is the difference between Trigger.new and Trigger.newMap in trigger context?',
    topic: 'Apex Development',
    options: [
      'Trigger.new is for before events, Trigger.newMap is for after events',
      'Trigger.new is a List, Trigger.newMap is a Map with record IDs as keys',
      'They contain the same data in different formats',
      'Trigger.newMap only contains changed records'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Both contain the same records but in different data structures: Trigger.new is a List<SObject> while Trigger.newMap is a Map<Id, SObject> for easier ID-based lookups.'
  },
  {
    id: 'apex-arch-16',
    text: 'In a complex business scenario, what\'s the best approach to handle multiple trigger events on the same object?',
    topic: 'Apex Development',
    options: [
      'Write separate triggers for each event type',
      'Use a single trigger with conditional logic for each event',
      'Use Process Builder instead of triggers',
      'Combine triggers with workflow rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A single trigger per object with conditional logic for different events is the best practice to avoid conflicts and ensure predictable execution order.'
  },
  {
    id: 'apex-arch-17',
    text: 'What happens to uncommitted work when a System.Finalizer executes?',
    topic: 'Apex Development',
    options: [
      'Uncommitted work is automatically committed',
      'Uncommitted work is rolled back',
      'Finalizer executes in a separate transaction context',
      'Finalizer execution is blocked until work is committed'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'System.Finalizer executes in a completely separate transaction context after the original transaction has either committed or rolled back.'
  },
  {
    id: 'apex-arch-18',
    text: 'When should you use Database.query() instead of static SOQL?',
    topic: 'Apex Development',
    options: [
      'When querying large datasets',
      'When the query structure needs to be determined at runtime',
      'When better performance is needed',
      'When querying from managed package objects'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Database.query() is used for dynamic SOQL when the query structure, fields, or conditions need to be determined at runtime based on user input or business logic.'
  },
  {
    id: 'apex-arch-19',
    text: 'What is the recommended approach for handling bulk data operations in triggers?',
    topic: 'Apex Development',
    options: [
      'Process each record individually for accuracy',
      'Use Set and Map collections for efficient bulk processing',
      'Always use @future methods for bulk operations',
      'Limit processing to 200 records at a time'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using Set and Map collections allows efficient bulk processing by avoiding nested loops and redundant queries while maintaining bulkification best practices.'
  },
  {
    id: 'apex-arch-20',
    text: 'In which scenario would you use a before trigger instead of an after trigger?',
    topic: 'Apex Development',
    options: [
      'When you need to access record IDs',
      'When you need to modify field values before they are saved',
      'When you need to create related records',
      'When you need to send email notifications'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Before triggers are used to modify field values before the record is saved to the database, as the record hasn\'t been committed yet and can still be modified.'
  },
  {
    id: 'apex-arch-21',
    text: 'What is the maximum CPU time limit for synchronous Apex transactions?',
    topic: 'Apex Development',
    options: [
      '10 seconds',
      '20 seconds',
      '60 seconds',
      '120 seconds'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Synchronous Apex transactions have a CPU time limit of 10 seconds, while asynchronous transactions have a limit of 60 seconds.'
  },
  {
    id: 'apex-arch-22',
    text: 'When implementing recursion control in triggers, what is the most efficient approach?',
    topic: 'Apex Development',
    options: [
      'Use a static Boolean variable',
      'Use a static Set to track processed record IDs',
      'Use Trigger.isExecuting property',
      'Use a custom setting to control execution'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using a static Set to track processed record IDs provides granular control and prevents infinite recursion while allowing legitimate subsequent updates to other records.'
  },
  {
    id: 'apex-arch-23',
    text: 'What is the correct pattern for implementing transaction control with partial success?',
    topic: 'Apex Development',
    options: [
      'Use Database.insert(records, false) with Database.SaveResult',
      'Use try-catch blocks around individual DML statements',
      'Use @future methods to isolate transactions',
      'Use System.Savepoint for each record'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Database.insert(records, false) allows partial success and returns Database.SaveResult array to handle individual record failures without stopping the entire operation.'
  },
  {
    id: 'apex-arch-24',
    text: 'In the Order of Execution, when do auto-response rules execute?',
    topic: 'Apex Development',
    options: [
      'Before after triggers',
      'After after triggers but before assignment rules',
      'After assignment rules but before workflow rules',
      'After workflow rules but before escalation rules'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Auto-response rules execute after assignment rules but before workflow rules in the standard order of execution.'
  },
  {
    id: 'apex-arch-25',
    text: 'What happens when a finalizer method throws an unhandled exception?',
    topic: 'Apex Development',
    options: [
      'The original transaction is rolled back',
      'The finalizer exception is logged but doesn\'t affect the original transaction',
      'All subsequent finalizers are cancelled',
      'The entire Apex execution is terminated'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Finalizer exceptions are logged but do not affect the original transaction since finalizers execute after the transaction has already been committed or rolled back.'
  },
  {
    id: 'apex-arch-26',
    text: 'Which approach should you use to handle large-scale data updates efficiently?',
    topic: 'Apex Development',
    options: [
      'Use synchronous Apex with bulkified operations',
      'Use Batch Apex for processing large datasets',
      'Use @future methods with smaller chunks',
      'Use Platform Events for asynchronous processing'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Batch Apex is specifically designed for processing large datasets efficiently by breaking the work into manageable chunks with separate transaction contexts.'
  },
  {
    id: 'apex-arch-27',
    text: 'What is the purpose of using Database.Stateful in Batch Apex?',
    topic: 'Apex Development',
    options: [
      'To improve batch execution performance',
      'To maintain instance variable values across batch iterations',
      'To enable error handling across batches',
      'To allow access to custom settings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Database.Stateful interface allows Batch Apex to maintain instance variable values across different batch iterations, enabling state tracking throughout the job.'
  },
  {
    id: 'apex-arch-28',
    text: 'In a trigger scenario, when should you use Trigger.oldMap vs Trigger.old?',
    topic: 'Apex Development',
    options: [
      'Trigger.oldMap for before events, Trigger.old for after events',
      'Trigger.old for iteration, Trigger.oldMap for ID-based lookups',
      'They serve the same purpose with different syntax',
      'Trigger.oldMap only for update and delete operations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Use Trigger.old when you need to iterate through records sequentially, and Trigger.oldMap when you need to look up old values by record ID efficiently.'
  },
  {
    id: 'apex-arch-29',
    text: 'What is the recommended pattern for handling DML operations that might exceed governor limits?',
    topic: 'Apex Development',
    options: [
      'Use smaller batch sizes and multiple transactions',
      'Use @future methods to extend limits',
      'Use Queueable Apex with chaining for large operations',
      'Use Platform Events to distribute the workload'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Queueable Apex with chaining allows you to break large operations into smaller chunks while maintaining execution context and can be chained for sequential processing.'
  },
  {
    id: 'apex-arch-30',
    text: 'When implementing a complex business process, what is the best practice for trigger design?',
    topic: 'Apex Development',
    options: [
      'Write all business logic directly in the trigger',
      'Use a handler class with the trigger only calling handler methods',
      'Split logic across multiple triggers for the same object',
      'Use only workflow rules and Process Builder'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using a handler class keeps the trigger lightweight and makes the code more maintainable, testable, and follows separation of concerns best practices.'
  },

  // Lightning Web Components (30 questions)  
  {
    id: 'lwc-perf-1',
    text: 'Which LWC lifecycle hook is called every time the component re-renders and should be used cautiously for performance?',
    topic: 'Lightning Web Components',
    options: [
      'connectedCallback()',
      'renderedCallback()',
      'disconnectedCallback()',
      'errorCallback()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'renderedCallback() fires after every render and can cause performance issues if heavy operations are performed without proper guards.'
  },
  {
    id: 'lwc-perf-2',
    text: 'How do you access elements in the Shadow DOM of an LWC from the parent component?',
    topic: 'Lightning Web Components',
    options: [
      'Use document.querySelector() directly',
      'Use this.template.querySelector() from the parent',
      'Shadow DOM elements cannot be accessed from parent components due to encapsulation',
      'Use @api methods to expose specific functionality'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Shadow DOM provides encapsulation - parent components should use @api methods rather than direct DOM access to interact with child components.'
  },
  {
    id: 'lwc-perf-3',
    text: 'What is the recommended way to handle expensive operations in renderedCallback()?',
    topic: 'Lightning Web Components',
    options: [
      'Execute them directly in renderedCallback()',
      'Use a flag to ensure they only run once or when needed',
      'Move them to connectedCallback()',
      'Use setTimeout to defer execution'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using a flag or condition to prevent expensive operations from running on every render cycle is essential for performance optimization.'
  },
  {
    id: 'lwc-perf-4',
    text: 'Which lifecycle hook should you use to perform cleanup operations when a component is removed from the DOM?',
    topic: 'Lightning Web Components',
    options: [
      'renderedCallback()',
      'connectedCallback()',
      'disconnectedCallback()',
      'errorCallback()'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'disconnectedCallback() is called when the component is removed from the DOM and is the appropriate place for cleanup operations like removing event listeners.'
  },
  {
    id: 'lwc-perf-5',
    text: 'What happens when you dispatch a custom event with bubbles: true in an LWC component?',
    topic: 'Lightning Web Components',
    options: [
      'The event only fires within the component\'s shadow boundary',
      'The event bubbles through the DOM hierarchy crossing shadow boundaries',
      'The event bubbles within the shadow DOM but not across boundaries',
      'The event is automatically handled by the parent component'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When bubbles is set to true, custom events can cross shadow DOM boundaries and bubble up through the DOM hierarchy to parent components.'
  },
  {
    id: 'lwc-perf-6',
    text: 'Which decorator should you use to expose a method that can be called by parent components?',
    topic: 'Lightning Web Components',
    options: [
      '@track',
      '@wire',
      '@api',
      '@require'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: '@api decorator makes methods and properties public, allowing parent components to call them or pass data to child components.'
  },
  {
    id: 'lwc-perf-7',
    text: 'What is the purpose of the composed: true option when dispatching custom events?',
    topic: 'Lightning Web Components',
    options: [
      'It combines multiple events into one',
      'It allows the event to cross shadow DOM boundaries',
      'It composes the event with native DOM events',
      'It creates a composite event pattern'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The composed: true option allows custom events to cross shadow DOM boundaries, enabling parent components to listen for events from child components.'
  },
  {
    id: 'lwc-perf-8',
    text: 'When should you use the @track decorator in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'For all component properties',
      'For primitive properties that trigger re-renders',
      'For complex objects and arrays that need reactive updates',
      'For properties passed from parent components'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: '@track is used for complex objects and arrays where you need the component to reactively update when nested properties change.'
  },
  {
    id: 'lwc-perf-9',
    text: 'What is the recommended pattern for handling asynchronous operations in LWC lifecycle hooks?',
    topic: 'Lightning Web Components',
    options: [
      'Use async/await directly in lifecycle hooks',
      'Use Promise.then() chains in lifecycle hooks',
      'Handle async operations in separate methods called from lifecycle hooks',
      'Use setTimeout for all asynchronous operations'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Lifecycle hooks should remain synchronous, with asynchronous operations handled in separate methods to maintain predictable component behavior.'
  },
  {
    id: 'lwc-perf-10',
    text: 'How do you prevent memory leaks when using event listeners in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Event listeners are automatically cleaned up',
      'Remove event listeners in disconnectedCallback()',
      'Use weak references for all event listeners',
      'Only use inline event handlers in templates'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Event listeners should be explicitly removed in disconnectedCallback() to prevent memory leaks when components are destroyed.'
  },
  {
    id: 'lwc-perf-11',
    text: 'What is the correct way to access child components from a parent LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Use this.template.querySelector() to get child component references',
      'Use @ViewChild decorator like in other frameworks',
      'Access child components through their @api methods only',
      'Use document.getElementById() with component IDs'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'this.template.querySelector() is the correct way to get references to child components, then you can call their @api methods.'
  },
  {
    id: 'lwc-perf-12',
    text: 'Which approach provides the best performance for conditional rendering in LWC templates?',
    topic: 'Lightning Web Components',
    options: [
      'Use CSS display: none to hide elements',
      'Use if:true and if:false directives',
      'Use template if:true with lightweight wrapper elements',
      'Always render all elements and hide them programmatically'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Using template if:true creates lightweight conditional rendering without extra wrapper elements, providing optimal performance.'
  },
  {
    id: 'lwc-perf-13',
    text: 'What is the difference between @track and reactive properties in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'There is no difference, @track is required for all reactive properties',
      'Primitive properties are reactive by default, @track is for objects/arrays',
      '@track is deprecated, all properties are reactive',
      '@track is only for properties passed from parent components'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Primitive properties (string, number, boolean) are reactive by default. @track is only needed for objects and arrays to track nested changes.'
  },
  {
    id: 'lwc-perf-14',
    text: 'How should you handle DOM manipulation in LWC for optimal performance?',
    topic: 'Lightning Web Components',
    options: [
      'Manipulate DOM directly using document methods',
      'Use this.template.querySelector() and modify elements directly',
      'Prefer reactive data changes over direct DOM manipulation',
      'Use jQuery for DOM operations'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'LWC\'s reactive system is optimized for data-driven updates. Direct DOM manipulation should be avoided in favor of reactive data changes.'
  },
  {
    id: 'lwc-perf-15',
    text: 'What is the recommended approach for sharing data between sibling LWC components?',
    topic: 'Lightning Web Components',
    options: [
      'Use direct component references',
      'Use the parent component as a data hub with @api properties',
      'Use global variables',
      'Use local storage for data sharing'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The parent component should act as a data hub, managing state and passing data down to siblings through @api properties and handling events.'
  },
  {
    id: 'lwc-perf-16',
    text: 'When does the connectedCallback() lifecycle hook execute?',
    topic: 'Lightning Web Components',
    options: [
      'Before the component is inserted into the DOM',
      'After the component is inserted into the DOM',
      'Before each render cycle',
      'When the component receives new data'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'connectedCallback() executes after the component is inserted into the DOM and is ideal for initialization tasks.'
  },
  {
    id: 'lwc-perf-17',
    text: 'How do you optimize large list rendering in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Render all items at once for simplicity',
      'Use iterator:item with key attributes for efficient updates',
      'Implement virtual scrolling manually',
      'Use CSS overflow for large lists'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using iterator:item with unique key attributes allows LWC to efficiently update only changed items in large lists.'
  },
  {
    id: 'lwc-perf-18',
    text: 'What is the correct pattern for error handling in LWC components?',
    topic: 'Lightning Web Components',
    options: [
      'Use try-catch blocks in all methods',
      'Implement errorCallback() for component-level error handling',
      'Let errors bubble up to parent components',
      'Use global error handlers only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'errorCallback() provides component-level error handling and allows graceful error recovery within the component boundary.'
  },
  {
    id: 'lwc-perf-19',
    text: 'How should you handle component communication when child needs to notify parent of changes?',
    topic: 'Lightning Web Components',
    options: [
      'Use callback functions passed as @api properties',
      'Dispatch custom events with detail payload',
      'Modify parent component properties directly',
      'Use shared service classes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dispatching custom events with detail payload is the recommended pattern for child-to-parent communication in LWC.'
  },
  {
    id: 'lwc-perf-20',
    text: 'What is the purpose of using lightning-record-form vs building custom forms in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Custom forms provide more flexibility',
      'lightning-record-form automatically handles field-level security and validation',
      'lightning-record-form is faster to render',
      'There is no significant difference'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'lightning-record-form automatically handles field-level security, validation rules, and record type considerations, reducing development complexity.'
  },
  {
    id: 'lwc-perf-21',
    text: 'How do you prevent infinite loops when using getters in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Cache computed values and use @track for dependencies',
      'Use setTimeout in getters',
      'Avoid using getters entirely',
      'Getters automatically prevent infinite loops'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Caching computed values and properly tracking dependencies prevents getters from recalculating on every render cycle.'
  },
  {
    id: 'lwc-perf-22',
    text: 'What is the recommended way to handle third-party JavaScript libraries in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Include them directly in component JavaScript',
      'Load them as static resources and import in renderedCallback()',
      'Use CDN links in the component template',
      'Third-party libraries are not supported in LWC'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Third-party libraries should be uploaded as static resources and loaded in renderedCallback() to ensure proper timing and component isolation.'
  },
  {
    id: 'lwc-perf-23',
    text: 'How do you implement lazy loading for expensive operations in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Use setTimeout for all expensive operations',
      'Implement intersection observers and load on demand',
      'Load everything in connectedCallback()',
      'Use CSS loading animations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Intersection observers can detect when components become visible and trigger lazy loading of expensive operations or data.'
  },
  {
    id: 'lwc-perf-24',
    text: 'What is the correct way to handle CSS styling conflicts between LWC components?',
    topic: 'Lightning Web Components',
    options: [
      'Use !important declarations',
      'Shadow DOM automatically prevents style conflicts',
      'Use global CSS classes',
      'Prefix all CSS classes with component names'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Shadow DOM provides style encapsulation, automatically preventing CSS conflicts between components without additional effort.'
  },
  {
    id: 'lwc-perf-25',
    text: 'How should you optimize data binding performance in LWC templates?',
    topic: 'Lightning Web Components',
    options: [
      'Use one-way data binding for read-only values',
      'Always use two-way data binding for consistency',
      'Avoid data binding and use direct DOM manipulation',
      'Use string interpolation for all values'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'One-way data binding is more performant for read-only values as it eliminates unnecessary change detection overhead.'
  },
  {
    id: 'lwc-perf-26',
    text: 'What is the recommended approach for handling form validation in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Validate on every keystroke using event handlers',
      'Use lightning-input validity methods and reportValidity()',
      'Implement custom validation logic for all fields',
      'Rely only on server-side validation'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lightning base components provide built-in validation methods like checkValidity() and reportValidity() for consistent user experience.'
  },
  {
    id: 'lwc-perf-27',
    text: 'How do you handle component state management in complex LWC applications?',
    topic: 'Lightning Web Components',
    options: [
      'Store all state in parent components',
      'Use local component state with @track and @api',
      'Implement a centralized state management pattern',
      'Store state in browser localStorage'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Complex applications benefit from centralized state management patterns to maintain consistency and reduce prop drilling.'
  },
  {
    id: 'lwc-perf-28',
    text: 'What is the correct way to handle dynamic CSS classes in LWC?',
    topic: 'Lightning Web Components',
    options: [
      'Use string concatenation in template expressions',
      'Implement getter methods that return computed class strings',
      'Modify element.className directly in JavaScript',
      'Use conditional class attributes with template directives'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Getter methods that return computed class strings provide clean, reactive CSS class management in LWC templates.'
  },
  {
    id: 'lwc-perf-29',
    text: 'How should you handle component lifecycle when dealing with async data loading?',
    topic: 'Lightning Web Components',
    options: [
      'Load all data in connectedCallback() synchronously',
      'Use @wire decorators for declarative data loading',
      'Load data in renderedCallback() to ensure DOM is ready',
      'Use setTimeout to delay data loading'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: '@wire decorators provide declarative, reactive data loading that automatically handles loading states and component lifecycle.'
  },
  {
    id: 'lwc-perf-30',
    text: 'What is the best practice for debugging performance issues in LWC components?',
    topic: 'Lightning Web Components',
    options: [
      'Use console.log statements throughout the code',
      'Use browser DevTools Performance tab and Lightning Inspector',
      'Add timing code to all methods',
      'Rely on Salesforce debug logs only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Browser DevTools Performance tab and Lightning Inspector provide comprehensive profiling and debugging capabilities for LWC performance optimization.'
  },

  // Salesforce Data Cloud (30 questions)
  {
    id: 'data-cloud-1',
    text: 'In Data Cloud, what is the primary purpose of Data Source Objects (DSO) to Data Model Objects (DMO) mapping?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To encrypt sensitive data during transfer',
      'To transform external data sources into unified Data Cloud data model',
      'To compress data for storage optimization',
      'To validate data quality before ingestion'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DSO to DMO mapping transforms various external data sources into Data Cloud\'s unified data model, enabling harmonized analytics and insights.'
  },
  {
    id: 'data-cloud-2',
    text: 'What is the purpose of Identity Resolution in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To resolve user authentication issues',
      'To match and unify individual records across different data sources',
      'To encrypt personally identifiable information',
      'To resolve data access permission conflicts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Identity Resolution matches and unifies individual customer records across multiple data sources to create a unified customer profile.'
  },
  {
    id: 'data-cloud-3',
    text: 'What is Zero-Copy architecture in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data is never duplicated during processing',
      'No backup copies are created',
      'Data can be queried directly from source systems without physical copying',
      'Zero cost data storage solution'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Zero-Copy architecture allows querying data directly from source systems without physically copying data into Data Cloud, reducing storage costs and latency.'
  },
  {
    id: 'data-cloud-4',
    text: 'How does Data Cloud handle data harmonization across multiple sources?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It requires manual data transformation scripts',
      'It uses AI-powered automatic schema mapping and standardization',
      'It only works with Salesforce data sources',
      'It relies on external ETL tools exclusively'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud uses AI-powered capabilities to automatically map and standardize data schemas across different sources for unified analytics.'
  },
  {
    id: 'data-cloud-5',
    text: 'What is the role of SQL Insights in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To provide database administration tools',
      'To enable custom SQL queries against unified customer data',
      'To optimize database performance',
      'To create SQL training materials'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'SQL Insights allows users to run custom SQL queries against the unified customer data model for advanced analytics and insights.'
  },
  {
    id: 'data-cloud-6',
    text: 'Which matching method is most effective for Identity Resolution with high data quality?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Exact match on email addresses only',
      'Fuzzy matching with probabilistic algorithms',
      'Manual review of all potential matches',
      'Random sampling for match verification'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Fuzzy matching with probabilistic algorithms can handle data variations, typos, and different formats while maintaining high match accuracy.'
  },
  {
    id: 'data-cloud-7',
    text: 'What is the primary benefit of Data Cloud\'s real-time data streaming?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Reduced storage costs',
      'Immediate availability of updated customer insights',
      'Simplified data governance',
      'Enhanced data security'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Real-time data streaming enables immediate availability of updated customer insights for timely decision-making and personalization.'
  },
  {
    id: 'data-cloud-8',
    text: 'How does Data Cloud handle conflicting data from multiple sources?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It rejects all conflicting records',
      'It uses data source priority and recency rules',
      'It averages all conflicting values',
      'It requires manual resolution for all conflicts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud uses configurable data source priority and recency rules to resolve conflicts and determine the most authoritative data values.'
  },
  {
    id: 'data-cloud-9',
    text: 'What is the purpose of Data Model Objects (DMO) in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To define security access controls',
      'To provide standardized schema for unified customer data',
      'To optimize query performance',
      'To manage data retention policies'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DMOs provide a standardized schema that represents unified customer data across all sources in a consistent format.'
  },
  {
    id: 'data-cloud-10',
    text: 'Which feature enables Data Cloud to maintain data lineage and audit trails?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Versioning System',
      'Audit Trail API',
      'Data Lineage Tracker',
      'Source System Metadata'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Source System Metadata maintains information about data origins, transformations, and lineage for compliance and audit purposes.'
  },
  {
    id: 'data-cloud-11',
    text: 'How does Data Cloud ensure data privacy and compliance across multiple sources?',
    topic: 'Salesforce Data Cloud',
    options: [
      'By encrypting all data in transit only',
      'Through unified consent management and privacy controls',
      'By storing data in separate isolated systems',
      'By anonymizing all personal data automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud provides unified consent management and privacy controls to ensure compliance with regulations like GDPR across all data sources.'
  },
  {
    id: 'data-cloud-12',
    text: 'What is the recommended approach for handling large-scale data ingestion in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Process all data synchronously in real-time',
      'Use batch processing with micro-batches for optimal throughput',
      'Ingest data only during off-peak hours',
      'Limit ingestion to 1000 records per hour'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Micro-batch processing provides optimal throughput for large-scale data ingestion while maintaining near real-time availability.'
  },
  {
    id: 'data-cloud-13',
    text: 'Which Data Cloud feature helps in creating calculated insights from unified data?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Transformation Engine',
      'Calculated Insights and Metrics',
      'Analytics Query Builder',
      'Custom Formula Fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights and Metrics enable creation of derived values and KPIs from the unified customer data model.'
  },
  {
    id: 'data-cloud-14',
    text: 'How does Data Cloud handle schema evolution when source systems change?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It requires manual schema updates for all changes',
      'It automatically adapts to schema changes with intelligent mapping',
      'It rejects data from evolved schemas',
      'It maintains separate versions for each schema'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud intelligently adapts to schema evolution by automatically detecting and mapping new fields to maintain data flow continuity.'
  },
  {
    id: 'data-cloud-15',
    text: 'What is the primary advantage of Data Cloud\'s federated query capability?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Improved query performance',
      'Ability to query across multiple data sources without data movement',
      'Enhanced data security',
      'Simplified user interface'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Federated query allows querying across multiple data sources without physically moving or copying data, reducing latency and storage costs.'
  },
  {
    id: 'data-cloud-16',
    text: 'How does Data Cloud ensure data quality during the harmonization process?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Through manual data validation only',
      'Using automated data quality rules and validation checks',
      'By rejecting all incomplete records',
      'Through periodic batch quality assessments'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud employs automated data quality rules and validation checks during ingestion and harmonization to maintain high data standards.'
  },
  {
    id: 'data-cloud-17',
    text: 'What is the role of Identity Graph in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To visualize customer relationships and connections',
      'To create graphical reports and dashboards',
      'To map network topology for data sources',
      'To design user interface layouts'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Identity Graph visualizes and manages customer relationships and connections across different touchpoints and data sources.'
  },
  {
    id: 'data-cloud-18',
    text: 'Which approach is recommended for handling duplicate records during Identity Resolution?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Delete all duplicates automatically',
      'Keep all duplicates for historical purposes',
      'Merge duplicates using configurable match rules and survivorship logic',
      'Flag duplicates for manual review only'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Merging duplicates using configurable match rules and survivorship logic ensures data quality while preserving important information from multiple sources.'
  },
  {
    id: 'data-cloud-19',
    text: 'How does Data Cloud handle cross-system data synchronization?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Through manual export and import processes',
      'Using real-time APIs and change data capture',
      'By scheduling daily batch transfers',
      'Through direct database replication'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud uses real-time APIs and change data capture to maintain synchronized data across systems with minimal latency.'
  },
  {
    id: 'data-cloud-20',
    text: 'What is the benefit of Data Cloud\'s semantic layer?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It provides business-friendly names and definitions for technical data elements',
      'It improves query performance significantly',
      'It encrypts sensitive data automatically',
      'It creates backup copies of all data'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The semantic layer provides business-friendly names and definitions, making technical data elements accessible to business users for analytics.'
  },
  {
    id: 'data-cloud-21',
    text: 'How does Data Cloud support regulatory compliance for data retention?',
    topic: 'Salesforce Data Cloud',
    options: [
      'By storing data indefinitely for audit purposes',
      'Through configurable retention policies and automatic data purging',
      'By encrypting old data instead of deleting it',
      'By moving old data to archive systems only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud supports compliance through configurable retention policies and automatic data purging based on regulatory requirements.'
  },
  {
    id: 'data-cloud-22',
    text: 'What is the primary purpose of Data Cloud\'s activation capabilities?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To activate user accounts',
      'To enable insights and segments for use in other systems',
      'To start data ingestion processes',
      'To activate security features'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Activation capabilities enable insights and customer segments created in Data Cloud to be used in other systems for personalization and engagement.'
  },
  {
    id: 'data-cloud-23',
    text: 'How does Data Cloud handle consent management across multiple touchpoints?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Each touchpoint manages consent independently',
      'Consent is unified across all touchpoints with a central preference center',
      'Consent is handled only at the data source level',
      'Manual consent tracking through spreadsheets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud unifies consent management across all touchpoints, providing a central preference center for consistent privacy control.'
  },
  {
    id: 'data-cloud-24',
    text: 'What is the advantage of Data Cloud\'s no-code/low-code data transformation capabilities?',
    topic: 'Salesforce Data Cloud',
    options: [
      'They eliminate the need for data governance',
      'They enable business users to create data transformations without extensive coding',
      'They improve data security automatically',
      'They reduce storage costs significantly'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'No-code/low-code capabilities democratize data transformation, allowing business users to create and modify data processes without extensive technical skills.'
  },
  {
    id: 'data-cloud-25',
    text: 'How does Data Cloud ensure data accuracy during real-time streaming?',
    topic: 'Salesforce Data Cloud',
    options: [
      'By processing data in strict sequential order only',
      'Through real-time validation rules and quality checks',
      'By storing all data for later verification',
      'By limiting streaming to non-critical data only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Real-time validation rules and quality checks ensure data accuracy is maintained even during high-velocity streaming scenarios.'
  },
  {
    id: 'data-cloud-26',
    text: 'What is the role of External Data Objects in Data Cloud architecture?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To store backup copies of internal data',
      'To represent data that remains in external systems but can be queried through Data Cloud',
      'To export data to external systems',
      'To validate external data sources'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'External Data Objects represent data that remains in source systems but can be queried through Data Cloud\'s federated architecture.'
  },
  {
    id: 'data-cloud-27',
    text: 'How does Data Cloud handle data transformation at scale?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Through distributed processing with automatic scaling',
      'By limiting transformations to off-peak hours',
      'Using single-threaded processing for accuracy',
      'By pre-defining all transformation rules'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Data Cloud uses distributed processing with automatic scaling to handle large-scale data transformations efficiently.'
  },
  {
    id: 'data-cloud-28',
    text: 'What is the primary benefit of Data Cloud\'s customer journey mapping?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It creates visual flowcharts of business processes',
      'It provides unified view of customer interactions across all touchpoints',
      'It maps physical customer locations',
      'It tracks employee interactions with customers'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Customer journey mapping provides a unified view of all customer interactions across different touchpoints and channels over time.'
  },
  {
    id: 'data-cloud-29',
    text: 'How does Data Cloud support predictive analytics on unified data?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Through integration with Einstein Analytics and ML models',
      'By providing statistical analysis functions only',
      'Through manual trend analysis tools',
      'By exporting data to external analytics platforms'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Data Cloud integrates with Einstein Analytics and ML models to provide predictive analytics capabilities on the unified customer data.'
  },
  {
    id: 'data-cloud-30',
    text: 'What is the recommended approach for monitoring Data Cloud performance and health?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Manual monitoring through periodic reports',
      'Using built-in monitoring dashboards and alerts',
      'Relying on external monitoring tools only',
      'Monitoring only during business hours'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Built-in monitoring dashboards and alerts provide comprehensive visibility into Data Cloud performance, data quality, and system health.'
  },

  // Salesforce Fundamentals (20 questions)
  {
    id: 'sf-1',
    text: 'What is the primary function of a Profile in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To determine record visibility via the Role Hierarchy',
      'To control what a user can do with object permissions, field-level security, and tab visibility',
      'To automate data sharing rules across different departments',
      'To establish the organization\'s fiscal year boundaries'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Profiles define baseline object permissions (Create, Read, Edit, Delete), field-level security, page layout assignments, and which tabs are visible to a user.'
  },
  {
    id: 'sf-2',
    text: 'Which type of relationship must be created if the child record\'s access and lifecycle are strictly dependent on the parent record?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Lookup Relationship',
      'Many-to-Many Relationship',
      'Master-Detail Relationship',
      'Self-Relationship'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'In a Master-Detail relationship, the master (parent) record controls the behavior, sharing settings, and lifecycle of the detail (child) record. If the master is deleted, the detail records are also deleted.'
  },
  {
    id: 'sf-3',
    text: 'What is the purpose of Organization-Wide Defaults (OWD) in Salesforce security model?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To set the most restrictive level of access for all users',
      'To define the baseline level of access users have to records they do not own',
      'To configure default field values for new records',
      'To establish organization-wide validation rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OWD settings define the baseline access level that users have to records they do not own, which can then be expanded through role hierarchy, sharing rules, or manual sharing.'
  },
  {
    id: 'sf-4',
    text: 'How does the Role Hierarchy affect record access in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'It grants additional object-level permissions',
      'Users higher in the hierarchy can access records owned by users below them',
      'It determines which profiles can be assigned to users',
      'It controls field-level security settings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Role Hierarchy allows users higher in the hierarchy to inherit access to records owned by users below them, following the principle of upward visibility.'
  },
  {
    id: 'sf-5',
    text: 'What is the difference between a Standard and Custom Object in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Standard objects cannot be customized',
      'Standard objects are provided by Salesforce, while Custom objects are created by users',
      'Custom objects have better performance than Standard objects',
      'Standard objects are only available in Enterprise edition'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Standard objects like Account, Contact, and Opportunity are provided by Salesforce, while Custom objects are created by users to store organization-specific data.'
  },
  {
    id: 'sf-6',
    text: 'What is a Record Type used for in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To classify records for security purposes',
      'To offer different business processes, picklist values, and page layouts for different users',
      'To determine record ownership rules',
      'To control which fields are required'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Record Types allow you to offer different business processes, picklist values, and page layouts to different users based on their profile and role.'
  },
  {
    id: 'sf-7',
    text: 'What is the purpose of Permission Sets in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To replace Profiles entirely',
      'To extend users\' functional access beyond their Profile permissions',
      'To restrict access below Profile level',
      'To manage password policies'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Permission Sets extend users\' functional access by granting additional permissions beyond what their Profile provides, without changing the Profile itself.'
  },
  {
    id: 'sf-8',
    text: 'What is the maximum number of custom fields allowed on a Standard Object?',
    topic: 'Salesforce Fundamentals',
    options: [
      '500 fields',
      '800 fields',
      '1000 fields',
      'Unlimited fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Standard Objects can have up to 800 custom fields, while Custom Objects are limited to 800 total fields (standard + custom).'
  },
  {
    id: 'sf-9',
    text: 'How do Sharing Rules affect record access?',
    topic: 'Salesforce Fundamentals',
    options: [
      'They restrict access below the OWD level',
      'They extend access to records based on record or user characteristics',
      'They replace the need for Role Hierarchy',
      'They only work with Custom Objects'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Sharing Rules extend access to records beyond the OWD level based on criteria such as record ownership, field values, or user characteristics.'
  },
  {
    id: 'sf-10',
    text: 'What is Field-Level Security (FLS) used to control?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Which users can see and edit specific fields on records',
      'Which objects users can access',
      'Record ownership rules',
      'Workflow rule execution'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Field-Level Security controls visibility and editability of specific fields for different profiles and permission sets.'
  },
  {
    id: 'sf-11',
    text: 'What is the purpose of a Sandbox in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To store archived data',
      'To provide a testing and development environment separate from production',
      'To backup production data',
      'To host external applications'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Sandboxes provide isolated testing and development environments where changes can be made and tested before deploying to production.'
  },
  {
    id: 'sf-12',
    text: 'What happens when you delete a record in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'The record is permanently deleted immediately',
      'The record is moved to the Recycle Bin for 15 days',
      'The record is archived but remains accessible',
      'The record is hidden from all users'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Deleted records are moved to the Recycle Bin where they can be restored within 15 days before being permanently deleted.'
  },
  {
    id: 'sf-13',
    text: 'What is the difference between a Public Group and a Queue?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Public Groups are for sharing rules, Queues are for record ownership',
      'There is no difference between them',
      'Public Groups are for external users only',
      'Queues can only contain users, Public Groups can contain other groups'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Public Groups are collections of users used in sharing rules and security settings, while Queues are used for record ownership where multiple users can own records collectively.'
  },
  {
    id: 'sf-14',
    text: 'What is the purpose of Custom Settings in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To create custom objects with enhanced features',
      'To store application settings and configuration data that can be accessed via Apex',
      'To customize the user interface layout',
      'To define custom security rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Settings provide a way to store application settings and configuration data that can be efficiently accessed from Apex code without using SOQL queries.'
  },
  {
    id: 'sf-15',
    text: 'What is the AppExchange in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'A marketplace for third-party applications and components',
      'A tool for exchanging data between orgs',
      'A currency exchange feature',
      'A mobile app development platform'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'AppExchange is Salesforce\'s marketplace where users can find, install, and share third-party applications and components to extend Salesforce functionality.'
  },
  {
    id: 'sf-16',
    text: 'What is a Territory in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'A geographic region for organizing accounts',
      'A flexible system for organizing users and data based on criteria like geography, industry, or other attributes',
      'A type of custom object',
      'A security feature for restricting access'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Territory Management is a flexible system for organizing users and data access based on various criteria, not limited to just geography.'
  },
  {
    id: 'sf-17',
    text: 'What is the purpose of Big Objects in Salesforce?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To store large amounts of data for archival and analytics purposes',
      'To create objects with more fields than standard limits',
      'To improve performance of standard objects',
      'To store binary files and documents'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Big Objects are designed to store and manage massive amounts of data (billions of records) for archival, auditing, and analytics use cases.'
  },
  {
    id: 'sf-18',
    text: 'What is the difference between a Workflow Rule and a Process in Process Builder?',
    topic: 'Salesforce Fundamentals',
    options: [
      'Workflow Rules are more powerful than Processes',
      'Processes can perform more actions and handle more complex logic than Workflow Rules',
      'They serve exactly the same purpose with different interfaces',
      'Workflow Rules are only for Standard Objects'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Process Builder can perform more actions (like creating records, updating related records, calling flows) and handle more complex logic compared to Workflow Rules.'
  },
  {
    id: 'sf-19',
    text: 'What is External ID field used for?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To store unique identifiers from external systems for data integration',
      'To hide field values from certain users',
      'To create relationships between objects',
      'To validate field formats'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'External ID fields store unique identifiers from external systems and are used for data integration, upsert operations, and establishing relationships during data loads.'
  },
  {
    id: 'sf-20',
    text: 'What is the purpose of Global Value Sets?',
    topic: 'Salesforce Fundamentals',
    options: [
      'To create values that can be shared across multiple picklist fields',
      'To store global configuration settings',
      'To define universal access permissions',
      'To create multi-select picklist fields'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Global Value Sets allow you to create a set of picklist values that can be reused across multiple picklist fields, ensuring consistency and easier maintenance.'
  },

  // Salesforce Automation (20 questions)
  {
    id: 'auto-1',
    text: 'What is the default batch size when an executable instance of Batch Apex runs, and what is its maximum permissible configuration limit?',
    topic: 'Salesforce Automation',
    options: [
      'Default is 1 record, maximum is 100 records',
      'Default is 200 records, maximum is 2,000 records',
      'Default is 500 records, maximum is 5,000 records',
      'Default is 1,000 records, maximum is 10,000 records'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Batch Apex chunks records into scopes. The system default is 200 records per batch transaction, but you can configure a custom size up to a hard ceiling of 2,000 records.'
  },

  // Data Modeling (20 questions)
  {
    id: 'data-1',
    text: 'What is the maximum number of Master-Detail relationships a single custom object can have?',
    topic: 'Data Modeling',
    options: [
      '1',
      '2',
      '5',
      'Unlimited'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce imposes a strict platform limit of 2 Master-Detail relationship fields per custom object.'
  },

  // Process Automation (20 questions)  
  {
    id: 'process-1',
    text: 'What is the recommended tool for complex business processes with multiple decision points?',
    topic: 'Process Automation',
    options: [
      'Workflow Rules',
      'Process Builder', 
      'Flow Builder',
      'Approval Process'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Flow Builder is the most powerful and flexible tool for complex business processes with multiple decision points and actions.'
  },

  // Security and Access (20 questions)
  {
    id: 'security-1',
    text: 'What is the most restrictive access level that can be set in Organization-Wide Defaults?',
    topic: 'Security and Access',
    options: [
      'Public Read Only',
      'Public Read/Write',
      'Private',
      'No Access'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Private is the most restrictive OWD setting, allowing access only to record owners and users above them in the role hierarchy.'
  },

  // User Interface (20 questions)
  {
    id: 'ui-1',
    text: 'What is the purpose of Dynamic Forms in Lightning Experience?',
    topic: 'User Interface',
    options: [
      'Create forms that change based on user input',
      'Build forms faster with drag-and-drop',
      'Show/hide fields and sections based on field values',
      'Generate forms automatically from data'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Dynamic Forms allow fields and sections to be shown or hidden based on field values, creating a more interactive user experience.'
  },

  // Reports and Dashboards (20 questions)
  {
    id: 'reports-1',
    text: 'What type of report should be used to compare data from Accounts and Opportunities?',
    topic: 'Reports and Dashboards',
    options: [
      'Tabular Report',
      'Summary Report',
      'Matrix Report',
      'Joined Report'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Joined Reports allow data from multiple report types (like Accounts and Opportunities) to be displayed in a single report.'
  },

  // Integration (20 questions)
  {
    id: 'integration-1',
    text: 'What is the recommended approach for real-time integration between Salesforce and external systems?',
    topic: 'Integration',
    options: [
      'Batch data synchronization',
      'REST API with webhook notifications',
      'Email-to-Case',
      'Data Loader'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'REST API combined with webhooks or platform events enables real-time, bidirectional integration between systems.'
  },

  // Apex Testing (20 questions)
  {
    id: 'test-1',
    text: 'What is the minimum test coverage required to deploy Apex code to production?',
    topic: 'Apex Testing',
    options: [
      '50%',
      '65%',
      '75%',
      '100%'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Minimum 75% test coverage is required for each Apex class and trigger to deploy to production.'
  },

  // Org Development (20 questions)
  {
    id: 'org-1',
    text: 'What is the recommended approach for deploying changes from sandbox to production?',
    topic: 'Org Development',
    options: [
      'Change Sets',
      'ANT Migration Tool',
      'Salesforce CLI with SFDX',
      'All of the above'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'All tools are valid deployment options, with SFDX being the modern recommended approach for DevOps.'
  },

  // OmniStudio Development Tools (20 questions)
  {
    id: 'omni-1',
    text: 'What is the primary purpose of DataRaptors in OmniStudio?',
    topic: 'OmniStudio Development Tools',
    options: [
      'To create user interfaces',
      'To transform data between different formats and structures',
      'To manage user authentication',
      'To schedule batch processes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DataRaptors are used for data transformation, mapping, and integration between different data sources and formats in OmniStudio.'
  },

  // Agentforce & AI (20 questions)
  {
    id: 'agent-1',
    text: 'What is the Einstein Trust Layer\'s primary function in Salesforce AI implementations?',
    topic: 'Agentforce & AI',
    options: [
      'To encrypt all AI model data',
      'To provide governance, security, and ethical AI safeguards',
      'To speed up AI processing',
      'To store AI training data'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Einstein Trust Layer ensures AI implementations follow governance policies, maintain data security, and adhere to ethical AI principles.'
  },

  // Experience Cloud (20 questions)
  {
    id: 'exp-1',
    text: 'What is the Lightning Web Runtime (LWR) architecture\'s main advantage in Experience Cloud?',
    topic: 'Experience Cloud',
    options: [
      'Faster page load times and better SEO optimization',
      'Better integration with Salesforce Classic',
      'Simplified user management',
      'Enhanced security features'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'LWR provides faster rendering, better performance, and improved SEO capabilities for Experience Cloud sites.'
  },

]

export function getQuestions(): ExamQuestion[] {
  return QUESTIONS
}

export function getQuestionsByTopic(topic: string): ExamQuestion[] {
  return QUESTIONS.filter(q => q.topic === topic)
}

// Advanced shuffling system for 7 unique exam sets
export function getUniqueExamSet(examSetNumber: number): ExamQuestion[] {
  if (examSetNumber < 1 || examSetNumber > 7) {
    throw new Error('Exam set number must be between 1 and 7')
  }

  // Calculate starting index for this exam set (50 questions per set)
  const startIndex = (examSetNumber - 1) * 50
  const endIndex = startIndex + 50

  // Ensure we have enough questions
  if (QUESTIONS.length < 350) {
    console.warn(`Warning: Only ${QUESTIONS.length} questions available. Need 350 for 7 complete sets.`)
  }

  // Get the specific 50 questions for this exam set
  const examQuestions = QUESTIONS.slice(startIndex, Math.min(endIndex, QUESTIONS.length))

  // Shuffle the selected 50 questions for this specific exam
  const shuffled = [...examQuestions]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

// Random exam from any of the 7 sets
export function getRandomExamQuestions(count: number = 50): ExamQuestion[] {
  // Randomly select one of the 7 exam sets
  const randomSet = Math.floor(Math.random() * 7) + 1
  return getUniqueExamSet(randomSet).slice(0, count)
}

// Balanced distribution across all topics (original function for compatibility)
export function getBalancedRandomQuestions(count: number): ExamQuestion[] {
  const topics = [
    'Apex Development',
    'Lightning Web Components', 
    'Salesforce Data Cloud',
    'Salesforce Fundamentals',
    'Salesforce Automation',
    'Data Modeling',
    'Process Automation',
    'Security and Access',
    'User Interface',
    'Reports and Dashboards',
    'Integration',
    'Apex Testing',
    'Org Development',
    'OmniStudio Development Tools',
    'Agentforce & AI',
    'Experience Cloud'
  ]
  
  const questionsPerTopic = Math.floor(count / topics.length)
  const remainder = count % topics.length
  const selectedQuestions: ExamQuestion[] = []
  
  topics.forEach((topic, index) => {
    const topicQuestions = QUESTIONS.filter(q => q.topic === topic)
    const shuffled = [...topicQuestions]
    
    // Fisher-Yates shuffle for this topic
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    
    // Take questions for this topic (extra question for first few topics if remainder exists)
    const take = questionsPerTopic + (index < remainder ? 1 : 0)
    selectedQuestions.push(...shuffled.slice(0, Math.min(take, shuffled.length)))
  })
  
  // Final shuffle of the selected questions
  for (let i = selectedQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedQuestions[i], selectedQuestions[j]] = [selectedQuestions[j], selectedQuestions[i]]
  }
  
  return selectedQuestions.slice(0, count)
}

// Additional questions continue here
const ADDITIONAL_QUESTIONS: ExamQuestion[] = [
  {
    id: 'auto-10',
    text: 'What is the programmatic purpose of using the "@InvocableMethod" annotation inside a custom Apex class?',
    topic: 'Salesforce Automation',
    options: [
      'It optimizes database index routing for custom fields',
      'It exposes an Apex method as a declarative action that can be directly called from Flow Builder',
      'It marks a method as an active endpoint for external web service integrations',
      'It forces a method to run in a dedicated test context'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Annotating an Apex method with @InvocableMethod lets declarative administrators find and launch that specialized code block directly inside Flow Builder as an Action.'
  },
  {
    id: 'auto-11',
    text: 'Which automation tool allows you to build sophisticated multi-user, multi-step business processes that span across different departments, teams, and timelines?',
    topic: 'Salesforce Automation',
    options: [
      'Validation Rules',
      'Salesforce Flow Orchestrator',
      'Workflow Outbound Messages',
      'Apex Unit Testing Suites'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Flow Orchestrator lets you sequence complex series of flows (orchestrations) involving multiple individuals or queues, tracking steps and stages across long-running business lifecycles.'
  },
  {
    id: 'auto-12',
    text: 'What occurs during a Salesforce transaction if an unhandled exception is thrown inside an Apex Trigger or a Record-Triggered Flow execution path?',
    topic: 'Salesforce Automation',
    options: [
      'The transaction partially saves valid records and skips faulty records',
      'The entire database transaction is completely rolled back, and no changes are committed',
      'The platform ignores the exception and logs an administrative error notice',
      'The record owner\'s profile is automatically suspended'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce enforces strict transactional boundaries. If an uncaught exception occurs anywhere in the execution chain, the entire database transaction fails, rolling back all pending inserts or updates.'
  },
  {
    id: 'auto-13',
    text: 'Universal Containers wants to automatically send a text notification via a third-party API whenever an Opportunity is closed won. The external callout must not delay the user interface response. How should this be structured?',
    topic: 'Salesforce Automation',
    options: [
      'Create a validation rule that performs an inline HTTP request',
      'Use an after-save Record-Triggered Flow that calls an asynchronous Apex action annotated with @future(callout=true)',
      'Run a synchronous before-insert trigger containing an execution loop',
      'Configure a Screen Flow that loops continuously checking record fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'External integrations (callouts) cannot run synchronously within a standard database transaction. Moving the callout to an asynchronous thread using @future(callout=true) or an Asynchronous Path in Flow prevents UX lag and avoids callout exceptions.'
  },
  {
    id: 'auto-14',
    text: 'An administrator needs to automatically assign incoming service cases to specific queues based on the customer\'s region and account priority level. If no conditions match, it must route to a default tier-1 queue. What is the most efficient declarative tool for this requirement?',
    topic: 'Salesforce Automation',
    options: [
      'Validation Rules tracking string values',
      'Case Assignment Rules with multiple ordered rule entries',
      'A series of formula fields updating lookup IDs',
      'An outbound messaging queue script'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Case Assignment Rules are designed for this exact scenario. They process records sequentially down an ordered list of criteria entries, routing the Case to a designated Queue or User as soon as a match is verified.'
  },
  {
    id: 'auto-15',
    text: 'A business requires that when a high-value Opportunity enters the "Negotiation" stage, an approval request must be routed to the Finance Director. If approved, the stage moves to "Closed Won"; if rejected, it drops to "Qualification". How should this workflow be automated?',
    topic: 'Salesforce Automation',
    options: [
      'Build a complex Validation Rule checking user titles',
      'Configure an Approval Process with specific Final Approval and Final Rejection actions to update the Stage field',
      'Deploy an Apex Trigger utilizing a hardcoded matrix of user names',
      'Configure a Fast Field Update Flow containing an infinite loop mechanism'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'An Approval Process natively manages record routing, locking, and multi-stage decisions. Its Final Approval and Final Rejection Action sections can handle the field updates to transition the Opportunity Stage automatically.'
  },
  {
    id: 'auto-16',
    text: 'Your system is throwing a "System.LimitException: Too many SOQL queries: 101" error when a bulk import of 500 records is executed. The developer traces this error to a database trigger. What is the root cause of this defect?',
    topic: 'Salesforce Automation',
    options: [
      'The import file contains formatting anomalies and corrupt characters',
      'The database trigger logic contains a SOQL query execution statement placed inside a for-loop',
      'The organization has run out of allocated cloud storage space',
      'The data import utility is operating at an incorrect connection speed'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce limits transactions to 100 synchronous SOQL queries. If a trigger executes a query inside a loop iterating over records, it quickly hits this wall. Triggers must be bulkified by querying data outside loops using collections.'
  },
  {
    id: 'auto-17',
    text: 'A manufacturing firm wants to calculate a rolling 30-day health score for assets. The automation must evaluate 2 million asset history tracking records every Sunday morning at 2:00 AM. Which automation solution satisfies this requirement?',
    topic: 'Salesforce Automation',
    options: [
      'A real-time Record-Triggered Flow running on asset updates',
      'An Escalation Rule configured to track time milestones',
      'A Schedulable Apex class that instantiates a Batch Apex job to process records in manageable scopes',
      'A multi-screen user interactive Flow embedded in a dashboard utility bar'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Processing millions of records exceeds standard transaction limits. Combining Schedulable Apex (to target the Sunday 2:00 AM window) with Batch Apex (to split the 2 million records into chunks) prevents runtime limit issues.'
  },
  {
    id: 'auto-18',
    text: 'An executive requests that when a custom "Project" record is marked "Completed," the system must verify if all related "Project Tasks" are marked "Closed." If any task remains open, the Project must throw an explicit error message and block the change. How can this rule be cleanly executed?',
    topic: 'Salesforce Automation',
    options: [
      'Create a roll-up summary field on Project counting open tasks, then build a Validation Rule on Project that triggers an error if Status is "Completed" and the count is greater than zero',
      'Build a Screen Flow that forces users to manually inspect lists',
      'Configure an assignment rule that transfers tasks to a different queue',
      'Set the custom object OWD setting to Public Read/Write'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A Roll-Up Summary field dynamically aggregates child metrics. Combining it with a Validation Rule on the parent record allows declarative blocking and displays custom error messages right when a user tries to save the record.'
  },
  {
    id: 'auto-19',
    text: 'A developer needs to execute custom logic that relies on a record\'s auto-generated "Created Date" and ID parameters immediately following its initial insertion. Which trigger execution phase must be utilized?',
    topic: 'Salesforce Automation',
    options: [
      'before insert',
      'after insert',
      'before update',
      'after delete'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'System fields like Record ID and Created Date do not exist during the "before insert" phase. They are only generated when written to the database, making them accessible in the "after insert" context.'
  },
  {
    id: 'auto-20',
    text: 'An administrator needs to create an automation that builds a new onboarding checklist (multiple task records) whenever a new Employee record is initialized. What is the recommended declarative approach?',
    topic: 'Salesforce Automation',
    options: [
      'A Validation Rule targeting employee status strings',
      'An "Actions and Related Records" (After-Save) Record-Triggered Flow utilizing Create Records elements within its canvas',
      'A custom Formula field outputting hyperlink fields',
      'An assignment rule targeting HR queues'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To create or update records other than the triggering record itself, you must use an After-Save Record-Triggered Flow (Actions and Related Records), which runs after the initial database save event.'
  },

  {
    id: 'apex-1',
    text: 'What is the purpose of the @AuraEnabled annotation in Apex?',
    topic: 'Apex Development',
    options: [
      'Makes method available to Aura and LWC components',
      'Enables method for API access',
      'Marks method for testing',
      'Optimizes method performance'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: '@AuraEnabled makes Apex methods callable from Aura Components and Lightning Web Components.'
  },
  {
    id: 'apex-2',
    text: 'In a scenario where you need to process 10,000 records, which approach would be most appropriate?',
    topic: 'Apex Development',
    options: [
      'For loop processing each record individually',
      'Batch Apex',
      'Synchronous Apex with bulk operations',
      'Future methods'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Batch Apex is designed for processing large numbers of records asynchronously while respecting governor limits.'
  },
  {
    id: 'apex-3',
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
    explanation: 'A Set is an unordered collection of elements that cannot contain any duplicate values. It is highly efficient for uniqueness checks.'
  },
  {
    id: 'apex-4',
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
    explanation: 'The "with sharing" keyword ensures that the platform enforces the current user\'s record-level sharing rules (OWDs, role hierarchy, sharing rules). It does not natively enforce CRUD/FLS permissions.'
  },
  {
    id: 'apex-5',
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
    explanation: 'Future methods cannot take sObjects or objects as parameters because the state of the record could change between the method call and its actual asynchronous execution. Passing IDs is the standard best practice.'
  },
  {
    id: 'apex-6',
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
    explanation: 'To schedule an Apex class declarative or via System.schedule, the class must implement the Schedulable interface and define its execute method.'
  },
  {
    id: 'apex-7',
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
    explanation: 'By default, Batch Apex is stateless; instance variables reset for each chunk execution. Implementing Database.Stateful allows you to maintain state (like running totals or counter logs) across all execution blocks.'
  },
  {
    id: 'apex-8',
    text: 'Which statement is true regarding the execution behavior of the "Test.startTest()" and "Test.stopTest()" method sequence?',
    topic: 'Apex Development',
    options: [
      'It completely clears all records committed to the database during the test setup',
      'It provides a fresh set of asynchronous governor limits and forces all pending asynchronous operations to run synchronously when stopTest() is reached',
      'It automatically generates mock HTTP callout payloads for external testing frames',
      'It increases the code coverage percentage calculation for the target class'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Test.startTest() gives the code a separate, fresh set of governor limits. When Test.stopTest() is called, the system forces any queued asynchronous jobs (future, batch, queueable) to complete synchronously before proceeding.'
  },
  {
    id: 'apex-9',
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
    explanation: 'The governor limit dictates that an Apex SOSL query can find and return a maximum total of 2,000 records across all searched objects in a single execution step.'
  },
  {
    id: 'apex-10',
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
    explanation: 'Queueable Apex overcomes future method limitations by accepting complex types/sObjects as inputs, returning a specific Job ID for tracking, and allowing you to explicitly chain jobs together sequentially.'
  },
  {
    id: 'apex-11',
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
    explanation: 'The "new" keyword allocation instantiates objects, collections (List, Set, Map), and arrays, allocating appropriate memory in the runtime environment.'
  },
  {
    id: 'apex-12',
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
    explanation: 'A try-catch block isolates code that might cause runtime issues, capturing exceptions cleanly and allowing fallback execution or explicit error logging instead of a fatal crash.'
  },
  {
    id: 'apex-13',
    text: 'A developer needs to write a test class for an Apex trigger that responds to Account modifications. How should the test data be handled to guarantee isolation and compliance with development best practices?',
    topic: 'Apex Development',
    options: [
      'Query active production records using standard SOQL directly from the database frame',
      'Utilize a @testSetup method to insert mock test Accounts into the isolated transaction before testing logic',
      'Hardcode active production Account record IDs inside the test method parameter strings',
      'Disable validation rules inside the trigger script file before deploying the test package'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Apex test context blocks direct data visibility by default (SeeAllData=false). Using a @testSetup annotated method builds data once per test class execution, isolating dependencies and reducing runtimes.'
  },
  {
    id: 'apex-14',
    text: 'A business requires an automation to query Contact email structures, compare them against a blacklist database external table, and update status fields. This must process up to 300,000 active records. How should this be orchestrated?',
    topic: 'Salesforce Automation',
    options: [
      'Build an inline query loop within an After-Update database execution trigger',
      'Implement an Apex Class extending Database.Batchable to process records asynchronously in configurable chunks',
      'Deploy a single fast field update flow containing recursive assignment paths',
      'Construct a nested query layout within a standard formula calculation block'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Processing 300,000 rows synchronously exceeds heap size and query limits. A Batch Apex framework breaks the scope down into manageable pieces (usually 200 items each), respecting platform limits cleanly.'
  },
  {
    id: 'apex-15',
    text: 'You receive an exception error stating "System.LimitException: Too many DML statements: 151" during a bulk data load process. How should the code pattern be adjusted to resolve this issue?',
    topic: 'Apex Development',
    options: [
      'Ask the customer success manager to permanently increase the DML statement governor threshold limits',
      'Move the database DML insert/update statement completely outside of the record iteration for-loop by utilizing a collection List to store and execute data at once',
      'Split the input file into smaller groups of 50 items each before using Data Loader',
      'Convert the target object relationship tracking pattern from Lookup into Master-Detail'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce restricts an execution window to 150 synchronous DML statements. Executing an insert or update statement inside a loop triggers this error. Moving records into a List and running a single DML statement outside the loop is standard bulkification.'
  },
  {
    id: 'apex-16',
    text: 'A developer needs to write an Apex controller method that returns data to a custom dropdown component inside a Lightning Web Component. The method only performs data lookups. What is the most optimal way to declare this method?',
    topic: 'Apex Development',
    options: [
      '@AuraEnabled public static list method()',
      '@AuraEnabled(cacheable=true) public static List method()',
      '@InvocableMethod public static list method()',
      'public static void method()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using @AuraEnabled(cacheable=true) caches the returned data on the client side, reducing round-trips to the Salesforce server, boosting component loading performance, and removing DML access within the transaction.'
  },
  {
    id: 'apex-17',
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
    explanation: 'This pattern collects related IDs into a Set, executes one single SOQL operation outside loops to retrieve parent information, and registers them in a Map for instantaneous indexing during processing loops.'
  },
  {
    id: 'apex-18',
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
    id: 'apex-19',
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
    id: 'apex-20',
    text: 'A developer wants to ensure that a specific block of logic within an Apex Class method can only see and manipulate fields if the running user has appropriate profile or permission set access to them. How should this be handled?',
    topic: 'Apex Development',
    options: [
      'Rely exclusively on the standard "with sharing" class declaration keyword',
      'Use the WITH USER_MODE clause inside SOQL queries or enforce schema access checks natively via Security.stripInaccessible',
      'Create separate duplicate objects to split profile permission pathways completely',
      'Force all data processing transactions to occur inside an asynchronous batch job block'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'While "with sharing" restricts record-level visibility, it does not check object (CRUD) or field-level security (FLS). Incorporating WITH USER_MODE in queries or applying Security.stripInaccessible ensures the system strictly respects user permissions for data access.'
  },
  {
    id: 'apex-21',
    text: 'During the Salesforce Save Order of Execution, when do standard Validation Rules evaluate relative to Before and After Triggers?',
    topic: 'Apex Development',
    options: [
      'Before "Before Triggers" execute',
      'After "Before Triggers" but before "After Triggers" execute',
      'After "After Triggers" execute',
      'Simultaneously with Assignment Rules'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'In the Save Order of Execution, Salesforce runs system and user-defined validation rules after "before triggers" have completed their field assignments, but prior to committing changes or running "after triggers."'
  },
  {
    id: 'apex-22',
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
    id: 'apex-23',
    text: 'What operational capability does an Apex Transaction Finalizer offer when attached to a Queueable Apex job thread?',
    topic: 'Apex Development',
    options: [
      'It increases the maximum synchronous heap size limit to 12MB',
      'It allows developers to design fallback actions, logging routines, or retry loops that execute automatically when the Queueable job either succeeds or fails',
      'It bypasses validation rules during mass data loading routines',
      'It converts standard object lookup fields into master-detail relationships natively'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Transaction Finalizers attach to Queueable jobs via the Finalizer interface. They provide an execute method that checks the parent job status, letting you manage exceptions or run recovery routines cleanly.'
  },
  {
    id: 'apex-24',
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
    id: 'apex-25',
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
    id: 'apex-26',
    text: 'A business requires an Apex routine that processes high-volume updates. To prevent lock-contention issues when multiple users modify identical parent rows simultaneously, what clause should be appended to the SOQL query statement?',
    topic: 'Apex Development',
    options: [
      'WITH USER_MODE',
      'FOR UPDATE',
      'ALL ROWS',
      'WITH SECURITY_ENFORCED'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'The FOR UPDATE clause locks the queried records on the database server. This forces other transactions attempting to modify those same rows to wait until the current transaction completes, avoiding race conditions.'
  },
  {
    id: 'apex-27',
    text: 'Inside an Apex Trigger, what is a critical functional limitation when attempting to modify field values directly within the "Trigger.new" collection context?',
    topic: 'Apex Development',
    options: [
      'Trigger.new values cannot be read or mapped in any context',
      'Field values can only be modified directly in "before" trigger contexts; modifying Trigger.new in an "after" trigger context throws a read-only exception error',
      'Trigger.new values are completely hidden from low-privilege profiles',
      'Modifications require an active external integration webhook connection to validate'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'In before triggers, records are still in-memory and can be directly altered. By the time after triggers execute, the records are written to the database schema, making Trigger.new read-only.'
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
    text: 'What is the purpose of utilizing the "Database.setSavepoint()" and "Database.rollback()" method sequence within complex Apex controller operations?',
    topic: 'Apex Development',
    options: [
      'To increase synchronous CPU timeout execution limit margins by 10 seconds',
      'To define a specific logical point in transaction execution, allowing the system to undo database modifications if subsequent validation actions fail',
      'To export transactional data rows into external cloud backup folders',
      'To force client components to refresh their view state caches instantly'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Savepoints allow transactional rollback management. If an error occurs halfway through a multi-step operation, calling rollback resets the database state to the defined savepoint, preventing partial data corruption.'
  },
  {
    id: 'apex-30',
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
    explanation: 'Salesforce standard SOQL limits relationship queries to a single child nesting level (one outer select and one inner parent-to-child subquery). Deep multi-level child joins are not supported.'
  },
  {
    id: 'lwc-1',
    text: 'What decorator is used to make a property reactive in Lightning Web Components?',
    topic: 'Lightning Web Components',
    options: [
      '@api',
      '@track',
      '@wire',
      'Properties are automatically reactive'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'In modern LWC, properties are automatically reactive. @track is deprecated and @api is for public properties.'
  },
  {
    id: 'lwc-2',
    text: 'In a scenario where an LWC needs to communicate with its parent component, what should be used?',
    topic: 'Lightning Web Components',
    options: [
      'Custom Events',
      'Lightning Message Service',
      'Shared JavaScript',
      'Global Variables'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Custom Events are the standard way for child components to communicate with parent components in the DOM hierarchy.'
  },
  {
    id: 'lwc-3',
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
    id: 'lwc-4',
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
    id: 'lwc-5',
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
    id: 'lwc-6',
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
    id: 'lwc-7',
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
    id: 'lwc-8',
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
    id: 'lwc-9',
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
    id: 'lwc-10',
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
    id: 'lwc-11',
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
    id: 'lwc-12',
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
    id: 'lwc-13',
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
    explanation: 'You cannot access elements in the template during constructor() or connectedCallback() because the component has not finished rendering. Element tracking or third-party chart setups must happen in renderedCallback() when the DOM is fully loaded.'
  },
  {
    id: 'lwc-14',
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
    id: 'lwc-15',
    text: 'You have a component displaying tabular financial stats that fetches database updates using a wired Apex adapter. Users state that updates aren\'t displaying when records are modified. How can the component be forced to refresh its wired data cache?',
    topic: 'Lightning Web Components',
    options: [
      'Execute a window.location.reload() instruction on every transaction event',
      'Import the "refreshApex" function from the lwc module and invoke it using the complete provisioned object wrapper returned by the wire',
      'Re-instantiate the @api decorator strings on the component',
      'Toggle the lwc:if template directive flags continuously within the template scope'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Wired properties automatically use a cache framework. To manually wipe that cache and force a server-side data fetch without refreshing the entire browser tab, you pass the wire variable directly into the refreshApex() function.'
  },
  {
    id: 'lwc-16',
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
    id: 'lwc-17',
    text: 'An LWC application displays a list of searchable product lines. The developer observes extreme lag because a server-side Apex query executes on every single character keystroke. What is the standard design pattern used to optimize this performance concern?',
    topic: 'Lightning Web Components',
    options: [
      'Switch the data retrieval loop from an asynchronous thread into a synchronous background worker frame',
      'Implement a debounce timer in JavaScript to delay the server call until the user has stopped typing for a brief period (e.g., 300ms)',
      'Convert the text parameter from a standard string field into an array structure',
      'Replace the HTML template for-each layout engine with a hardcoded matrix block'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Debouncing delays function calls. By utilizing a setTimeout mechanism on the keystroke handler, you cancel and reset the execution window with each keypress, firing the database request only when typing halts.'
  },
  {
    id: 'lwc-18',
    text: 'A nested child LWC needs to receive a contextual Record Id parameter directly from its parent view container page layout slot. How must the parameter property be declared inside the child component class?',
    topic: 'Lightning Web Components',
    options: [
      'public String recordId;',
      '@api recordId;',
      '@track recordId;',
      '@wire recordId;'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To allow properties to be driven downwards into a component by a parent or a Lightning Page context container, the variable must be prefixed with the public @api decorator annotation.'
  },
  {
    id: 'lwc-19',
    text: 'A developer wants to load an external third-party charting library like Chart.js from a Static Resource into a Lightning Web Component. Which approach is required to comply with security frameworks?',
    topic: 'Lightning Web Components',
    options: [
      'Inject standard script tags pointing directly to external Content Delivery Network (CDN) links within the HTML page',
      'Use platformResourceLoader to import the static resource script, then initialize the library inside a Promise resolution block within connectedCallback() or renderedCallback()',
      'Convert the third-party library code into a custom Apex class utility framework',
      'Bypass Lightning Web Security (LWS) settings inside the organization configuration dashboard'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce security rules block external scripts. Scripts must be uploaded into a Static Resource bundle and loaded safely using "loadScript" from the platformResourceLoader module, typically inside an initialized Promise chain.'
  },
  {
    id: 'lwc-20',
    text: 'A parent LWC contains several identical child item layouts. The parent needs to cleanly execute an "uncheckAll" reset function defined inside all children simultaneously. How can the parent target and invoke this behavior?',
    topic: 'Lightning Web Components',
    options: [
      'Query the children elements using this.template.querySelectorAll() and call the method directly on each element, ensuring the child method is annotated with @api',
      'Publish a global platform notification via custom Apex messaging routes',
      'Modify local @track state arrays to re-render the entire viewport layout frame',
      'Dispatch a standard custom event that bubbles upwards out of the template'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A parent component can select child elements using DOM methods like querySelectorAll(). It can then call a method directly on those child references as long as the child method is marked public using the @api decorator.'
  },
  {
    id: 'lwc-21',
    text: 'When a parent component passes a primitive value to a child component property marked with the @api decorator, what occurs if the child component attempts to mutate that property directly in its JavaScript controller?',
    topic: 'Lightning Web Components',
    options: [
      'The value updates locally and propagates automatically up to the parent template',
      'The framework throws a runtime error because properties decorated with @api are read-only public properties',
      'The parent component re-renders completely but the child component state resets to null',
      'The mutation is accepted silently but field-level security blocks any subsequent database updates'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Properties marked with @api represent the component\'s public API and enforce a one-way data flow from parent to child. The child cannot mutate its own public properties directly; it must dispatch an event to request the parent to change the value.'
  },
  {
    id: 'lwc-22',
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
    explanation: 'To maintain shadow DOM styling encapsulation boundaries, developers must use `this.template.querySelector()` or `this.template.querySelectorAll()` to inspect and interact with elements rendered inside the component template.'
  },
  {
    id: 'lwc-23',
    text: 'What is the correct execution order of lifecycle hooks when a nested LWC component tree initializes and mounts onto a page layout?',
    topic: 'Lightning Web Components',
    options: [
      'Parent connectedCallback -> Parent constructor -> Child connectedCallback -> Child renderedCallback -> Parent renderedCallback',
      'Parent constructor -> Parent connectedCallback -> Child constructor -> Child connectedCallback -> Child renderedCallback -> Parent renderedCallback',
      'Child constructor -> Child connectedCallback -> Parent constructor -> Parent connectedCallback -> Parent renderedCallback -> Child renderedCallback',
      'Parent constructor -> Child constructor -> Parent connectedCallback -> Child connectedCallback -> Parent renderedCallback -> Child renderedCallback'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'The creation phase flows downward from parent to child (constructor and connectedCallback), while the rendering phase flows upward from child to parent (renderedCallback) once the child DOM trees are fully initialized and appended.'
  },
  {
    id: 'lwc-24',
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
    explanation: 'LWC supports standard ECMAScript modules. A component without an HTML file can export constants, utility methods, or classes using standard `export` syntax, allowing other components to bring them in using standard `import` statements.'
  },
  {
    id: 'lwc-25',
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
    explanation: 'A wired property or function receives an object parameter containing two primary fields: `data` (holding the successfully resolved record payload metadata) and `error` (holding exception or permission details if the call fails).'
  },
  {
    id: 'lwc-26',
    text: 'You have a component displaying tabular operational data that uses a wired Apex adapter. If an inline transaction updates record fields, how can the component force its stale client-side cache to refresh immediately from the server?',
    topic: 'Lightning Web Components',
    options: [
      'Call the JavaScript method window.location.reload() inside the update statement block',
      'Import the refreshApex function from the @salesforce/apex module and pass the complete provisioned object property into it',
      'Toggle the public @api tracking variables continuously inside the controller class',
      'Re-execute the constructor lifecycle chain manually'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Wired Apex methods cache their results automatically to optimize UI rendering speeds. To force a data refresh and clear that cache without a full page refresh, you must invoke the `refreshApex()` utility function, passing the complete object returned by the wire.'
  },
  {
    id: 'lwc-27',
    text: 'To comply with Lightning Web Security (LWS) frameworks, what standard practice must a developer follow when attempting to load a third-party charting library like Chart.js from a Static Resource into an LWC component canvas?',
    topic: 'Lightning Web Components',
    options: [
      'Inject regular script tag references pointing directly to public CDN links inside the HTML page',
      'Import loadScript and loadStyle from the lightning/platformResourceLoader module, and initialize the script via a resolved Promise chain inside renderedCallback()',
      'Convert the entire third-party library source into a custom Apex class utility framework',
      'Deactivate the organization-wide Content Security Policy configuration settings'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'LWS blocks direct injections of external script URLs. Third-party files must be uploaded as static resources, then loaded safely using the `loadScript` and `loadStyle` methods from `lightning/platformResourceLoader` within a Promise structure.'
  },
  {
    id: 'lwc-28',
    text: 'When configuring custom component communication, what behavior happens if a developer sets bubbles: true and composed: true inside an instantiated CustomEvent constructor parameters mapping?',
    topic: 'Lightning Web Components',
    options: [
      'The event travels down into child components recursively bypassing layout slots',
      'The event bubbles up the DOM hierarchy and breaks through the shadow DOM boundary, making it visible to parent components outside the shadow root container',
      'The event executes synchronously in a privileged system execution thread',
      'The event forces validation rules to run on parent fields before re-rendering views'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Setting `bubbles: true` lets the event bubble up the DOM tree. Setting `composed: true` allows that event to cross the shadow DOM boundary, making it visible to parent layouts outside the internal component scope.'
  },
  {
    id: 'lwc-29',
    text: 'What standard element directive should be used in modern LWC templates to conditionally hide or render an HTML block layout based on the evaluation outcome of a JS property checkbox state?',
    topic: 'Lightning Web Components',
    options: [
      'if:true',
      'lwc:if',
      'rendered',
      'v-if'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Modern Lightning Web Components use the `lwc:if`, `lwc:elseif`, and `lwc:else` directives to handle conditional rendering logic efficiently within HTML templates.'
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
    explanation: 'Debouncing groups multiple sequential events together. By delaying the execution of an action (like a server-side query) until a user stops typing for a specific period (e.g., 300ms), it minimizes resource strain and smooths performance.'
  },

  {
    id: 'data-1',
    text: 'What is the maximum number of characters allowed in a Long Text Area field?',
    topic: 'Data Modeling',
    options: [
      '255',
      '1,000',
      '32,000',
      '131,072'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Long Text Area fields can store up to 131,072 characters.'
  },
  {
    id: 'data-2',
    text: 'A company needs to prevent duplicate accounts based on website domain. What should be implemented?',
    topic: 'Data Modeling',
    options: [
      'Validation Rule',
      'Duplicate Rule with Matching Rule',
      'Workflow Rule',
      'Trigger'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Duplicate Rules combined with Matching Rules can prevent duplicates based on custom criteria like website domain.'
  },
  {
    id: 'data-3',
    text: 'What is a key structural difference between a Lookup relationship and a Master-Detail relationship?',
    topic: 'Data Modeling',
    options: [
      'A lookup relationship field is always mandatory on a page layout, whereas master-detail is always optional',
      'Deleting a master record automatically deletes its related detail records, whereas deleting a lookup parent does not delete the child by default',
      'Lookup relationships allow roll-up summary fields to be created on the parent object, whereas master-detail relationships do not',
      'An object can have up to 40 master-detail relationships but only 2 lookup relationships'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Master-Detail relationships enforce tight coupling: deleting the master record deletes all children. In a Lookup relationship, deleting the parent simply clears the lookup field value by default.'
  },
  {
    id: 'data-4',
    text: 'What type of field should be created to store a calculated value based on fields in a child object within a Master-Detail relationship?',
    topic: 'Data Modeling',
    options: [
      'Formula Field',
      'Roll-Up Summary Field',
      'Cross-Object Formula Field',
      'Text Area (Rich) Field'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Roll-Up Summary fields are declarative tools used on the Master side of a Master-Detail relationship to calculate values (SUM, COUNT, MIN, MAX) from related detail records.'
  },
  {
    id: 'data-5',
    text: 'What is the purpose of an External ID field in Salesforce?',
    topic: 'Data Modeling',
    options: [
      'To allow external systems to bypass Salesforce login credentials completely',
      'To uniquely reference an identification record or key coming from an outside system, speeding up upsert operations via data utilities',
      'To flag an object as visible to external unauthenticated site visitors',
      'To hold the IP addresses of servers communicating with the Salesforce API layer'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'An External ID contains unique record identifiers from an external database (like an ERP system). This allows Data Loader or integrations to match and upsert records without querying Salesforce IDs first.'
  },
  {
    id: 'data-6',
    text: 'Which field types can be designated as an External ID in Salesforce?',
    topic: 'Data Modeling',
    options: [
      'Text, Number, Email, or Auto-Number',
      'Checkbox, Picklist, or URL',
      'Long Text Area, Date, and Currency',
      'Master-Detail or Lookup relationship fields'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Only custom fields of type Text, Number, Email, or Auto-Number can be flagged as an External ID field during configuration.'
  },
  {
    id: 'data-7',
    text: 'What data model adjustment occurs when a Master-Detail relationship is converted into a Lookup relationship?',
    topic: 'Data Modeling',
    options: [
      'All pre-existing roll-up summary fields on the parent object are automatically converted into standard formula fields',
      'All existing roll-up summary fields on the parent object are permanently deleted',
      'The child records are immediately detached and transferred to a default system queue',
      'The conversion is blocked until all records are manually deleted from the database'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Because Roll-Up Summary fields strictly require a Master-Detail relationship to calculate metrics, converting the relationship to a Lookup will instantly drop support for those summary fields, forcing their deletion.'
  },
  {
    id: 'data-8',
    text: 'What does a "Self-Relationship" represent in Salesforce data modeling?',
    topic: 'Data Modeling',
    options: [
      'A lookup relationship from an object to itself, allowing records to be linked hierarchically',
      'A validation rule checking if a user is editing their own employee file',
      'A master-detail relationship between two distinct custom objects sharing the same owner',
      'A formula field referencing another formula field inside the same layout page'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'A self-relationship is a standard lookup pointing back to the same object structure. A classic example is the Account object\'s standard "Parent Account" field, which points to another Account record.'
  },
  {
    id: 'data-9',
    text: 'What is the maximum number of custom fields you can create on a standard or custom object in a Salesforce Enterprise Edition organization?',
    topic: 'Data Modeling',
    options: [
      '100',
      '500',
      '800',
      '2,000'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Enterprise Edition allows up to 500 custom fields per object. Unlimited/Performance editions extend this cap to 800 custom fields.'
  },
  {
    id: 'data-10',
    text: 'What feature should be used to change a standard picklist field\'s values across different segments of users based on their functional business needs?',
    topic: 'Data Modeling',
    options: [
      'Validation Rules tracking profile strings',
      'Record Types with customized Picklist allocations',
      'Field-Level Security settings',
      'Page Layout section properties'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Record Types let you map specific picklist values to different records under the same object framework, tailoring select options to business processes without creating new fields.'
  },
  {
    id: 'data-11',
    text: 'What happens to field historical data tracking records if a tracked custom field is deleted from an object?',
    topic: 'Data Modeling',
    options: [
      'The historical logs are kept permanently and moved to a system archive bucket',
      'The historical data tracking entries for that specific field are automatically deleted along with the field',
      'The field deletion is permanently blocked until historical logging is deactivated',
      'The system transfers the historical values into the description field of the object'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Deleting a custom field removes both the field definition and its associated data, including any historical logs tracked in the object\'s History table.'
  },
  {
    id: 'data-12',
    text: 'What is a "Big Object" in the Salesforce platform architecture?',
    topic: 'Data Modeling',
    options: [
      'A standard object that contains more than 100 custom lookup fields',
      'An object architecture designed to securely store and manage massive volumes of data (billions of records) with consistent performance tracking limits',
      'A custom canvas layout designed for tablet screens',
      'A temporary database frame used to compress metadata files during migration deployments'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Big Objects provide consistent sub-second scaling capabilities to manage massive data footprints (millions or billions of rows) inside Salesforce for historical storage or auditing.'
  },
  {
    id: 'data-13',
    text: 'Universal Containers wants to track physical company assets and their maintenance logs. Each asset must track multiple maintenance items, and if an asset is retired and deleted, its logs are no longer needed. How should this schema be established?',
    topic: 'Data Modeling',
    options: [
      'Create a Lookup relationship on Maintenance Item pointing to the Asset object',
      'Create a Master-Detail relationship field on Maintenance Item with the Asset designated as the Master object',
      'Construct a junction object using two lookup fields to tie assets to maintenance queues',
      'Map both data sets into a singular rich text area field on the Account record layout'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Since the maintenance logs are completely dependent on the Asset and should be automatically cleared out when the parent Asset is deleted, a Master-Detail relationship is the correct architecture.'
  },
  {
    id: 'data-14',
    text: 'A consulting company needs to model a system where Projects can have multiple Consultants assigned to them, and Consultants can work on multiple Projects simultaneously. What relational structure should the administrator build?',
    topic: 'Data Modeling',
    options: [
      'A Direct lookup field on the Consultant object pointing to the Project object',
      'A custom junction object containing two separate Master-Detail relationship fields pointing to Project and Consultant respectively',
      'A self-relationship lookup configuration on the Project layout framework',
      'A roll-up summary calculation linking both objects directly'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce handles many-to-many relationships by creating a "junction object." This object sits in the middle, leveraging two Master-Detail fields to connect the records on both sides.'
  },
  {
    id: 'data-15',
    text: 'An administrator needs to create a formula field on the Contact object that displays the "Region" value from the parent Account object. What technique should be utilized?',
    topic: 'Data Modeling',
    options: [
      'Construct a text validation routine evaluating contact mailing codes',
      'Create a formula field using cross-object notation (e.g., Account.Region__c) to pull the value downstream from the parent record',
      'Build a roll-up summary field configured to merge textual field rows',
      'Deploy an Apex trigger to execute an explicit SOQL statement on each layout click'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Cross-object formulas reference merge fields from a parent or master object, pulling data down onto the child layout declarations smoothly without custom code.'
  },
  {
    id: 'data-16',
    text: 'A business requires that any Account record marked as a "Prospect" must contain a value inside the "Prospect Rating" picklist field before it can be saved. How should this requirement be enforced?',
    topic: 'Data Modeling',
    options: [
      'Mark the field as universally required inside the custom field setting checkbox parameters',
      'Create a validation rule with a formula checking: ISPICKVAL(Type, "Prospect") && ISBLANK(TEXT(Prospect_Rating__c))',
      'Remove the field from the standard layout profiles entirely',
      'Convert the Prospect Rating field from a picklist type into a master-detail relationship'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Universally requiring the field would force it across all account types. Using a conditional validation rule blocks saving only when the criteria evaluate to TRUE (Type is Prospect and Rating is empty).'
  },
  {
    id: 'data-17',
    text: 'A business needs to establish a field tracking the precise global coordinate location of their cellular tower hardware items. The data will be used to plot towers on maps. What custom field type should be created?',
    topic: 'Data Modeling',
    options: [
      'External ID Text Field',
      'Geolocation Field',
      'Lookup Field to Map Object',
      'Formula field calculating numeric values'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Geolocation field type allows you to capture latitude and longitude values, enabling distance calculations and mapping functions natively within Salesforce.'
  },
  {
    id: 'data-18',
    text: 'An organization needs to delete a custom field that has become redundant. However, the system blocks the deletion. What could be the primary cause preventing the administrator from deleting the field?',
    topic: 'Data Modeling',
    options: [
      'The field is currently referenced in an active validation rule, formula field, or Apex class code definition',
      'The field contains more than 10,000 active record values in production',
      'The field is set to visible across more than three user profiles',
      'The field is placed inside a collapsed layout page section banner'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Salesforce protects platform dependencies. If a field is explicitly tied to an active component like a formula, validation rule, flow, or Apex class, it cannot be deleted until those references are removed.'
  },
  {
    id: 'data-19',
    text: 'You have a custom object tracking Client Reviews. The OWD sharing for this object must be Private. Management wants to display the total count of all reviews directly on the Account page layout. How should this data structure be managed?',
    topic: 'Data Modeling',
    options: [
      'Create a Lookup relationship on Client Review to Account, and use a standard formula field on Account to count the logs',
      'Create a Master-Detail relationship field on Client Review pointing to Account as the Master, then build a Roll-Up Summary field on Account tracking the total record count',
      'Build a junction object framework utilizing workflow outbound signals',
      'Change the Account OWD configuration settings to Controlled by Parent'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Roll-Up Summary fields provide an efficient way to display item counts natively. However, they require a Master-Detail relationship. Because Account is the parent, it can host the roll-up field.'
  },
  {
    id: 'data-20',
    text: 'An administrator needs to bulk load 3 million records into a custom log object without triggering validation rules or workflows, while minimizing the total time the load takes. Which mechanism configuration matches this task?',
    topic: 'Data Modeling',
    options: [
      'Import data via Data Import Wizard in blocks of 50,000 records sequentially',
      'Utilize Salesforce Data Loader using the Bulk API protocol with the concurrency mode set to Parallel, after manually deactivating automation rules',
      'Deploy synchronous Apex triggers containing inline insert loops',
      'Convert the custom log object into an external data source structure via Salesforce Connect'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Bulk API is optimized for millions of records. Running in parallel speeds up data loading, and temporarily deactivating downstream automations protects performance limits and reduces processing overhead.'
  },

  {
    id: 'process-1',
    text: 'What is the recommended tool for complex business processes with multiple decision points?',
    topic: 'Process Automation',
    options: [
      'Workflow Rules',
      'Process Builder',
      'Flow Builder',
      'Approval Process'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Flow Builder is the most powerful and flexible tool for complex business processes with multiple decision points and actions.'
  },
  {
    id: 'process-2',
    text: 'Which Flow element is utilized to loop through a collection of records and perform actions on each individual item?',
    topic: 'Process Automation',
    options: [
      'Collection Filter',
      'Loop',
      'Decision',
      'Assignment'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Loop element in Flow Builder allows you to iterate through a collection variable record-by-record to execute actions or populate variables.'
  },
  {
    id: 'process-3',
    text: 'What is the primary function of an Outbound Message action in Salesforce automation?',
    topic: 'Process Automation',
    options: [
      'To send a standard email alert to external stakeholders from the system',
      'To securely transmit a structured XML notification message to a designated external endpoint listener application',
      'To log a call activity record on an active Account timeline slot',
      'To post a dynamic message thread onto a chatter group feed layout'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Outbound Messaging sends an API-compatible XML message payload to a specified endpoint URL, allowing declarative integrations to notify external systems when database events fire.'
  },
  {
    id: 'process-4',
    text: 'Which feature in a Record-Triggered Flow should be configured when you need to schedule an action to fire 48 hours after a record is modified?',
    topic: 'Process Automation',
    options: [
      'Asynchronous Path',
      'Scheduled Path',
      'Fast Field Updates',
      'Pause Element'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scheduled Paths allow developers to execute specific flow steps at a relative time threshold based on a date/time field value on the triggering record.'
  },
  {
    id: 'process-5',
    text: 'What occurs when a Record-Triggered Flow executes an "Actions and Related Records" path versus a "Fast Field Updates" path?',
    topic: 'Process Automation',
    options: [
      'Fast Field Updates runs asynchronously, while Actions and Related Records runs synchronously',
      'Fast Field Updates runs before the record is saved to the database; Actions and Related Records runs after the record is saved to the database',
      'Fast Field Updates can modify unrelated objects, whereas Actions and Related Records can only update the triggering row',
      'Fast Field Updates ignores all validation rule formulas, while Actions and Related Records honors them'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Fast Field Updates (Before-Save) modifies record fields before database write operations. Actions and Related Records (After-Save) executes afterward, which is necessary if you need access to system fields or need to update related records.'
  },
  {
    id: 'process-6',
    text: 'What is the purpose of a "Collection Filter" element in Flow Builder?',
    topic: 'Process Automation',
    options: [
      'To restrict the total fields queried by a Get Records step',
      'To narrow down a collection variable to only the records that meet specified criteria without running another database query',
      'To delete unwanted files from a user layout',
      'To export dashboard statistics into separate CSV formats'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Collection Filters evaluate an existing list of records in memory, pulling out matching records into a subset list without consuming expensive SOQL query limits.'
  },
  {
    id: 'process-7',
    text: 'What tool allows developers to visually debug a Flow by stepping through its execution path and viewing real-time data states?',
    topic: 'Process Automation',
    options: [
      'Apex Test Execution Engine',
      'Flow Debugger',
      'Developer Console Log Framework',
      'Schema Builder Inspector'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The native Flow Debugger lets you enter input variables, run the automation, trace path lines visually, and evaluate variable transformations at each step.'
  },
  {
    id: 'process-8',
    text: 'Which declarative capability allows an administrator to define specific milestones and transition entry criteria for a record traveling through stages?',
    topic: 'Process Automation',
    options: [
      'Approval Process',
      'Path',
      'Assignment Rules',
      'Escalation Rules'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Path allows you to map out step-by-step progress bars on record pages (like Lead status or Opportunity stages), complete with key fields and guidance tips for users.'
  },
  {
    id: 'process-9',
    text: 'What does an Escalation Rule manage inside the Salesforce Service Cloud framework?',
    topic: 'Process Automation',
    options: [
      'It moves Leads to sales pipelines when cold responses are captured',
      'It automatically reassigns open Case records or notifies managers if a Case remains unresolved after a specific time duration',
      'It increments account balance metrics when projects are locked',
      'It forces validation rules to run on historical data loads'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Escalation Rules look for age thresholds on Case records, automatically updating fields or executing notification chains if operational SLA milestones are missed.'
  },
  {
    id: 'process-10',
    text: 'What type of resource variable must be configured in a Flow to hold multiple values of the exact same data type simultaneously?',
    topic: 'Process Automation',
    options: [
      'Formula Resource',
      'Collection Variable',
      'Global Constant',
      'Text Template'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Collection Variables are arrays or sets that store multiple values or object records of a single data type, allowing bulk data handling within a flow.'
  },
  {
    id: 'process-11',
    text: 'Which standard automation tool is required to dynamically lock a record from user modifications during a multi-manager sign-off phase?',
    topic: 'Process Automation',
    options: [
      'Record-Triggered Flow running fast updates',
      'Approval Process',
      'Validation Rules containing regex arrays',
      'Case Assignment Framework'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Approval Processes have a native record-locking mechanism that secures records during reviews, preventing users from making edits until the evaluation is complete.'
  },
  {
    id: 'process-12',
    text: 'What behavior happens to active scheduled actions in a Flow\'s queue if the master record is deleted before the timeline execution date arrives?',
    topic: 'Process Automation',
    options: [
      'The action executes anyway and recreates a blank parent row frame',
      'The scheduled actions are automatically removed from the interview queue',
      'The transaction halts and throws an administrative exception alert',
      'The system moves the action to a default system error dashboard'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce tracks active wait steps via the Time-Based Workflow queue or Flow Interviews. Deleting the parent record cleans up the workspace by clearing its pending actions.'
  },
  {
    id: 'process-13',
    text: 'A business requires that when a support representative closes a Case with a status of "Defect," a follow-up task must be assigned to the product team. If the case is reopened later, that task must be marked canceled. How should this scenario be built?',
    topic: 'Process Automation',
    options: [
      'Build separate workflow rules utilizing outbound XML scripts',
      'Create a Record-Triggered Flow on the Case object that uses Decision elements to check status and creates or updates the related Task records accordingly',
      'Configure a custom formula validation constraint across objects',
      'Deploy an Escalation Rule containing multiple execution steps'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Record-Triggered Flows easily handle branches and cross-object actions. They can check database field states, create new tasks, or find and update existing records depending on the paths taken.'
  },
  {
    id: 'process-14',
    text: 'An administrator needs to create an automation that deletes all temporary internal logs related to an Account record whenever that Account is marked "Inactive." Which automation tool handles record deletion declartively?',
    topic: 'Process Automation',
    options: [
      'Approval Processes utilizing final actions',
      'Flow Builder (Record-Triggered Flow)',
      'Validation Rules checking record states',
      'Case Assignment Logic'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Flow Builder can declaratively delete records from the database using the Delete Records element. Legacy tools like Workflow Rules and Process Builder cannot execute deletions.'
  },
  {
    id: 'process-15',
    text: 'Universal Containers wants to route global discount agreements. If an adjustment is under 15%, the system routes to a regional manager. If it is 15% or greater, it also requires approval from a VP. How should this process be designed?',
    topic: 'Process Automation',
    options: [
      'Create two completely separate Approval Processes and tie them to cross-object formulas',
      'Configure a single Approval Process with multiple conditional Approval Steps that check the discount percentage thresholds',
      'Deploy an Apex Trigger utilizing recursive transaction maps',
      'Build a Screen Flow containing multiple hardcoded approval layouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A single Approval Process can support multiple steps arranged sequentially. Each step can have its own entry criteria, allowing low-level approvals to pass quickly while escalating higher discounts.'
  },
  {
    id: 'process-16',
    text: 'A financial institution needs a process to guide call center operators through a series of mandatory validation scripts while collecting data. The screen fields must change based on the customer\'s answers. What automation type is required?',
    topic: 'Process Automation',
    options: [
      'Autolaunched Flow running asynchronously',
      'Screen Flow containing conditional field visibility components',
      'Before-Save Record-Triggered Flow',
      'Validation Rules checking profile settings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Screen Flows capture inputs through a guided interface. You can configure individual screen components to hide or show dynamically depending on answers provided on earlier screens.'
  },
  {
    id: 'process-17',
    text: 'A developer observes that a flow is throwing a "Mixed DML Operation" exception. The logs point to a step that creates a custom Account record and then modifies a User record in the same transaction. How can the administrator fix this structural defect?',
    topic: 'Process Automation',
    options: [
      'Turn off validation rules on both objects before running the process',
      'Separate the operations by modifying the User record within an Asynchronous Path or moving it into a distinct transaction',
      'Convert the Account object data model into a Master-Detail child layout',
      'Change the execution user profile to standard System Administrator access'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Mixed DML exception occurs when you try to modify a setup object (like User or Group) and a non-setup object (like Account) in the same transaction. Using an Asynchronous Path breaks the transaction block.'
  },
  {
    id: 'process-18',
    text: 'A business wants to automatically calculate an invoice line item total field when a record is modified. The line item total field is used in validation rules on the same object. Which flow type optimizes this execution order?',
    topic: 'Process Automation',
    options: [
      'An After-Save Record-Triggered Flow utilizing update actions',
      'A Fast Field Updates (Before-Save) Record-Triggered Flow setting the field value inline via assignment',
      'An Autolaunched Flow triggered from an external system interface',
      'An Approval Process final actions update assignment'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Before-Save Flows run before validation rules. If you calculate and assign the value during a Fast Field Update, the validation rules will evaluate the correct, updated data when they run.'
  },
  {
    id: 'process-19',
    text: 'An administrator needs to bulk update the "Region" field on 15,000 live Opportunity records based on the Owner\'s profile location. When testing this in Flow Builder via a loop element that updates the database inside the loop, the flow crashes. How should the flow loop be optimized?',
    topic: 'Process Automation',
    options: [
      'Increase the maximum execution timeout limits inside the sandbox',
      'Use an Assignment element inside the loop to accumulate data changes into a Collection Variable, then place a single Update Records element completely outside the loop path',
      'Split the 15,000 data rows into independent text groups before loading',
      'Replace the custom assignment variables with global formulas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Placing DML operations (Get, Create, Update, Delete elements) inside a loop creates governor limit exceptions. The correct pattern assigns changes to a collection variable within the loop, then pushes one update block outside the loop.'
  },
  {
    id: 'process-20',
    text: 'Your customer wants a notification banner displayed on screen to remind reps to offer a discount if an Account has been open for 10 years. The criteria is complex. What automation engine calculates and renders this message dynamically?',
    topic: 'Process Automation',
    options: [
      'Escalation Rule engine checking age filters',
      'Einstein Recommendation Builder or In-App Guidance paired with Flow',
      'Workflow rules triggering outbound messages',
      'Case Assignment configuration entries'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In-App Guidance and custom lightning component logic can evaluate record characteristics to present dynamic banners, notifications, or screen walkthroughs right inside the user interface.'
  },

  {
    id: 'security-1',
    text: 'What is the most restrictive access level that can be set in Organization-Wide Defaults?',
    topic: 'Security and Access',
    options: [
      'Public Read Only',
      'Public Read/Write',
      'Private',
      'No Access'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Private is the most restrictive OWD setting, allowing access only to record owners and users above them in the role hierarchy.'
  },
  {
    id: 'security-2',
    text: 'What does Permission Set Groups allow an administrator to accomplish?',
    topic: 'Security and Access',
    options: [
      'Group multiple users together into a single structural role hierarchy level',
      'Combine multiple individual permission sets into a single reusable group profile for easier user assignment',
      'Create custom sharing rule conditions based on public group names',
      'Bypass multifactor authentication validation for specific user sets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Permission Set Groups bundle multiple permission sets together. This allows administrators to assign functional, persona-based bundles to users instead of managing separate standalone permission sets.'
  },
  {
    id: 'security-3',
    text: 'Which Salesforce security feature can be configured to completely block a user from logging into the platform if they are outside of the corporate office network?',
    topic: 'Security and Access',
    options: [
      'Two-Factor Authentication settings',
      'Profile-based Login IP Ranges',
      'Organization-Wide Trusted IP Ranges',
      'Session Security Levels'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Login IP Ranges defined at the Profile level strictly enforce boundaries. If a user attempts to log in from an unlisted IP address, the platform denies access completely, regardless of activation codes.'
  },
  {
    id: 'security-4',
    text: 'If a user has "Read" permission for an object at the Profile layer, but a Sharing Rule grants them "Read/Write" access to a specific record, what is their effective access level for that record?',
    topic: 'Security and Access',
    options: [
      'Read/Write access',
      'Read-Only access',
      'No Access because of an access conflict exception',
      'Full "Modify All" access'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Object permissions on the Profile or Permission Set act as a hard baseline ceiling. Sharing rules can only extend record-level visibility, not override a lack of object-level editing rights.'
  },
  {
    id: 'security-5',
    text: 'What is the function of the "View All Data" administrative permission when assigned to a user profile?',
    topic: 'Security and Access',
    options: [
      'It allows the user to see all configuration setup menus inside the organization',
      'It grants the user read access to all records across all objects in the org, completely bypassing sharing settings and OWD restrictions',
      'It converts all objects into Public Read Only format globally',
      'It automatically exposes all confidential fields tracked under field history logs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "View All Data" (VAD) and "Modify All Data" (MAD) global permissions act as super-user overrides, granting universal record access regardless of OWD, sharing rules, or role hierarchies.'
  },
  {
    id: 'security-6',
    text: 'What occurs if an organization deactivates a user who currently owns active records across the platform?',
    topic: 'Security and Access',
    options: [
      'The records are automatically transferred to the system administrator user account',
      'The records are kept in the database with the inactive user remaining as the record owner, though access can be adjusted downstream',
      'The records are hidden and moved into the system recycle bin framework',
      'The system blocks the user deactivation until all record ownership properties are cleared'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Deactivating users does not alter record data or ownership properties. The inactive user remains the owner, preserving historical accuracy while preventing them from logging back in.'
  },
  {
    id: 'security-7',
    text: 'Which sharing mechanism can an end-user utilize to manually extend read access of a single record they own to an individual peer colleague?',
    topic: 'Security and Access',
    options: [
      'Criteria-Based Sharing Rule',
      'Manual Sharing via the "Share" action button on the record page',
      'Apex Managed Sharing maps',
      'Role Hierarchy adjustment configurations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Manual sharing allows record owners or administrators to selectively share a single record with specific users, roles, or public groups using the native Share action button.'
  },
  {
    id: 'security-8',
    text: 'What does the "High Assurance" session security level manage when configured under Session Settings?',
    topic: 'Security and Access',
    options: [
      'It increases data encryption processing speeds across cloud instances',
      'It forces a multi-factor authentication (MFA) verification challenge when accessing specific high-risk tools like Connected Apps or Reports',
      'It disables external API access during high-volume server traffic intervals',
      'It restricts record exports to a maximum threshold of 100 rows'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'High Assurance levels define actions that require an extra layer of validation. For example, you can block or require MFA challenges when users try to view specific objects, manage data, or access connected applications.'
  },
  {
    id: 'security-9',
    text: 'What field validation mechanism can be enabled to mask sensitive plain text fields like social security numbers from unprivileged users while maintaining system tracking properties?',
    topic: 'Security and Access',
    options: [
      'Long Text Area field mapping configurations',
      'Encrypted Custom Fields (Deterministic or Probabilistic frameworks via Shield Platform Encryption)',
      'Formula fields tracking text strings',
      'Case Assignment routing rule matrices'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Shield Platform Encryption allows you to natively encrypt and mask sensitive data at rest, ensuring that unauthorized views see only masked strings while authorized users access raw inputs.'
  },
  {
    id: 'security-10',
    text: 'When defining a dynamic Sharing Rule, what are the two core types of rule evaluations available?',
    topic: 'Security and Access',
    options: [
      'Profile-Based and Role-Based',
      'Owner-Based and Criteria-Based',
      'Field-Based and Formula-Based',
      'Manual-Based and Trigger-Based'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Sharing Rules are either Owner-Based (sharing records owned by a specific role or group) or Criteria-Based (sharing records that match a specific field condition, regardless of who owns them).'
  },
  {
    id: 'security-11',
    text: 'What is the purpose of configuring "Login Hours" restrictions within a user Profile setup?',
    topic: 'Security and Access',
    options: [
      'To track the total payroll working hours log entries for contract employees',
      'To define strict time ranges outside of which users assigned to that profile are completely locked out from logging in',
      'To calculate average system performance tracking analytics hourly',
      'To automatically sign out inactive users from active chat rooms'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Login Hours set hard scheduling parameters on profiles. If a user tries to access the system outside these hours, their request is denied. If they are logged in when the window closes, their session is terminated.'
  },
  {
    id: 'security-12',
    text: 'What security risk does utilizing the "without sharing" keyword inside an Apex class introduce if not handled carefully?',
    topic: 'Security and Access',
    options: [
      'It slows down processing performance times by duplicating tracking matrices',
      'It executes the database transactions in system mode, completely ignoring the current user\'s record-level sharing rules and OWD restrictions',
      'It permanently disables field history tracking logs across custom objects',
      'It blocks standard Lightning Web Components from invoking controller methods'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "without sharing" keyword tells the Apex runtime to ignore record-level sharing rules, executing logic in a privileged system mode. This must be managed carefully to avoid accidental data exposure.'
  },
  {
    id: 'security-13',
    text: 'An administrator sets up a custom object tracking Performance Reviews with an OWD of Private. A manager needs to view their direct reports\' reviews, but the system denies access. What is the most likely reason for this access block?',
    topic: 'Security and Access',
    options: [
      'The object does not contain a master-detail relationship field pointing to accounts',
      'The "Grant Access Using Hierarchies" option was unchecked in the Organization-Wide Defaults settings for that specific custom object',
      'The manager does not have a Permission Set Group handling text formula fields',
      'The records are locked under an active assignment rule queue'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Standard objects mandate role hierarchy access. Custom objects let you turn this off by unchecking "Grant Access Using Hierarchies" under OWD settings. Unchecking it blocks vertical inheritance lines.'
  },
  {
    id: 'security-14',
    text: 'A business requires that the custom field "Commission Rate" on an Opportunity record should only be visible and editable by members of the Finance team, while standard sales users can see it but not edit it. How should this be implemented?',
    topic: 'Security and Access',
    options: [
      'Create two separate opportunity page layouts and change field positions',
      'Configure Field-Level Security (FLS) to grant "Visible" and "Read-Only" to the Sales Profile, while granting full "Visible" and editing rights to the Finance Profile',
      'Build a validation rule that locks the text fields if a user attempts modifications',
      'Set the Organization-Wide Defaults for the entire Opportunity structure to Private'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Field-Level Security (FLS) is the correct layer for field access. Restricting edit rights at the FLS layer secures the field globally—across page layouts, reports, list views, and APIs.'
  },
  {
    id: 'security-15',
    text: 'Your company has an OWD of Private for the Account object. A new collaborative team requires cross-department access to view specific accounts matching a project identifier code. Team members are spread across various roles. How should access be granted?',
    topic: 'Security and Access',
    options: [
      'Set the Account OWD globally to Public Read/Write',
      'Add the target users into a custom Public Group, then create a Criteria-Based Sharing Rule matching the project identifier to grant Read access to that Public Group',
      'Build an Apex trigger that modifies the users profile access flags synchronously',
      'Create a complex validation rule that clears out string structures'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When users span different branches of a role hierarchy, grouping them into a Public Group and applying a Criteria-Based Sharing Rule is the cleanest declarative way to grant shared record access.'
  },
  {
    id: 'security-16',
    text: 'A sales rep leaves the company unexpectedly. The administrator needs to immediately revoke their system access, but the user is currently tied to multiple active asynchronous background jobs and routing queues, preventing immediate deactivation. What should the administrator do?',
    topic: 'Security and Access',
    options: [
      'Delete the user account from the system immediately',
      'Click the "Freeze" button on the user record to block system access instantly, then resolve the administrative dependencies afterward',
      'Change the user password to a random string and wait for the jobs to finish',
      'Assign the user to a blank role hierarchy level'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "Freeze" action stops a user from logging in or using resources instantly. This is helpful when administrative dependencies prevent immediate deactivation, giving you time to clean up assignments.'
  },
  {
    id: 'security-17',
    text: 'An auditor needs to verify why a specific user was able to view a confidential record when the OWD sharing configuration is set to Private. What native administrative tool should the administrator use to troubleshoot this specific record access trace?',
    topic: 'Security and Access',
    options: [
      'Run a full system code coverage test report',
      'Click the "Sharing Hierarchy" action button on the specific record page to view exactly which rules granted access to the user',
      'Inspect the organization\'s Trusted IP Ranges matrix lists',
      'Check the user profile\'s Login History tracking logs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "Sharing Hierarchy" tool provides a breakdown of record permissions. It shows who has access to a specific record and points to the mechanism (OWD, Role Hierarchy, Sharing Rules, or Manual Shares) that opened access.'
  },
  {
    id: 'security-18',
    text: 'A company wants to introduce a security policy where all internal staff must complete a Time-Based One-Time Password verification step when logging in from home networks. Which declarative tool establishes this operational rule?',
    topic: 'Security and Access',
    options: [
      'Validation Rules targeting network paths',
      'Identity Verification patterns combined with Session Security Level policies and Profile Multi-Factor Authentication requirements',
      'Data Loader upsert parameter checklists',
      'Case Assignment rule criteria entries'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Enforcing multi-factor authentication (MFA) or specifying high-assurance session rules at login provides a declarative way to secure user entry points based on location or profile requirements.'
  },
  {
    id: 'security-19',
    text: 'A customer support team lead needs to delete Case records when duplicates are identified. Currently, they can only view and edit cases. How should the administrator grant the delete permission to this single user without modifying the support team profile?',
    topic: 'Security and Access',
    options: [
      'Create a new custom profile specifically for that team lead',
      'Create a Permission Set that grants the "Delete" permission on the Case object, and assign this Permission Set directly to the team lead',
      'Build an Apex Trigger that executes a hard delete bypass routine',
      'Change the Case object OWD configuration to Controlled by Parent'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Permission sets let you grant additional access levels to individual users on top of their baseline profile. This avoids profile proliferation and keeps user management modular.'
  },
  {
    id: 'security-20',
    text: 'A developer creates a Lightning Web Component controller that queries specific accounting metrics. To ensure that the query strictly respects the running user\'s Object and Field-Level Security permissions, what clause should be added to the SOQL statement?',
    topic: 'Security and Access',
    options: [
      'FOR UPDATE',
      'WITH USER_MODE',
      'WITH SECURITY_ENFORCED',
      'USING PROFILE_MODE'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The WITH USER_MODE clause enforces Object-level permissions (CRUD), Field-Level Security (FLS), and record sharing constraints directly within the database engine execution layer.'
  },

  {
    id: 'ui-1',
    text: 'What is the maximum number of components that can be added to a Lightning App Builder page?',
    topic: 'User Interface',
    options: [
      '50',
      '100',
      '200',
      'No specific limit'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'While there is no hard limit on components per page, performance considerations should guide the number of components used.'
  },
  {
    id: 'ui-2',
    text: 'Which feature allows an administrator to show or hide a component on a Lightning Record Page based on a field value or the user\'s profile?',
    topic: 'User Interface',
    options: [
      'Validation Rules',
      'Dynamic Component Visibility',
      'Field-Level Security',
      'Page Layout Assignment'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Component Visibility rules can be added to standard or custom components in Lightning App Builder to conditionally display them based on record values, user fields, or permissions.'
  },
  {
    id: 'ui-3',
    text: 'What is the primary benefit of upgrading a standard page layout to Dynamic Forms in Salesforce?',
    topic: 'User Interface',
    options: [
      'It allows fields to automatically save every time a user types a character',
      'It migrates fields and sections into individual components inside the Lightning App Builder, enabling section-level visibility rules',
      'It converts standard object data tables into custom chart visualizations',
      'It forces fields to bypass validation formulas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Forms breaks standard record details into flexible fields and sections components, allowing admins to arrange and dynamically hide/show them straight from the Lightning App Builder canvas.'
  },
  {
    id: 'ui-4',
    text: 'What UI configuration allows an administrator to define which fields appear when a user hovers over a record lookup link?',
    topic: 'User Interface',
    options: [
      'Search Layouts',
      'Compact Layouts',
      'Mini Page Layouts',
      'ListView Properties'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Compact Layouts control the primary highlights panel fields on a record page and dictate the key fields shown in hover previews when rolling over lookup links.'
  },
  {
    id: 'ui-5',
    text: 'Which Lightning App Builder page type should be created to provide a standalone dashboard interface for users that is independent of any single object record?',
    topic: 'User Interface',
    options: [
      'Record Page',
      'Home Page',
      'App Page',
      'Embedded Page'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'An App Page is a custom landing layout independent of record shapes, ideal for building operational home bases, custom tracking frameworks, or centralized hubs.'
  },
  {
    id: 'ui-6',
    text: 'What custom field capability allows an administrator to dynamically show rich text content, dynamic colors, or image banners on a record page using HTML expressions?',
    topic: 'User Interface',
    options: [
      'Text Area (Rich) Field',
      'Formula Field using the IMAGE or HTML markup functions',
      'URL Field with parameter tracking strings',
      'Long Text Area Field'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Formula fields can leverage the IMAGE function or inline style references to evaluate conditions and render status icons, custom meters, or banners directly on the viewport.'
  },
  {
    id: 'ui-7',
    text: 'What does a "Search Layout" configuration control inside a Salesforce application?',
    topic: 'User Interface',
    options: [
      'The fields displayed as columns in global search results, lookup dialog boxes, and list view filters',
      'The maximum string length allowed when typing search characters',
      'The custom indexes utilized by background search algorithms',
      'The design patterns shown during mobile login challenges'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Search Layouts let you choose which fields users see when searching for records globally or pulling up matching records inside lookup search dialogs.'
  },
  {
    id: 'ui-8',
    text: 'Which standard utility bar component can be added to an app configuration to allow users to consistently view and run workflows from a minimized sticky panel at the bottom of the screen?',
    topic: 'User Interface',
    options: [
      'Recent Items Component',
      'Flow Component',
      'List View Component',
      'Rich Text Component'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Adding a Flow component to the Utility Bar makes automated wizards or questionnaires easily accessible across the entire application interface, floating independently of main workspace modifications.'
  },
  {
    id: 'ui-9',
    text: 'What configuration should be modified to completely add, remove, or reorder the tabs displayed along the top main navigation bar of a custom Lightning Application?',
    topic: 'User Interface',
    options: [
      'Profile Object Permissions',
      'App Manager settings for that specific Lightning App',
      'User Personal Profile Preferences',
      'Organization Setup OWD Matrix'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'App Manager is the administrative command center to customize look, branding, utility setups, navigation options, and profile assignments for individual Lightning Apps.'
  },
  {
    id: 'ui-10',
    text: 'What layout template options are available when initializing a brand new Lightning Record Page within the App Builder canvas?',
    topic: 'User Interface',
    options: [
      'Only Full Screen canvas modes',
      'Various region split layouts such as Header and Right Sidebar, 3 Columns, or 1 Header with Main Region and Collapsible Panel',
      'Only a strict single-column scrolling orientation',
      'Custom HTML frames uploaded from static resources'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lightning App Builder provides out-of-the-box structural frameworks (templates) that arrange components into columns, responsive splits, or stacked regions.'
  },
  {
    id: 'ui-11',
    text: 'What type of list view option can an administrator build to let individual users edit multiple fields across multiple rows simultaneously from a single summary screen?',
    topic: 'User Interface',
    options: [
      'Joined List views',
      'Standard List View with Inline Editing enabled',
      'Matrix List reports',
      'Data Loader extraction panels'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When inline editing is enabled in user setups and shared filters match a single Record Type, users can click and edit fields directly inside cells without clicking into individual records.'
  },
  {
    id: 'ui-12',
    text: 'What is the purpose of the "In-App Guidance" tool inside Salesforce user interface management?',
    topic: 'User Interface',
    options: [
      'To validate custom code formulas during package migrations',
      'To build custom walkthroughs, floating prompts, or instructional alerts that onboard users directly on specific page elements',
      'To stream third-party external chat applications into utility frames',
      'To track the total user clicks recorded on standard buttons globally'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'In-App Guidance gives administrators a declarative way to place prompts, pointers, and user tours throughout the UI to drive feature adoption and train users in context.'
  },
  {
    id: 'ui-13',
    text: 'A business requires that when an Opportunity is in the "Closed Won" stage, its fields must appear in a specific highlighted workspace component at the very top of the page. How can an administrator execute this requirement seamlessly?',
    topic: 'User Interface',
    options: [
      'Create separate page layouts and reassign them via workflow tasks',
      'Add the fields into a Compact Layout and configure a Highlights Panel component with a Dynamic Component Visibility rule based on the Stage field',
      'Deploy an Apex trigger to manually shift screen positions on save',
      'Convert the Opportunity details structure into a Master-Detail child framework'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Combining Compact Layouts (which fuel the Highlights Panel component) with Dynamic Component Visibility based on criteria (Stage = Closed Won) lets you dynamically control what appears at the top of the viewport.'
  },
  {
    id: 'ui-14',
    text: 'Your users state that the global search utility is returning too many unrelated records and cluttering summaries. They want a specific custom object, "Warranty Log," to be highly searchable with distinct filtering columns. How should this be structured?',
    topic: 'User Interface',
    options: [
      'Write a validation rule checking global search string formats',
      'Navigate to the Search Layout configuration for the Warranty Log object and tailor the results filters and columns visible fields',
      'Convert the Warranty Log object data visibility setting to Private OWD',
      'Re-instantiate the LWC cache settings using public @api variables'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Search Layouts for custom objects dictate exactly which fields appear as searchable reference columns, enabling cleaner indexing and parsing during global search queries.'
  },
  {
    id: 'ui-15',
    text: 'An administrator needs to deploy an onboarding checklist on the Employee object. The component should only be visible to HR managers, while normal employees viewing their own profiles should not see it. How should this be handled?',
    topic: 'User Interface',
    options: [
      'Hide the component using field-level security constraints',
      'Set a Component Visibility filter in Lightning App Builder matching the User Profile Name or a custom permission to "Human Resources Manager"',
      'Build separate custom objects to split employee types completely',
      'Inject an external javascript script into the profile layout settings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Lightning App Builder visibility filters can reference User properties like profile names, roles, or custom permissions, allowing you to hide specific components from select audiences on shared pages.'
  },
  {
    id: 'ui-16',
    text: 'Sales reps need a quick way to log new follow-up meetings from an Account page without navigating away or scrolling down to the activity timeline. What interface element should the administrator construct?',
    topic: 'User Interface',
    options: [
      'A custom validation rule pointing to date inputs',
      'A Quick Action of type "Create a Record" or "Log a Call" added to the Salesforce Mobile and Lightning Experience Actions panel',
      'An external outbound message script',
      'A roll-up summary field counting active meetings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Quick Actions expose micro-tasks (like creating a record or updating fields) as accessible header buttons, rendering pop-up forms that accelerate data entry.'
  },
  {
    id: 'ui-17',
    text: 'A customer-facing dashboard requires a highly customized map overlay that pins location data and runs specialized client-side route tracking animations. What UI tool must be deployed to satisfy this requirement?',
    topic: 'User Interface',
    options: [
      'Dynamic Forms tab formatting',
      'A Custom Lightning Web Component (LWC) added to the canvas via Lightning App Builder',
      'Standard formula fields utilizing basic character charts',
      'A compact highlight panel mapping lookup files'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When out-of-the-box layouts fall short, developers can write a Lightning Web Component to run specialized client-side scripts, animations, or mapping libraries, then expose it to the App Builder.'
  },
  {
    id: 'ui-18',
    text: 'Reps state that when managing Opportunities on their mobile app devices, the screen requires extensive vertical scrolling to find key fields like Amount and Close Date. How can the mobile experience be streamlined natively?',
    topic: 'User Interface',
    options: [
      'Disable the desktop lightning app configuration menus completely',
      'Optimize the object\'s Compact Layout to position up to ten critical fields at the top of the mobile record header interface',
      'Configure an apex trigger loop to split field inputs onto separate record types',
      'Set the OWD sharing configuration to Controlled by Parent'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The mobile app prioritizes Compact Layouts to render record card headers. Configuring these fields keeps vital metrics front and center on smaller viewports.'
  },
  {
    id: 'ui-19',
    text: 'A business wants an automated path tracker displayed on active Project records. When a project moves to the "Review" stage, a custom text block must appear containing guidance notes detailing compliance checklists. How should this be configured?',
    topic: 'User Interface',
    options: [
      'Build an outbound message step updating a long text field',
      'Configure a Path for the Project object stage field, and populate the "Guidance for Success" text editor section for the Review stage step',
      'Deploy an validation rule to block record changes completely',
      'Wrap text files inside an invocable method annotation class'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Path component natively features a "Guidance for Success" section for each stage step. Admins can populate this with text, rich bullet points, or links to guide users through milestones.'
  },
  {
    id: 'ui-20',
    text: 'You have upgraded a page to Dynamic Forms and arranged fields across multiple tabs. Users complain that a specific field section takes too long to load because it calculates asset history values. How can the administrator mitigate this UX lag?',
    topic: 'User Interface',
    options: [
      'Increase the storage allocations on production instances',
      'Place the heavy field section inside an independent tab component and set the tab\'s loading behavior to lazy load or conditionally render it using visibility constraints',
      'Run a data loader task to wipe historical values weekly',
      'Change the field configuration type from a formula into an external ID auto-number'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Breaking layouts into structural tabs helps performance. Fields inside hidden tabs are not parsed immediately upon page layout load, reducing initial load times and smoothing the user experience.'
  },

  {
    id: 'reports-1',
    text: 'What type of report should be used to compare data from Accounts and Opportunities?',
    topic: 'Reports and Dashboards',
    options: [
      'Tabular Report',
      'Summary Report',
      'Matrix Report',
      'Joined Report'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'Joined Reports allow data from multiple report types (like Accounts and Opportunities) to be displayed in a single report.'
  },
  {
    id: 'reports-2',
    text: 'What is the maximum number of fields or groupings that can be added to a Matrix report in Salesforce?',
    topic: 'Reports and Dashboards',
    options: [
      '2 row groupings and 2 column groupings',
      '3 row groupings and 2 column groupings',
      '4 row groupings and 4 column groupings',
      'Unlimited groupings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Matrix reports allow a maximum of 3 row groupings and 2 column groupings to organize data in a grid format.'
  },
  {
    id: 'reports-3',
    text: 'What does a Custom Report Type primarily define inside Salesforce analytics configuration?',
    topic: 'Reports and Dashboards',
    options: [
      'The look and feel of the chart components on a dashboard page layout',
      'The specific combination of objects and their relational links (e.g., Object A with or without Object B) available for report generation',
      'The schedule intervals for sending email reports to executive leadership teams',
      'The encryption settings applied to fields exported via CSV formatting utilities'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Report Types establish a template schema defining the set of objects, relationships, and fields that users can select when creating a new report.'
  },
  {
    id: 'reports-4',
    text: 'Which dashboard component should be selected when you need to display a single, critical numeric metric like total pipeline revenue directly on a dashboard?',
    topic: 'Reports and Dashboards',
    options: [
      'Bar Chart Component',
      'Metric Component (Number)',
      'Gauge Component',
      'Lightning Table Component'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Metric component displays a single prominent value, making it ideal for highlighting key performance indicators (KPIs) like total sales or closed cases.'
  },
  {
    id: 'reports-5',
    text: 'What is the absolute maximum number of dashboard components that can be added to a single Salesforce dashboard canvas?',
    topic: 'Reports and Dashboards',
    options: [
      '10',
      '20',
      '50',
      'No specific component ceiling'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce imposes a strict platform limit allowing a maximum of 20 dashboard components on a single dashboard page layout.'
  },
  {
    id: 'reports-6',
    text: 'What does the "Dashboard Filter" capability accomplish when configured on a master dashboard page layout?',
    topic: 'Reports and Dashboards',
    options: [
      'It restricts unauthorized profiles from viewing specific metrics component tiles',
      'It allows users to dynamically scope down data across all dashboard components simultaneously using picklist values like Region or Industry',
      'It modifies validation formulas inside underlying custom objects automatically',
      'It exports the component data into segmented sub-folders on a local device'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dashboard filters let users drill down into the visuals by applying a single filter criteria across multiple components on the fly without editing the underlying reports.'
  },
  {
    id: 'reports-7',
    text: 'What happens when an administrator sets up a "Dynamic Dashboard" inside a shared report folder architecture?',
    topic: 'Reports and Dashboards',
    options: [
      'The dashboard charts automatically animate in real-time on a constant streaming cycle',
      'The dashboard displays data to each viewing user based on their own security settings and record-level sharing permissions',
      'The dashboard automatically copies its chart data to all external enterprise integrations',
      'The dashboard allows users to alter data records straight from component views'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Dynamic Dashboards show data based on the running user\'s permissions, ensuring that individual salespeople or managers only see the records they are authorized to view.'
  },
  {
    id: 'reports-8',
    text: 'What custom field calculation utility can be built directly inside an individual report to perform mathematical operations on summary fields across rows?',
    topic: 'Reports and Dashboards',
    options: [
      'Cross-Object Formula Field',
      'Custom Summary Formula Field',
      'Roll-Up Summary Field',
      'Apex Automation Handler Routine'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Summary Formulas let you calculate additional metrics in a report on grouped rows (like calculating margins or percentage of totals) without adding fields to the actual object.'
  },
  {
    id: 'reports-9',
    text: 'Where are Report and Dashboard structural visibility permissions and sharing controls managed inside Salesforce analytics?',
    topic: 'Reports and Dashboards',
    options: [
      'Directly on the individual report or dashboard chart asset definition properties',
      'At the Folder level where the specific reports and dashboards are securely organized and stored',
      'Inside the general Organization-Wide Defaults security configuration matrix',
      'Natively within the master layout assignment manager tabs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Access to reports and dashboards is determined by folder permissions. You share, restrict, or grant access (View, Edit, Manage) to public groups, roles, or users via folders.'
  },
  {
    id: 'reports-10',
    text: 'What is the programmatic function of a "Bucket Field" inside a Salesforce report layout view?',
    topic: 'Reports and Dashboards',
    options: [
      'To hold temporary deleted records before permanent purge routines execute',
      'To categorize multiple discrete record field values into defined conceptual groups on the fly without creating a custom field',
      'To map field integrations between separate enterprise data tables',
      'To compress long text strings to improve parsing speeds'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Bucketing allows you to group related field values together in a report. For example, you can group individual states into custom "East," "West," and "Central" categories without modifying the underlying data model.'
  },
  {
    id: 'reports-11',
    text: 'Which report format is the default structure and provides a simple, flat table view of records similar to a standard spreadsheet canvas?',
    topic: 'Reports and Dashboards',
    options: [
      'Summary Report',
      'Matrix Report',
      'Tabular Report',
      'Joined Report'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Tabular reports are simple list views of data columns and rows without any groupings or mathematical summary intersections.'
  },
  {
    id: 'reports-12',
    text: 'What is the limit for the maximum number of filter conditions that can be added to a single report inside Salesforce Analytics?',
    topic: 'Reports and Dashboards',
    options: [
      '5',
      '10',
      '20',
      '50'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Salesforce limits report configurations to a maximum of 20 field filter conditions to maintain query performance.'
  },
  {
    id: 'reports-13',
    text: 'Universal Containers needs an executive pipeline dashboard. The CEO wants to look at a single chart that shows overall company closed sales against an active static target goal line. Which dashboard component design is required?',
    topic: 'Reports and Dashboards',
    options: [
      'A flat tabular data matrix grid component',
      'A Gauge or Bar Component with defined conditional target value thresholds configured inside the component settings',
      'A multi-series line graph tracking historical data layers',
      'An embedded custom LWC component pulling raw string arrays'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Gauge and Bar charts let you plot an aggregated numeric value along a scale marked with target ranges, making it easy to track performance against a goal.'
  },
  {
    id: 'reports-14',
    text: 'A VP of Sales wants to receive a weekly summary report via email every Monday morning showing their team\'s open cases. How should an administrator configure this automated delivery mechanism?',
    topic: 'Reports and Dashboards',
    options: [
      'Write a scheduled batch Apex script to generate and transmit PDF attachments',
      'Open the target report, click the "Subscribe" button, define the Monday morning scheduling frequency, and select the VP as a recipient',
      'Build a record-triggered flow containing outbound message components',
      'Configure an escalation rule entry to send text file summaries'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The "Subscribe" feature in Salesforce reports handles automated data delivery. Users or admins can schedule regular email distribution to individuals, roles, or public groups.'
  },
  {
    id: 'reports-15',
    text: 'Your management team wants to view a dashboard tracking marketing conversion ratios. However, users complain that chart figures look outdated. They have to click "Refresh" on every individual element. How can this behavior be streamlined?',
    topic: 'Reports and Dashboards',
    options: [
      'Increase local hard drive caching allowances on browser setups',
      'Click the general "Refresh" button located at the top header area of the dashboard page canvas to refresh all components simultaneously',
      'Set the underlying custom object OWD setting to Public Read/Write',
      'Re-architect the reports into a combined matrix layout scheme'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Refreshing a dashboard via the main header "Refresh" button pulls fresh data for all 20 component blocks at once, updating the metrics across the entire page layout.'
  },
  {
    id: 'reports-16',
    text: 'An analyst needs to build a report showing all Accounts that do not have any active Opportunities associated with them. A standard "Accounts with Opportunities" report type hides these records. How should this be handled?',
    topic: 'Reports and Dashboards',
    options: [
      'Deploy an validation rule to block accounts without opportunities from saving',
      'Create a Custom Report Type with an object relationship definition specifying that Account records may or may not have related Opportunity records, then use a cross-filter on the report set to "without Opportunities"',
      'Write an Apex trigger loop to map account names into text array groups',
      'Set the Opportunity OWD sharing defaults configuration to Private'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Cross-filters let you filter a report based on related objects (e.g., Accounts without Opportunities). Using a "with or without" relationship definition ensures parent records aren\'t filtered out.'
  },
  {
    id: 'reports-17',
    text: 'A regional manager requests a dashboard component displaying total sales numbers. The manager must see overall regional metrics, but when individual sales reps look at the exact same dashboard tile, they should only see their own private closed opportunities. How should this dashboard be provisioned?',
    topic: 'Reports and Dashboards',
    options: [
      'Build 50 completely separate duplicate dashboards for each user account profile',
      'Configure the dashboard as a Dynamic Dashboard by setting the option "View Dashboard As" to the "The viewing user"',
      'Create a validation rule checking user title strings before loading layouts',
      'Convert the Opportunity details tracking fields into roll-up summary components'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Setting a dashboard to run as the viewing user makes it dynamic. The data dynamically shifts according to each user\'s access rights, preventing data exposure while keeping dashboards consolidated.'
  },
  {
    id: 'reports-18',
    text: 'A business requires a report summarizing Case records grouped by priority levels. Under each priority grouping, the report must show the calculated average age of the cases. What report format must be utilized?',
    topic: 'Reports and Dashboards',
    options: [
      'Tabular Report',
      'Summary Report with row groupings and a summarized average applied to the Age field column',
      'Joined Report splitting tracking blocks',
      'Matrix Report with nested column mappings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Summary reports let you group records by specific fields (like Priority) and calculate summary metrics (like SUM, AVERAGE, MIN, MAX) on numeric columns within those groups.'
  },
  {
    id: 'reports-19',
    text: 'An administrator is building a report on a high-volume object but receives a timeout error before the data renders. The report has multiple complex text string filters. How should the report query be optimized?',
    topic: 'Reports and Dashboards',
    options: [
      'Increase the storage allocation properties on the production org environment',
      'Narrow down the date filters (e.g., from "All Time" to "Current Fiscal Quarter") and utilize indexed fields like Record ID, Owner, or External ID instead of open text filters',
      'Convert the report structure from a summary layout into a matrix frame layout',
      'Run a data loader task to purge historical entries permanently'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Standard filters over broad time ranges strain query engines. Tightening date ranges and filtering on indexed fields lets the engine process data faster and avoids timeout errors.'
  },
  {
    id: 'reports-20',
    text: 'A financial manager wants a column in an Opportunity report that displays the win-loss conversion ratio as a calculated percentage (Won Opportunities divided by Total Opportunities). This metric must only exist inside this particular report layout. How should this be built?',
    topic: 'Reports and Dashboards',
    options: [
      'Universally add a custom formula field on the global Opportunity object',
      'Add a Custom Summary Formula field directly inside the report builder, set the output to percent, and define the formula expression using summary metrics',
      'Configure a case assignment rule mapping percentage calculations',
      'Deploy an asynchronous batch job to overwrite a text field daily'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Summary Formulas are local to individual reports. They allow you to calculate custom ratios or percentages on grouped values without adding extra fields to your schema.'
  },
  {
    id: 'integration-1',
    text: 'What is the recommended approach for real-time integration between Salesforce and external systems?',
    topic: 'Integration',
    options: [
      'Batch data synchronization',
      'REST API with webhook notifications',
      'Email-to-Case',
      'Data Loader'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'REST API combined with webhooks or platform events enables real-time, bidirectional integration between systems.'
  },
  {
    id: 'integration-2',
    text: 'What Salesforce feature allows you to declaratively connect to external databases and view that data in Salesforce as standard custom object records without copying it into the org?',
    topic: 'Integration',
    options: [
      'Data Import Wizard',
      'Salesforce Connect (External Objects)',
      'Outbound Messaging',
      'Apex REST Callouts'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Connect maps external data tables to External Objects in Salesforce (e.g., suffixed with __x), reading the data in real-time via OData protocols without consuming data storage.'
  },
  {
    id: 'integration-3',
    text: 'Which API is optimized for loading or exporting massive data volumes (greater than 50,000 records) asynchronously by leveraging chunked parallel processing?',
    topic: 'Integration',
    options: [
      'REST API',
      'SOAP API',
      'Bulk API',
      'Streaming API'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'The Bulk API is designed for high-volume transactions, processing datasets with millions of records in parallel batches to respect standard platform governor limits.'
  },
  {
    id: 'integration-4',
    text: 'What type of integration component should be defined to send secure, near-real-time push notifications or event messages from Salesforce to external subscribers using a publish-subscribe model?',
    topic: 'Integration',
    options: [
      'Platform Events',
      'Outbound Messaging XML',
      'Email Alerts',
      'Custom Formula Fields'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Platform Events are built on a pub/sub event bus architecture, allowing developers to broadcast secure, custom payloads that external listener applications can subscribe to asynchronously.'
  },
  {
    id: 'integration-5',
    text: 'Which standard protocol does Salesforce utilize natively to handle single sign-on (SSO) authentication when acting as an Identity Provider (IdP)?',
    topic: 'Integration',
    options: [
      'SAML 2.0',
      'OData 4.0',
      'REST / JSON',
      'SOAP / XML'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Security Assertion Markup Language (SAML 2.0) is the primary open-standard protocol used by Salesforce to securely exchange authentication tokens between identity systems for SSO.'
  },
  {
    id: 'integration-6',
    text: 'What is the purpose of configuring a "Named Credential" in a Salesforce organization?',
    topic: 'Integration',
    options: [
      'To define specific password complexity criteria rules for high-privilege users',
      'To specify the callout endpoint URL and authentication parameters in a single definition, avoiding hardcoded credentials in Apex code',
      'To assign custom system titles to third-party enterprise users',
      'To track the total API login attempts recorded on active endpoints daily'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Named Credentials handle callout management by separating endpoint routing and security protocols (like OAuth tokens) from Apex code, simplifying updates and boosting security.'
  },
  {
    id: 'integration-7',
    text: 'What mechanism can be implemented to securely permit a custom browser-based JavaScript application running on an external domain to make API requests directly to your Salesforce org?',
    topic: 'Integration',
    options: [
      'Cross-Origin Resource Sharing (CORS) Whitelisting',
      'Remote Site Settings',
      'Connected App Configuration Profiles',
      'Validation Rules checking network strings'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'CORS whitelisting allows web browsers to bypass standard same-origin security policies, letting code hosted on approved external domains safely call Salesforce REST endpoints.'
  },
  {
    id: 'integration-8',
    text: 'What tool should an administrator configure to register and manage a third-party application (like a mobile client or an external ERP integration) trying to connect via OAuth 2.0 protocols?',
    topic: 'Integration',
    options: [
      'Remote Site Settings',
      'Connected App',
      'Custom Metadata Types',
      'Permission Set Groups'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Connected Apps use OAuth to integrate external applications with Salesforce APIs. They allow administrators to monitor client signatures, set token expiration limits, and manage profile access.'
  },
  {
    id: 'integration-9',
    text: 'What is a critical functional constraint regarding the deployment of a "Remote Site Setting" in Salesforce integration management?',
    topic: 'Integration',
    options: [
      'It handles all security handshakes and encryption parameters automatically',
      'It authorizes outbound Apex or flow callouts to a specified external web address, but does not manage authentication details',
      'It blocks internal users from accessing external links inside browser tabs',
      'It enforces record-level sharing constraints on integration profiles'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Remote Site Settings act as a basic security perimeter. They authorize the application to route network traffic to an outside domain URL, but do not manage credentials or protocol keys.'
  },
  {
    id: 'integration-10',
    text: 'Which API should a developer leverage to receive immediate push updates when records are updated, using a streaming architecture that relies on Pub/Sub protocols?',
    topic: 'Integration',
    options: [
      'Bulk API 2.0',
      'Pub/Sub API (Change Data Capture)',
      'SOAP API',
      'Metadata API'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Pub/Sub API and Change Data Capture (CDC) broadcast record updates instantly to subscribers over an event bus, reducing the need for continuous polling or custom apex triggers.'
  },
  {
    id: 'integration-11',
    text: 'What occurs when an integration client hits the organization\'s rolling 24-hour total API request governor limit allocation?',
    topic: 'Integration',
    options: [
      'The platform automatically drops transactional data data tables',
      'The system blocks any subsequent inbound API request attempts, throwing an error code until the rolling limit window resets',
      'The system automatically assigns standard admin rights to the integration user account',
      'The platform routes all pending payloads to a temporary queue'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Exceeding API request limits blocks incoming traffic with an explicit error code until the rolling 24-hour usage window falls back beneath the allocation ceiling.'
  },
  {
    id: 'integration-12',
    text: 'Which file format is most commonly used to structure payload data transmitted via Salesforce native REST API integrations?',
    topic: 'Integration',
    options: [
      'XML text lines',
      'JSON object strings',
      'CSV table blocks',
      'YML layout configurations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'While the REST API accepts both XML and JSON, JavaScript Object Notation (JSON) is the industry standard format due to its lightweight footprint and clean parsing properties.'
  },
  {
    id: 'integration-13',
    text: 'A business requires an integration that pushes shipping numbers to an external fulfillment platform whenever an Order is marked "Shipped." The external API requires an explicit JWT token authentication signature. How should the developer organize this safely?',
    topic: 'Integration',
    options: [
      'Write an Apex trigger containing hardcoded credential string variables',
      'Configure an after-save flow that invokes an Apex method targeting a Named Credential defined with JWT Token Exchange configurations',
      'Build a validation rule checking order status text',
      'Set the Order object OWD setting to Public Read/Write'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Combining an After-Save flow (to detect status changes) with an Apex callout to a Named Credential securely routes token handshakes (like JWT) without exposing secret keys in code blocks.'
  },
  {
    id: 'integration-14',
    text: 'An administrator needs to establish a real-time integration where a product catalogue hosted on an internal corporate database is visible inside a Salesforce custom component without consuming any platform data storage space. What solution matches this requirement?',
    topic: 'Integration',
    options: [
      'Run Data Loader routines every 5 minutes in background windows',
      'Configure Salesforce Connect to pull the tables into External Objects using an OData connection link',
      'Build validation rules tracking product SKU character layouts',
      'Deploy an asynchronous batch job routing XML text files'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Connect allows real-time external data access via standard layout blocks, fetching details on demand without duplicating data tables into the org.'
  },
  {
    id: 'integration-15',
    text: 'A developer needs to write a custom REST web service in Apex that external systems can call to create new accounts. How should the developer define the class and method signatures to expose this endpoint?',
    topic: 'Integration',
    options: [
      'Mark the class with @RestResource(urlMapping=\'/v1/Accounts/*\') and annotate the method with @HttpPost',
      'Annotate the method with @InvocableMethod and make it public static void',
      'Implement the Database.Batchable interface on a global class definition',
      'Define the class as without sharing and add a standard page layout reference'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The @RestResource annotation defines a custom REST endpoint URL mapping. Annotating the method with @HttpPost tells the system to execute that block when an HTTP POST request hits the endpoint.'
  },
  {
    id: 'integration-16',
    text: 'Your third-party warehouse management platform needs to regularly pull update details from Salesforce. The external engineering team wants a formal WSDL (Web Services Description Language) file to build their connection wrappers. Which API matches this architectural design?',
    topic: 'Integration',
    options: [
      'REST API',
      'SOAP API',
      'Bulk API',
      'Streaming API'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The SOAP API is built on a formal XML framework and relies on WSDL documents (Enterprise or Partner variants) to define explicit data schemas and programmatic endpoint contracts.'
  },
  {
    id: 'integration-17',
    text: 'An enterprise application publishes thousands of inventory transactions per second into Salesforce via a custom platform event integration. The consumer process is throwing "Concurrent Request" limit exceptions. How can this volume be handled safely?',
    topic: 'Integration',
    options: [
      'Disable validation rules across inventory custom tables completely',
      'Set the Platform Event\'s Publish Behavior option to "Publish After Commit" or leverage the asynchronous event bus batch mechanisms to ingest events cleanly',
      'Convert the Platform Event into a standard lookup relation formula',
      'Change the execution integration user profile to standard System Administrator'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Publish After Commit queues event transmission until the database transaction succeeds. Decoupling high-volume streams through asynchronous handling prevents resource locks and concurrent processing exceptions.'
  },
  {
    id: 'integration-18',
    text: 'A developer is writing a test class for an Apex integration controller that makes a callout to an external weather service. The test fails with a runtime exception. What is the root cause of this failure?',
    topic: 'Integration',
    options: [
      'The test environment cannot connect to the live external API domain because live HTTP callouts are prohibited inside test transactions',
      'The developer did not run Data Loader prior to deploying test classes',
      'The custom object OWD configuration settings are set to Private',
      'The verification formulas contain string character formatting errors'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Salesforce prevents real outbound network requests during test execution to ensure reliability. Developers must simulate responses by creating a mock class that implements the HttpCalloutMock interface.'
  },
  {
    id: 'integration-19',
    text: 'You have built an outbound integration that tracks account billing revisions. The destination system requires an immediate response acknowledgement, but occasionally stays down for maintenance. How can you ensure messages are retried up to 24 hours without throwing fatal exceptions?',
    topic: 'Integration',
    options: [
      'Deploy synchronous triggers containing infinite check loops',
      'Utilize Workflow Outbound Messaging, which features a built-in retry mechanism that automatically resends unacknowledged payloads for up to 24 hours',
      'Configure a validation rule to block account saves if lines are unresponsive',
      'Convert the target fields from text lines into roll-up values'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Declarative Outbound Messaging includes built-in queue tracking. If an endpoint is offline or fails to return a 200 OK response, Salesforce automatically retries delivery periodically for 24 hours before dropping the message.'
  },
  {
    id: 'integration-20',
    text: 'An architecture team wants to minimize security risks by blocking third-party applications from using authorization paths that require storing raw Salesforce username and password strings inside outside configurations. Which OAuth 2.0 flow should they implement?',
    topic: 'Integration',
    options: [
      'Resource Owner Password Credentials Grant Flow',
      'Web Server Flow or JWT Bearer Flow',
      'Inline Validation Rule Parameter Flow',
      'Data Import Wizard Mapping Protocol'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Web Server Flow (Authorization Code) and JWT Bearer Flow use authorization tokens, certificates, or callback handshakes, keeping raw user credentials secure and out of third-party environments.'
  },

  {
    id: 'test-1',
    text: 'What is the minimum test coverage required to deploy Apex code to production?',
    topic: 'Apex Testing',
    options: [
      '50%',
      '65%',
      '75%',
      '100%'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Minimum 75% test coverage is required for each Apex class and trigger to deploy to production.'
  },
  {
    id: 'test-2',
    text: 'What is the function of the @testSetup annotation inside an Apex test class definition?',
    topic: 'Apex Testing',
    options: [
      'It increases governor execution limits by 50% across all individual tests',
      'It defines a method that creates test data once per class execution, rolling back its state before each individual test method runs',
      'It exports testing logs directly to an external enterprise server bucket',
      'It forces the test class to see all live organization records synchronously'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Methods annotated with @testSetup initialize mock records once for the entire class. This data state is automatically restored between tests, reducing redundant data creation and shortening execution runtimes.'
  },
  {
    id: 'test-3',
    text: 'Which statement accurately describes data visibility constraints within standard Salesforce Apex testing execution contexts?',
    topic: 'Apex Testing',
    options: [
      'Test methods can see all production record details by default',
      'Test methods are completely isolated from organization records (SeeAllData=false) by default, requiring mock data initialization',
      'Test methods can only access records owned by the system administrator profile',
      'Test methods require active external API endpoints to generate test sets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'By default, Apex test classes operate in isolation with SeeAllData set to false. This prevents tests from relying on or modifying live production data, ensuring consistent test results across different environments.'
  },
  {
    id: 'test-4',
    text: 'What is the primary programmatic purpose of utilizing the System.assert() or Assert.areEqual() methods within an Apex unit test class?',
    topic: 'Apex Testing',
    options: [
      'To increase the absolute lines of code coverage calculations for deployment packages',
      'To verify that the code logic produces the expected business outcomes and behavior under specific data states',
      'To bypass validation rule formula constraints during data inserts',
      'To automatically fix structural syntax compiler anomalies inside handlers'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Code coverage simply verifies that a line was executed. Assertion methods like Assert.areEqual() perform the actual testing work by comparing the runtime results against your expected results to confirm accurate behavior.'
  },
  {
    id: 'test-5',
    text: 'Which interface implementation is required to simulate successful web service interaction data without making live outbound callouts inside a test method transaction?',
    topic: 'Apex Testing',
    options: [
      'Database.Batchable',
      'HttpCalloutMock',
      'Schedulable',
      'WebServiceMock'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Because real HTTP callouts are blocked during test execution, developers must build a separate test class that implements the HttpCalloutMock interface to provide a simulated, structured HTTP response payload.'
  },
  {
    id: 'test-6',
    text: 'What occurs to any mock records inserted or modified inside an Apex test method when the execution block reaches its final closing bracket?',
    topic: 'Apex Testing',
    options: [
      'The records are permanently saved to production database storage tables',
      'The test transaction is automatically rolled back, leaving zero data footprint changes inside the database',
      'The records are moved to a global temporary system archive folder',
      'The system transfers record ownership to a default administrative group'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce manages testing transactions within an isolated framework. Any DML operations executed during tests are automatically rolled back when the test run ends, keeping your data clean.'
  },
  {
    id: 'test-7',
    text: 'Which execution method sequence provides a completely separate, fresh set of platform governor limits to validate asynchronous operations inside a test block?',
    topic: 'Apex Testing',
    options: [
      'Database.setSavepoint() and Database.rollback()',
      'Test.startTest() and Test.stopTest()',
      'System.runAs() and UserInfo.getUserId()',
      'try{} and catch{}'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Test.startTest() marks the beginning of the actual code validation path and provides a separate set of governor limits. Calling Test.stopTest() then forces any queued asynchronous tasks to finish running synchronously.'
  },
  {
    id: 'test-8',
    text: 'What does the standard testing method System.runAs() enable a developer to accomplish when designing security assertions?',
    topic: 'Apex Testing',
    options: [
      'It grants the execution thread global modify all data administrative powers',
      'It executes the nested code block within the operational security footprint and sharing permissions of a specific user record',
      'It speeds up testing execution times by skipping database update validations',
      'It maps field values between standard and custom layout fields dynamically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'System.runAs() executes code as a specified user, making it the ideal tool to test and verify record sharing rules, OWD parameters, and field visibility behavior across different user profiles.'
  },
  {
    id: 'test-9',
    text: 'What is the limit for the maximum number of times Test.startTest() can be called within a single individual Apex test method block?',
    topic: 'Apex Testing',
    options: [
      '1',
      '2',
      '5',
      'Unlimited times per execution block'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Test.startTest() can only be called once within any single test method. Calling it multiple times throws a fatal runtime error.'
  },
  {
    id: 'test-10',
    text: 'Which annotation allows public or private variables and methods within an Apex class to remain hidden from normal code blocks but accessible to test classes?',
    topic: 'Apex Testing',
    options: [
      '@AuraEnabled',
      '@TestVisible',
      '@InvocableMethod',
      '@ReadOnly'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The @TestVisible annotation allows a test class to inspect private or protected class members, helper methods, or variables without exposing them to other non-test application components.'
  },
  {
    id: 'test-11',
    text: 'Which system class property can be referenced in regular code to dynamically check if the execution path is running inside a unit test context?',
    topic: 'Apex Testing',
    options: [
      'UserInfo.isTest()',
      'Test.isRunningTest()',
      'System.checkContext()',
      'Apex.getTestState()'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Test.isRunningTest() returns a boolean value indicating whether the current transaction path is running under a test execution frame, useful for conditional routing or mocking complex integrations.'
  },
  {
    id: 'test-12',
    text: 'When preparing to deploy code packages to production, what is a strict requirement regarding the execution outcomes of all test classes?',
    topic: 'Apex Testing',
    options: [
      'At least 75% of the test classes must execute successfully without failures',
      'Every single unit test across the entire organization must execute with a 100% success rate; any single error cancels deployment',
      'Test failures are acceptable as long as total lines of coverage hit 90%',
      'Only tests modified within the past 30 days are required to pass'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Hitting code coverage targets is only half the battle. Every single unit test in the deployment scope must pass successfully. A single test failure will cancel the deployment.'
  },
  {
    id: 'test-13',
    text: 'A developer writes a custom account mapping trigger, but deployment fails because of a "System.DmlException: FIELD_CUSTOM_VALIDATION_EXCEPTION" during a global test suite run. How should the developer fix this testing error?',
    topic: 'Apex Testing',
    options: [
      'Deactivate the organization\'s custom validation rules permanently across production',
      'Modify the mock data generation logic within the test setup to populate fields with values that comply with the active validation rules',
      'Hardcode active production record identifiers into the SOQL query strings',
      'Convert the test class declaration from "with sharing" into "without sharing"'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Test data runs through the same validation rules and triggers as production data. If a test fails due to validation errors, update your mock data generator to provide valid inputs.'
  },
  {
    id: 'test-14',
    text: 'A business requires that when a user flags a custom asset record as "Critical," an email notification is routed to their manager. The developer builds an automated handler. How should they verify the handler logic securely inside a test?',
    topic: 'Apex Testing',
    options: [
      'Configure the test to check the active company inbox to inspect incoming email headers',
      'Use Test.startTest() and Test.stopTest() around the update action, then query the corporate messaging tables or assert against system limits via Limits.getEmailInvocations()',
      'Hardcode manager login coordinates directly inside validation formulas',
      'Verify the logic by checking the user profile configuration screens'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Since tests cannot send real outbound emails, you use Test.stopTest() to complete the transaction, then verify execution by checking Limits.getEmailInvocations() or querying related activity logs.'
  },
  {
    id: 'test-15',
    text: 'You have a custom Batch Apex class designed to process thousands of financial rows asynchronously. When writing the companion test class, the execution fails due to governor limits. How should the test logic be optimized?',
    topic: 'Apex Testing',
    options: [
      'Increase the maximum synchronous SOQL query limits inside system setups',
      'Insert a small sample set of test records (e.g., 10-20), execute Database.executeBatch() between Test.startTest() and Test.stopTest(), and assert results immediately after stopTest()',
      'Split the unit test file into distinct separate lines for each field component',
      'Set the sObject organization-wide sharing defaults configuration to Public Read/Write'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Testing high-volume batch jobs requires checking only a single batch chunk (e.g., fewer than 200 records). Test.stopTest() forces that asynchronous chunk to execute synchronously, allowing you to run assertions right after.'
  },
  {
    id: 'test-16',
    text: 'A developer needs to verify that an Apex trigger successfully blocks users from deleting an active Project record if it has open tasks. How should the developer validate this negative testing case scenario?',
    topic: 'Apex Testing',
    options: [
      'Verify that deleting the record throws an unhandled server exception crash page layout',
      'Wrap the delete DML operation inside a try-catch block, execute the deletion, and assert that a DMLException is caught and contains the expected error message',
      'Delete the parent account record instead to check cascade behaviors',
      'Disable the deletion permission on standard profiles during data loading operations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Negative testing verifies that your code blocks invalid actions. Catching the expected DMLException inside a try-catch block and asserting against the error message confirms the validation logic is working as intended.'
  },
  {
    id: 'test-17',
    text: 'Your deployment package contains a class that calculates product margins based on a custom pricing lookup field. The unit test passes in the sandbox but fails in the production deployment window because a specific row is missing. What is the cause?',
    topic: 'Apex Testing',
    options: [
      'The target pricing record exists inside the sandbox database but does not exist in production, confirming that the test class relies on hardcoded data visibility instead of mock data creation',
      'The sandbox environment has higher execution performance limits than production instances',
      'The validation rules were not fully checked inside the metadata parameters',
      'The pricing field type was converted from an external ID into a formula variable'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Relying on hardcoded IDs or assuming records exist in an environment causes test failures during deployment. Creating all necessary dependencies within a @testSetup method ensures your tests are fully self-contained.'
  },
  {
    id: 'test-18',
    text: 'A team leader wants to enforce strict testing boundaries by validating that a newly modified support routing trigger does not run into record access issues when run by lower-level helpdesk agents. How should the test be structured?',
    topic: 'Apex Testing',
    options: [
      'Change the system administrator account profile parameters to match agent titles',
      'Generate a mock User record assigned to a Support Agent role and profile, and place the test DML transactions inside a System.runAs(mockUser) block',
      'Deploy the trigger code with the "without sharing" controller keyword string',
      'Run Data Loader to reassign record ownership profiles inside production tables'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'System.runAs() runs code within the security context of a specific user. This lets you confirm that low-privilege roles or profiles can interact with your automation without hitting unexpected read/write errors.'
  },
  {
    id: 'test-19',
    text: 'An administrator notices that running a full organization test suite takes over three hours, which slows down deployment windows. Upon inspection, they see many test classes are querying and creating identical core data tables repeatedly. What optimization pattern reduces this friction?',
    topic: 'Apex Testing',
    options: [
      'Set the SeeAllData parameter to true across all test classes globally',
      'Centralize mock data generation logic into a single reusable Test Data Factory utility class, and leverage @testSetup methods to share records across class tests',
      'Deactivate the trigger logic blocks prior to commencing deployment tasks',
      'Convert all custom lookup relationship components into text inputs'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'A Test Data Factory is a centralized utility class that generates test data. Using it alongside @testSetup methods streamlines data creation, reduces code duplication, and speeds up test suite execution times.'
  },
  {
    id: 'test-20',
    text: 'A developer needs to test an integration that relies on custom settings or custom metadata types defining timeout ranges. How should this configuration data be accessed or handled inside a unit test class layout?',
    topic: 'Apex Testing',
    options: [
      'Custom metadata types are visible to test methods by default (unlike standard data tables), allowing direct queries without requiring special annotations or setup configurations',
      'The test will crash because custom metadata types are hidden from test classes completely',
      'The developer must run an asynchronous batch job to import metadata files',
      'The configuration settings must be hardcoded into text arrays inside test classes'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Unlike standard sObjects, Custom Metadata Types and Custom Settings represent setup data. They are visible to all test contexts by default without needing SeeAllData=true, making it easy to test configuration routing.'
  },

  {
    id: 'org-1',
    text: 'What is the recommended approach for deploying changes from sandbox to production?',
    topic: 'Org Development',
    options: [
      'Change Sets',
      'ANT Migration Tool',
      'Salesforce CLI with SFDX',
      'All of the above'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'All tools are valid deployment options, with SFDX being the modern recommended approach for DevOps.'
  },
  {
    id: 'org-2',
    text: 'Which sandbox type is an exact replica of a production organization, including all configuration, metadata, and full transactional record data?',
    topic: 'Org Development',
    options: [
      'Developer Sandbox',
      'Developer Pro Sandbox',
      'Partial Copy Sandbox',
      'Full Sandbox'
    ],
    correctAnswer: 3,
    difficulty: 'moderate',
    explanation: 'A Full Sandbox copies the entire production environment—including all metadata, custom configurations, and full production database records—making it ideal for performance and staging tests.'
  },
  {
    id: 'org-3',
    text: 'What is the primary function of the Salesforce Metadata API in application lifecycle management?',
    topic: 'Org Development',
    options: [
      'To export transactional data records into external analytics formats daily',
      'To manage, retrieve, deploy, and alter organization configurations and customizations as structured XML files',
      'To automatically enforce validation rules across custom objects',
      'To handle secure single sign-on handshakes between user directories'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Metadata API lets you manage your org customizations as XML configuration files. It powers deployment engines like the Salesforce CLI, DevOps Center, and Change Sets.'
  },
  {
    id: 'org-4',
    text: 'What is the minimum standard refresh interval requirement for a Partial Copy Sandbox environment?',
    topic: 'Org Development',
    options: [
      '1 day',
      '5 days',
      '14 days',
      '29 days'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Partial Copy Sandboxes have a minimum refresh interval ceiling of 5 days, whereas Full Sandboxes require a 29-day waiting period between resets.'
  },
  {
    id: 'org-5',
    text: 'When using Change Sets to deploy changes from a source sandbox to a target org, what must be explicitly configured in the target organization before the deployment can occur?',
    topic: 'Org Development',
    options: [
      'A Deployment Connection authorizing inbound changes from the source sandbox',
      'A validation rule checking the developer profile credentials',
      'An automated Apex script to wipe test data tables',
      'A global metadata index refresh via Schema Builder'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'To secure environments, the target org must explicitly authorize an inbound deployment stream by establishing an active Deployment Connection pointing to the source sandbox.'
  },
  {
    id: 'org-6',
    text: 'What is the core structural difference between Package Development (Source-Driven) and Org-Driven Development models?',
    topic: 'Org Development',
    options: [
      'Package development relies strictly on the Data Import Wizard utility',
      'Package development treats source control (Git) as the source of truth and organizes changes into modular packages; Org-driven model treats the org as the source of truth',
      'Package development disables Apex testing code coverage calculations during release steps',
      'Org-driven development forces all sharing rules to operate under Public Read/Write settings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Source-driven package development isolates code into discrete, version-controlled bundles using repositories, moving away from tracking loose changes directly inside a shared sandbox instance.'
  },
  {
    id: 'org-7',
    text: 'What tool provides a point-and-click graphical interface to track, manage, and deploy development changes across environments using a centralized repository like GitHub without writing CLI commands?',
    topic: 'Org Development',
    options: [
      'Data Loader Dashboard',
      'Salesforce DevOps Center',
      'Developer Console Log Frame',
      'ANT Migration Command Console'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce DevOps Center replaces legacy change sets with an intuitive, UI-driven release management pipeline that manages sandbox tracking and Git branches under the hood.'
  },
  {
    id: 'org-8',
    text: 'What capability does a "Scratch Org" offer within modern Salesforce application development pipelines?',
    topic: 'Org Development',
    options: [
      'An environment that retains record data permanently for audit logs',
      'A temporary, blank Salesforce environment that can be spun up quickly via the CLI to develop and test specific source features isolated from other code',
      'A custom layout designed for sketching application designs visually',
      'A training playground populated with pre-loaded case assignments'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Scratch orgs are short-lived, highly configurable testing spaces used in source-driven development. They allow developers to quickly validate independent feature branches from scratch.'
  },
  {
    id: 'org-9',
    text: 'What does a "Validated" change set status verify inside a target organization deployment queue?',
    topic: 'Org Development',
    options: [
      'The changes have been successfully written and saved to the live production database',
      'The package component configurations are syntactically sound and all required unit tests pass successfully, but changes are not yet committed',
      'The source sandbox data records match the target environment tables exactly',
      'The deployment connection has timed out'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Running a validation deployment performs a dry run. It checks package dependencies and runs test classes to confirm the build will succeed when you launch the actual quick deploy step.'
  },
  {
    id: 'org-10',
    text: 'What type of sandbox environment is optimized for quality assurance testing and includes a customized subset of production data driven by a Sandbox Template?',
    topic: 'Org Development',
    options: [
      'Developer Sandbox',
      'Developer Pro Sandbox',
      'Partial Copy Sandbox',
      'Scratch Org Frame'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Partial Copy Sandboxes replicate metadata and use a defined Sandbox Template to pull a sampling of production records (up to 5GB), giving you a realistic test environment without the size of a Full Sandbox.'
  },
  {
    id: 'org-11',
    text: 'Which Salesforce command line tool allows you to interact with your orgs, manage metadata, run tests, and script automated DevOps continuous integration pipelines?',
    topic: 'Org Development',
    options: [
      'Salesforce Workbench UI',
      'Salesforce CLI (sf commands)',
      'Data Loader Utility Console',
      'Schema Builder Canvas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Salesforce CLI is the cornerstone of modern automation. It lets you run terminal scripts to authorize environments, retrieve source files, execute tests, and run deployment workflows.'
  },
  {
    id: 'org-12',
    text: 'What is a "Managed Package" within the Salesforce environment architecture?',
    topic: 'Org Development',
    options: [
      'A loose set of editable components shared between internal developers',
      'A sealed application bundle deployed by AppExchange partners whose source code is hidden to protect intellectual property and allows for seamless upgrades',
      'An assignment rule queue monitored by system administrators',
      'A validation rule checking record locking statuses'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Managed packages are used by ISVs to distribute applications on the AppExchange. They use a unique namespace, hide underlying code to protect intellectual property, and support pushed upgrades.'
  },
  {
    id: 'org-13',
    text: 'A developer needs to deploy a newly modified Apex trigger along with an associated custom field. During deployment to production, the validation fails with a code coverage error. Total global coverage in production is 82%. What is the cause of this error?',
    topic: 'Org Development',
    options: [
      'The target organization is out of cloud file storage space',
      'The new Apex trigger itself has 0% individual test coverage, violating the requirement that every single trigger must have at least some code coverage',
      'The custom field was not set to visible across profiles',
      'The developer did not run Data Loader prior to triggering the change set push'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'While the total organization average coverage must sit above 75%, Salesforce also enforces a strict requirement that every individual trigger must execute at least one line of coverage via a test class.'
  },
  {
    id: 'org-14',
    text: 'Your company requires a staging environment to perform full end-to-end integration tests with a third-party billing platform. The test relies on having real, large-scale historical account data records. Which environment should you allocate?',
    topic: 'Org Development',
    options: [
      'Developer Pro Sandbox environment',
      'A series of fresh Scratch Orgs configured daily',
      'Full Sandbox environment',
      'Partial Copy Sandbox without a template configuration'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'Since the staging process demands comprehensive data volume and exact record parity to simulate live transactions, a Full Sandbox is the necessary choice.'
  },
  {
    id: 'org-15',
    text: 'A business is preparing for a major production release on a weekend. The administrator wants to reduce deployment downtime by running tests and verifying the deployment package days in advance. What release strategy should be applied?',
    topic: 'Org Development',
    options: [
      'Run Data Loader to overwrite metadata lines in real time',
      'Execute a "Validate-Only" deployment to production mid-week, then use "Quick Deploy" on the weekend to commit the pre-verified changes within minutes',
      'Change the production OWD configuration settings to Public Read/Write',
      'Deactivate the organization profiles during configuration changes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Validating your deployment ahead of time runs tests and checks dependencies in advance. If successful, you can use Quick Deploy to push the changes to production within a 4-day window without re-running tests.'
  },
  {
    id: 'org-16',
    text: 'An administrator attempts to add a new custom field to an outbound change set, but discovers that a critical dependent validation rule was left out of the component list. What must the administrator do to fix this omission?',
    topic: 'Org Development',
    options: [
      'Click the "Edit" button inside the uploaded change set queue to append the validation rule directly',
      'Clone the change set, add the missing validation rule component to the new bundle, and upload it as a new version',
      'Manually type the XML formula parameters inside the target org setup menus',
      'Refresh the target deployment connection matrices instantly'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Once a Change Set is uploaded, it becomes immutable and cannot be modified. To fix missing dependencies, you must clone the change set, add the missing items, and upload the new version.'
  },
  {
    id: 'org-17',
    text: 'A development team wants to set up a continuous integration pipeline that automatically validates and deploys metadata updates to a sandbox whenever a code branch is merged into their main branch on GitHub. What approach is recommended?',
    topic: 'Org Development',
    options: [
      'Schedule Data Import Wizard routines hourly',
      'Build a CI/CD pipeline using a tool like GitHub Actions, Jenkins, or GitLab CI integrated with the Salesforce CLI',
      'Manually export components using change sets on every merge event',
      'Configure escalation rules to track repository updates'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Automating builds with CI/CD tools paired with the Salesforce CLI allows teams to run automated test suites and deploy metadata seamlessly with every code merge.'
  },
  {
    id: 'org-18',
    text: 'You have completed testing an updated business flow inside a standard Developer sandbox environment. You notice that your custom components are missing sample customer data for user validation. What is the standard behavior explaining this?',
    topic: 'Org Development',
    options: [
      'Developer sandboxes only copy metadata configuration and are completely isolated from production transactional records by design',
      'The sandbox database has encountered a storage file corruption failure',
      'The validation rules blocked record visibility settings',
      'The developer did not run an update command within the command line utility'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'Developer and Developer Pro sandboxes are metadata-only environments. They do not bring over production data records, so you must create or load mock records for testing.'
  },
  {
    id: 'org-19',
    text: 'During a release window, an administrator receives a deployment conflict error stating that a field type cannot be modified because it is currently referenced by an active Apex class handler. How should this release hurdle be resolved?',
    topic: 'Org Development',
    options: [
      'Force the metadata override using data loader utilities parallel commands',
      'Coordinate the deployment by updating the Apex class logic to decouple the field reference first, or include the updated Apex class alongside the field modifications in the same deployment package',
      'Convert the custom object OWD setting to Private temporarily',
      'Delete the active user accounts tracking metadata changes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce blocks changes that break existing code dependencies. Bundling both the updated Apex class and the field changes into a single deployment lets the compiler validate and accept the interdependent updates together.'
  },
  {
    id: 'org-20',
    text: 'A consulting company wants to manage environment configurations securely by storing variables like external endpoint URLs outside of code blocks, while allowing values to vary between sandboxes and production automatically. What feature should be used?',
    topic: 'Org Development',
    options: [
      'Hardcoded string constants inside test classes',
      'Custom Metadata Types or Custom Settings populated with environment-specific values within each respective org instance',
      'Validation rules tracking network domains',
      'Case Assignment rule entries routing endpoints'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom Metadata and Custom Settings abstract configuration out of code. This lets you point to sandbox endpoints in development orgs and production endpoints in production, without changing code lines during a release.'
  },
  {
    id: 'omni-1',
    text: 'What is the primary operational advantage of utilizing an OmniStudio Integration Procedure over an individual DataRaptor when fetching multi-source data for a front-end component?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Integration Procedures run client-side to improve browser UI rendering speeds',
      'Integration Procedures can chain multiple DataRaptors, handle conditional logic, call external REST APIs, and trim payloads server-side in a single server call',
      'Integration Procedures bypass the Einstein Trust Layer security protocols completely',
      'Integration Procedures are required to convert standard objects into Big Objects'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Integration Procedures are server-side processes that execute multiple actions (like data transformations, conditional checks, and external API calls) in a single round-trip, minimizing data payload sizes and maximizing performance.'
  },
  {
    id: 'omni-2',
    text: 'Which OmniStudio Data Tool should be selected when an administrator needs to take an incoming JSON payload from an external web portal and insert or update matching record fields natively in Salesforce?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Extract',
      'DataRaptor Turbo Extract',
      'DataRaptor Load',
      'DataRaptor Transform'
    ],
    correctAnswer: 2,
    difficulty: 'moderate',
    explanation: 'A DataRaptor Load (also called DataRaptor Turbo Load or Interface) accepts external JSON structures, translates them to matching sObject structures, and performs DML write operations to the database.'
  },
  {
    id: 'omni-3',
    text: 'What is the function of an OmniScript component inside the Salesforce Industries (Vlocity) framework architecture?',
    topic: 'OmniStudio Development Tools',
    options: [
      'To execute automated batch data transformations on massive background logs every Sunday night',
      'To provide a guided, interactive customer-facing path or wizard that collects user inputs and adapts steps based on conditional branching logic',
      'To act as a low-level Apex trigger handler pattern for standard account objects',
      'To host third-party JavaScript tracking libraries within isolated desktop apps'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OmniScripts are declarative, guided user experiences that step individuals through complex business transactions or screen scripts with embedded validation and dynamic field visibility rules.'
  },
  {
    id: 'omni-4',
    text: 'Which declarative OmniStudio tool should be selected when you need to quickly query and retrieve specific fields from a single Salesforce object without complex parent-child relational mappings?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Extract',
      'DataRaptor Turbo Extract',
      'DataRaptor Transform',
      'DataRaptor Load'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DataRaptor Turbo Extract is specifically optimized for single-object queries. It offers faster performance thresholds than standard DataRaptor Extracts because it limits structural joins and returns flat JSON responses.'
  },
  {
    id: 'omni-5',
    text: 'What is the purpose of utilizing a DataRaptor Transform inside an Integration Procedure execution flow?',
    topic: 'OmniStudio Development Tools',
    options: [
      'To commit new records to Salesforce database tables asynchronously',
      'To restructure, rename, or reformat internal JSON structures (such as changing an external API response payload to fit an OmniScript expected input mapping)',
      'To compress file sizes during data loader exports',
      'To execute calculation matrices within the Business Rule Engine'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'DataRaptor Transform maps and alters data shapes without interacting with the database. It converts JSON strings to alternative JSON structural layouts, XML arrays, or PDF document fields.'
  },
  {
    id: 'omni-6',
    text: 'What is an OmniStudio FlexCard primary functional role within the Customer 360 interface design system?',
    topic: 'OmniStudio Development Tools',
    options: [
      'To calculate complex financial risk percentages based on continuous formula logic loops',
      'To display contextual industry-specific metrics and data summaries at a glance, allowing users to trigger quick actions or processes straight from the layout block',
      'To manage the distribution connection configurations inside change sets',
      'To run apex test suites across managed packages automatically'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'FlexCards summarize data properties from multiple sources into context-rich blocks. They provide contextual highlights, drop-down filters, menu parameters, and actions to launch secondary scripts.'
  },
  {
    id: 'omni-7',
    text: 'In OmniStudio OmniScript configuration, what does the "Seed Data JSON" property accomplish during step initialization?',
    topic: 'OmniStudio Development Tools',
    options: [
      'It clears out all active session tracking variables to protect device data',
      'It pre-populates element parameters or default field inputs within the user interface before the customer starts entering information',
      'It enforces validation rules directly on custom object lookup fields',
      'It uploads binary static resource attachments into storage spaces'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Seed Data passes structural key-value mappings down into the OmniScript context immediately at launch, allowing the user experience layer to display default entries or dynamic context metrics.'
  },
  {
    id: 'omni-8',
    text: 'What engine within the OmniStudio layer should an architect deploy to evaluate complex policy rules, price formulas, or discount tables via a tabular matrix framework?',
    topic: 'OmniStudio Development Tools',
    options: [
      'DataRaptor Load Engine',
      'Business Rule Engine (BRE) with Expression Sets and Lookup Matrices',
      'FlexCard Action Manager',
      'Integration Procedure Custom REST Handlers'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Business Rule Engine (BRE) utilizes Expression Sets to arrange computational steps or lookup matrices, executing policy checking, credit scores, or rating calculations cleanly outside code.'
  },
  {
    id: 'omni-9',
    text: 'What behavior occurs when the "Cache Block" element is activated inside an OmniStudio Integration Procedure definition?',
    topic: 'OmniStudio Development Tools',
    options: [
      'It forces the browser client window to lock down until transactions resolve completely',
      'It temporarily stores the execution responses of nested actions in a session or organizational cache layer, avoiding redundant database lookups or external API calls',
      'It disables validation formulas across custom tables automatically',
      'It copies metadata definitions into scratch org configurations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Cache Blocks reduce server load by saving transaction outputs in the platform cache framework, allowing subsequent requests matching identical parameters to retrieve data instantly.'
  },
  {
    id: 'omni-10',
    text: 'Which standard action type can be dragged onto an OmniStudio FlexCard canvas layout to allow a user to navigate directly to a specific Salesforce record page layout view?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Integration Procedure Action',
      'Navigate Action',
      'OmniScript Action',
      'Event Action'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Navigate Action type lets FlexCard components link dynamically to standard page objects, external URLs, app layouts, or specific record detail views using page references.'
  },
  {
    id: 'omni-11',
    text: 'What occurs when an OmniScript execution encounters an "Action Block" designated as "Asynchronous" within its step sequencing framework?',
    topic: 'OmniStudio Development Tools',
    options: [
      'The step sequence pauses and blocks user interface navigation indefinitely until a webhook returns parameters',
      'The OmniScript fires the server request in a parallel thread, allowing the user to proceed with screen interactions while data processes in the background',
      'The browser completely refreshes the parent window frame layout stack',
      'The system automatically converts lookups into master-detail fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Asynchronous actions execute independently from the active UI frame, preventing interface freezing or blocking behavior while fetching metrics or saving data blocks.'
  },
  {
    id: 'omni-12',
    text: 'What structure is used by OmniStudio components to pass parameters, inputs, and track variable states across consecutive configuration steps?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Apex Class Variable Matrix Arrays',
      'JSON (JavaScript Object Notation) Key-Value Data Trees',
      'Standard CSV Flat Table Buffers',
      'XML Document Structuring Paths'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OmniStudio runs entirely on JSON contracts. OmniScripts, FlexCards, DataRaptors, and Integration Procedures all read data from and output transformations into a shared JSON data block.'
  },
  {
    id: 'omni-13',
    text: 'Universal Containers needs an customer self-service portal layout. When a user changes their state picklist choice on a dynamic screen, the city dropdown must instantly update with matching values from a lookup matrix without reloading the step. How should this be structured?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Deploy synchronous triggers tracking state text modifications',
      'Configure an OmniScript with conditional visibility rules or an dependent lookup configuration powered by a quick DataRaptor transform call',
      'Build a validation rule that checks string formats on every click',
      'Set the standard profile settings to High Assurance levels'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OmniScripts natively process on-change properties. When fields link to lookup configurations or execute quick background data requests, they alter step UI properties instantly without screen lag.'
  },
  {
    id: 'omni-14',
    text: 'An insurance agent needs to view a summary of a client Policy details from an external mainframe along with standard Salesforce Account information in a single uniform layout card block. How should this information be orchestrated efficiently?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Run Data Loader routines every 60 seconds to import mainframe entries into staging objects',
      'Create an OmniStudio FlexCard that pulls its data payload from an Integration Procedure, which combines a Salesforce DataRaptor query and an HTTP REST action in one call',
      'Build a series of validation rules checking policy character structures',
      'Convert the Account layout views to Private organization-wide defaults'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'FlexCards excel at multi-source presentation. Using an Integration Procedure as its data source allows server-side aggregation of cloud records and external API responses into a clean, flat JSON block.'
  },
  {
    id: 'omni-15',
    text: 'A developer observes that a newly deployed OmniScript is displaying blank response outputs when executing a data extraction block in a production environment. The sandbox configuration worked perfectly. What is the most likely cause of this issue?',
    topic: 'OmniStudio Development Tools',
    options: [
      'The production cloud storage system has run out of index allocation properties',
      'The DataRaptor or Integration Procedure component names specified in the OmniScript layout do not match the production deployment component keys exactly, or permissions are missing',
      'The validation rules were not fully checked inside sandbox scripts',
      'The profile session security limits were set to low parameters'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'OmniStudio callouts reference component names dynamically via text string keys. Missing components, typos in name fields, or restricted user access settings on the data layer can block execution in new environments.'
  },
  {
    id: 'omni-16',
    text: 'A utility firm wants to build a business flow where clients can input meter measurements. Before saving, the system must check the consumption value against an active calculation matrix rule to catch variance anomalies. What tool path satisfies this request?',
    topic: 'OmniStudio Development Tools',
    options: [
      'A series of complex validation rules containing regex formatting text strings',
      'An OmniScript that calls an Integration Procedure, which routes the input value through a Business Rule Engine (BRE) Expression Set and returns the calculation parameters',
      'A lookup formula field mapping data tables across objects',
      'An outbound message integration sending raw XML strings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'This pattern links the guided interface layer (OmniScript) to logic engines via an Integration Procedure, leveraging Expression Sets to calculate adjustments and flags cleanly outside Apex.'
  },
  {
    id: 'omni-17',
    text: 'An administrator needs to modify an OmniStudio FlexCard so that it displays an extra column highlighting special service warnings only if an account is flagged as "High Risk." How should this conditional styling be handled natively?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Write a validation rule that hides field entries across profiles',
      'Configure the State or individual Element layout properties inside the FlexCard designer canvas to apply conditional visibility or specific CSS classes based on data path values',
      'Deploy an apex class script to modify the component metadata variables dynamically',
      'Change the object sharing settings from Private to Controlled by Parent'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'FlexCards feature native conditional element settings. You can hide fields, show alert banners, or change text colors based on state rules matching JSON record parameters.'
  },
  {
    id: 'omni-18',
    text: 'A consulting company wants to minimize performance overhead by ensuring that when an OmniScript queries database contacts, it passes only the specific parent AccountId parameter instead of loading all database accounts. What property fields manage this filter routing?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Validation Rule formulas tracking ID string formats',
      'The Input Parameters path properties on the DataRaptor or Integration Procedure Action block within the OmniScript designer canvas',
      'Global constants variables hardcoded inside custom metadata profiles',
      'Case Assignment routing rule definitions'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To filter data requests contextually, you define Input Parameters on the action block (e.g., passing `ContextId` as the filter value key), restricting the downstream query scope.'
  },
  {
    id: 'omni-19',
    text: 'You have generated a complex data extraction structure using multiple nested relational joins inside an OmniStudio DataRaptor Extract. Users mention performance lag. How can this query be optimized inside OmniStudio?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Convert all relationship lookups into text character inputs',
      'Simplify the structure by breaking data requirements down, shifting simple queries to DataRaptor Turbo Extracts, or leveraging cache configurations inside an Integration Procedure wrapper',
      'Build a validation rule to clear out old rows on save cycles',
      'Change the object organization-wide sharing defaults configuration to Public Read/Write'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Complex, deep extractions can increase server processing metrics. Shifting simple single-object queries to Turbo Extracts and putting slow operations inside cached Integration Procedures improves loading performance.'
  },
  {
    id: 'omni-20',
    text: 'An architectural team wants to export a set of completed OmniStudio configurations (OmniScripts, FlexCards, DataRaptors) from a development sandbox to a source control repository as individual deployable items. What framework mechanism handles this migration?',
    topic: 'OmniStudio Development Tools',
    options: [
      'Data Loader extraction parameters parsing CSV lines',
      'Salesforce CLI paired with the OmniStudio Migration Tool (vlocity CLI) or DevOps Center tracking Salesforce metadata standards',
      'Standard change sets processing formula rules directly',
      'Workflow outbound messaging engines broadcasting data formats'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Modern OmniStudio elements integrate cleanly with Salesforce metadata standards. Using the Salesforce CLI or specialized extraction tools captures configurations as structured files for source control.'
  },
  {
    id: 'ai-1',
    text: 'What is the primary architectural purpose of the Einstein Trust Layer within the Agentforce ecosystem?',
    topic: 'Agentforce & AI',
    options: [
      'To increase the processing speed of generation queries by 50%',
      'To securely manage data privacy by masking sensitive fields, preventing toxicity, and blocking external LLMs from retaining enterprise data',
      'To write automated Apex test classes for custom metadata packages',
      'To replace traditional multi-factor authentication routing systems'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Einstein Trust Layer handles safety and compliance by intercepting prompts to apply data masking, toxicity scoring, and strict zero-data-retention parameters when communicating with external LLMs.'
  },
  {
    id: 'ai-2',
    text: 'What is the function of a "Topic" when configuring a custom AI agent in Agentforce?',
    topic: 'Agentforce & AI',
    options: [
      'To determine the color theme applied to screen layout containers',
      'To define a specific domain of conversation or functional scope, containing a group of related actions and instructions for the agent to follow',
      'To log background exception metrics inside developer consoles',
      'To compress long text parameters prior to data ingestion cycles'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Topics organize an agent\'s capabilities. Each topic defines a boundary of expertise (e.g., "Billing Queries") and holds the specific instructions and actions needed to handle that area.'
  },
  {
    id: 'ai-3',
    text: 'Which Salesforce tool allows administrators to declaratively build, test, and manage custom AI prompts using merge fields from standard records before deploying them into business workflows?',
    topic: 'Agentforce & AI',
    options: [
      'Schema Builder Canvas',
      'Salesforce Prompt Builder',
      'Model Playground Explorer',
      'Data Import Wizard'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Prompt Builder provides a declarative workspace to create custom prompt templates, safely embedding live record merge fields, flows, or tokens within the instruction context.'
  },
  {
    id: 'ai-4',
    text: 'What does the reasoning engine (Planner) do inside an Agentforce agent during a user conversation?',
    topic: 'Agentforce & AI',
    options: [
      'It converts standard object validation errors into custom text strings',
      'It dynamically analyzes user intent, evaluates active topics, determines which actions are needed, and sequences execution steps to reach a goal',
      'It hardcodes an absolute sequence of step interactions that cannot be altered',
      'It forces all database transactions to run in system mode'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Unlike rigid chatbots, Agentforce uses an autonomous reasoning engine to evaluate user input, select appropriate topics or actions dynamically, and build an execution plan on the fly.'
  },
  {
    id: 'ai-5',
    text: 'How can an administrator expose an active business flow or custom database routine as a callable "Action" that an Agentforce agent can execute autonomously?',
    topic: 'Agentforce & AI',
    options: [
      'By converting the target flow into a standard validation rule formula',
      'By registering the Autolaunched Flow, Apex Class, or prompt template as an active Action within the agent topic configuration canvas',
      'By changing the sObject organization-wide sharing defaults to Public Read Only',
      'By adding custom CSS variables inside an LWC metadata definition file'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Agents interact with systems through actions. Registering declarative tools like Autolaunched Flows or Apex classes as actions lets the reasoning engine run them when a user request requires it.'
  },
  {
    id: 'ai-6',
    text: 'What represents a core functional difference between a traditional rule-based Chatbot and an autonomous AI agent in Agentforce?',
    topic: 'Agentforce & AI',
    options: [
      'Traditional chatbots use Apex code, while autonomous agents only use XML files',
      'Traditional chatbots follow rigid, pre-defined decision trees; autonomous agents use natural language processing and a reasoning engine to dynamically choose their execution path',
      'Traditional chatbots require separate data cloud storage systems to function',
      'Autonomous agents are restricted to running inside standard mobile layouts only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Traditional bots fail if a user deviates from a hardcoded menu path. Agentforce agents process open conversation inputs flexibly, using reasoning logic to understand intent and select relevant actions.'
  },
  {
    id: 'ai-7',
    text: 'What occurs during the "De-masking" phase within the Einstein Trust Layer processing lifecycle framework?',
    topic: 'Agentforce & AI',
    options: [
      'The platform permanently deletes the source customer record from production',
      'The system safely replaces the temporary data mask placeholders with the original real values right before presenting the generated response to the user',
      'The engine displays raw password data strings inside global search layouts',
      'The validation rules run an asynchronous audit cycle over user permissions'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To keep data secure, the Trust Layer substitutes real details with secure tokens before sending prompts to external LLMs. When the response returns, the layer swaps the real values back in for the user view.'
  },
  {
    id: 'ai-8',
    text: 'Which prompt template type should be configured inside Prompt Builder when you want an AI agent to generate a personalized email response based on a specific Case record?',
    topic: 'Agentforce & AI',
    options: [
      'Field Generation Template',
      'Sales Email Template / Flex Template',
      'Object Overview Template',
      'Record-Triggered Flow Template'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Sales Email or Flex prompt templates allow you to define structured instructions specifically aimed at drafting messaging text, pulling dynamic context directly from associated records.'
  },
  {
    id: 'ai-9',
    text: 'What capability does the "Model Playground" offer an administrator or developer working with generative AI features?',
    topic: 'Agentforce & AI',
    options: [
      'An interface to visually design standard multi-object lookup relationship paths',
      'A centralized environment to test, compare, and fine-tune different foundational LLMs (like OpenAI, Anthropic, or Google Gemini) using custom prompt variables',
      'A data loading utility designed to extract big object entries',
      'A tool to schedule batch trigger handlers to run every Sunday afternoon'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Model Playground provides an administrative workspace to directly interact with configured LLM providers, making it easy to test responses, view metrics, and choose the best model for your use case.'
  },
  {
    id: 'ai-10',
    text: 'What is the purpose of adding specific "User Instructions" directly onto an Agentforce agent configuration block?',
    topic: 'Agentforce & AI',
    options: [
      'To manage the password complexity requirements applied to profile setups',
      'To define the personality, tone, behavior boundaries, and core operational guardrails that the agent must maintain across all conversations',
      'To write standard help text displayed inside hover panels on layouts',
      'To route case assignments to default system helpdesk queues'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'User Instructions act as system prompts that dictate how an agent behaves. They guide tone (e.g., "Be professional and clear") and enforce boundaries (e.g., "Do not discuss internal pricing formulas").'
  },
  {
    id: 'ai-11',
    text: 'Which standard parameter determines the level of creative variance or predictability an LLM displays when evaluating a prompt template?',
    topic: 'Agentforce & AI',
    options: [
      'Token Max Count',
      'Temperature',
      'Frequency Penalty',
      'Top P Compression'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Temperature controls response randomness. Lower values keep outputs deterministic and focused, which is ideal for business workflows, while higher values allow for more creative variance.'
  },
  {
    id: 'ai-12',
    text: 'What does the "Grounding" process accomplish when compiling a prompt template inside Salesforce AI architectures?',
    topic: 'Agentforce & AI',
    options: [
      'It restricts the code from executing outside of sandbox test environments',
      'It injects relevant, real-time enterprise data (from standard records or Data Cloud) directly into the prompt context, preventing the model from hallucinating',
      'It runs an optimization script to clean up duplicate picklist fields',
      'It switches the execution mode from user context to privileged system context'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Grounding adds factual business data to a prompt. Giving the LLM explicit record data alongside your instructions ensures its response is accurate and specific to your organization.'
  },
  {
    id: 'ai-13',
    text: 'Universal Containers wants their Agentforce Service Agent to resolve client returns. The agent must verify shipping dates in an external system before issuing a voucher. How should this external system integration step be handled?',
    topic: 'Agentforce & AI',
    options: [
      'Write a validation rule checking shipping status character codes',
      'Create an external API action using an External Service or Apex callout, and assign it to the corresponding Return Verification Topic on the agent canvas',
      'Deploy an asynchronous batch apex job to sync verification files daily',
      'Change the custom object sharing parameters to Controlled by Parent'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To access external data during a chat, wrap your API callout in an External Service action or Apex method. Adding this action to a topic lets the agent execute the call dynamically to verify dates.'
  },
  {
    id: 'ai-14',
    text: 'A business observes that their custom AI agent occasionally attempts to handle product refund questions using general service instructions, leading to mixed answers. How should the administrator correct this execution routing?',
    topic: 'Agentforce & AI',
    options: [
      'Set the baseline object OWD configurations to Private status',
      'Refine the Topic Classification descriptions and specific User Instructions to clearly define when the Refund Topic should capture the conversation versus general topics',
      'Build a validation rule to block users from entering the word refund',
      'Convert all related tracking fields into roll-up summary components'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The planner relies on topic descriptions to route conversations. Providing clear, precise descriptions of what each topic covers helps the agent accurately match user intent to the right path.'
  },
  {
    id: 'ai-15',
    text: 'A developer needs to dynamically augment a prompt layout with fields from multiple child asset records that match specific status strings. Standard merge fields fall short. What tool should be integrated into Prompt Builder?',
    topic: 'Prompt Engineering',
    options: [
      'A cross-object formula field tracking layout items',
      'An Autolaunched Flow or Apex class designed to collect child metrics, returning a clean text string to ground the prompt template',
      'A case assignment rule mapping percentage tables',
      'A lightning message service channel routing payloads client-side'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When standard record merge fields cannot handle advanced logic, you can call an Autolaunched Flow or Apex method within the prompt template to gather and format complex data arrays.'
  },
  {
    id: 'ai-16',
    text: 'During user testing, an Agentforce agent surfaces an administrative notice stating that it cannot complete an assignment because a custom flow failed. How should the administrator investigate this background processing error?',
    topic: 'Agentforce & AI',
    options: [
      'Inspect the network trusted IP ranges list configurations',
      'Open the native Agentforce Testing Center / Agent Debugger tool or standard platform Debug Logs to trace the exact input JSON and execution path failures',
      'Deactivate the organization profiles before repeating tests',
      'Check the browser cookie visibility limits within the user workspace'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Agentforce Testing Center and system Debug Logs allow you to trace agent behavior step-by-step, showing user inputs, matched topics, and any errors thrown by underlying actions.'
  },
  {
    id: 'ai-17',
    text: 'A company wants to prevent generative AI tools from exposing unverified internal product roadmap details during customer chats. How can this guardrail be enforced effectively within Prompt Builder or Agentforce?',
    topic: 'Prompt Engineering',
    options: [
      'Delete the product catalogue records from production database tables',
      'Explicitly state what data fields are restricted or excluded within the prompt template system instructions, and ensure associated KB articles are not indexed in agent search tools',
      'Configure an validation rule to block search loops completely',
      'Switch the user profile session security levels to high assurance'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Clear system instructions (e.g., "Never disclose unannounced product timelines") combined with managing which knowledge bases the agent can search sets reliable boundaries for generative responses.'
  },
  {
    id: 'ai-18',
    text: 'A financial services firm requires all AI-generated email responses to be reviewed by a human manager before transmission to clients. Which configuration satisfies this requirement safely?',
    topic: 'Agentforce & AI',
    options: [
      'Run a background batch job to scrape outlook message channels hourly',
      'Incorporate the prompt template inside an internal screen flow layout or review workspace component, requiring an agent validation click before firing the email action',
      'Set the custom object OWD default parameters to Private',
      'Build a validation rule that throws a fatal error on save events'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'To enforce a human-in-the-loop review, embed your prompt generation within a user action or Screen Flow, giving team members a chance to review and edit text before hitting send.'
  },
  {
    id: 'ai-19',
    text: 'You have written a prompt template that returns excellent results when tested against simple text fields, but fails with a validation error when a related record is blank. How should the prompt engineer optimize the template?',
    topic: 'Prompt Engineering',
    options: [
      'Universally mandate that all lookup fields contain mandatory values across the platform',
      'Incorporate conditional logic expressions inside the prompt template (such as using Flow wrappers or conditional tokens) to handle missing values gracefully',
      'Convert the target fields from text lines into roll-up summary values',
      'Disable the validation rules across the environment during text deployment'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Using conditional checks or wrapper flows inside your template ensures the prompt generator accounts for missing record data without throwing errors or creating awkward gaps in instructions.'
  },
  {
    id: 'ai-20',
    text: 'An operations team wants to track how often an Agentforce agent successfully resolves questions using an active "Order Tracking" topic vs. escalating them to live agents. Which tool displays these execution analytics?',
    topic: 'Agentforce & AI',
    options: [
      'Data Loader extraction parameters parsing CSV entries',
      'The native Agentforce Analytics dashboards and conversation transcript metric reports',
      'A series of workflow outbound messaging engines logging string files',
      'An apex unit test execution summary graph'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Agentforce includes native analytics and transcript reporting that track agent usage, topic engagement, action success rates, and escalation triggers.'
  },
  {
    id: 'dc-1',
    text: 'What is the primary architectural purpose of a Data Lakehouse architecture within Salesforce Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'To replace standard relational sObject storage structures for transactional day-to-day CRM modifications',
      'To separate compute from storage, allowing zero-copy data virtualization and high-scale processing over both structured and unstructured data pools',
      'To write automated Apex controller test classes for standard deployment metadata packages',
      'To convert standard picklist values into encrypted fields automatically at rest'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Data Cloud operates on a cloud-scale data lakehouse architecture. It decouples high-volume analytical compute from storage frames, enabling multi-source processing and zero-copy virtualization without duplicating operational data.'
  },
  {
    id: 'dc-2',
    text: 'Which step in the Data Cloud processing pipeline maps raw ingested files to a standard, unified data model skeleton like the Customer 360 Data Model?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Ingestion via Data Streams',
      'Data Harmonization (Data Mapping to Data Model Objects)',
      'Identity Resolution ruleset compilation',
      'Calculated Insights execution profiling'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Harmonization maps fields from Data Source Objects (DSOs) to Data Model Objects (DMOs) within a standardized blueprint (like Individual or Contact Point Email), creating a consistent schema across systems.'
  },
  {
    id: 'dc-3',
    text: 'What is the core difference between a Data Source Object (DSO) and a Data Model Object (DMO) in Salesforce Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'DSOs handle streaming data while DMOs can only ingest flat batch CSV files',
      'A DSO represents the raw incoming data table schema exactly as it is ingested; a DMO represents the standardized, harmonized target schema model',
      'DSOs are stored inside standard Salesforce org storage allocations while DMOs exist inside Big Objects',
      'DSOs ignore validation rule formulas while DMOs strictly enforce them on every transaction'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When a data stream is initialized, it builds a DSO to reflect the source schema exactly. That DSO is then harmonized and mapped to a standard or custom DMO layout to enable unified processing.'
  },
  {
    id: 'dc-4',
    text: 'What does an "Identity Resolution" ruleset calculate and produce inside a Data Cloud environment?',
    topic: 'Salesforce Data Cloud',
    options: [
      'An encrypted session token used to validate single sign-on handshakes across corporate servers',
      'A Unified Profile or "Golden Record" by blending duplicate records from separate data streams based on match and reconciliation rules',
      'An automated case assignment routing matrix for regional support queues',
      'A calculated formula field summary mapping cross-object lookup strings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Identity Resolution analyzes separate profiles (e.g., a lead from Marketing Cloud and a contact from core CRM) using match criteria like email or phone, blending them into a single Unified Profile.'
  },
  {
    id: 'dc-5',
    text: 'What represents a primary operational difference between a Calculated Insight and a Streaming Insight in Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Calculated Insights use Apex language arrays while Streaming Insights use custom metadata styles',
      'Calculated Insights process historical records in batch blocks at scheduled intervals; Streaming Insights evaluate real-time data windows continuously as events pass through',
      'Calculated Insights cannot handle multi-object relationship parameters',
      'Streaming Insights are restricted to running inside mobile app layouts exclusively'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights process historical datasets asynchronously using batch routines. Streaming Insights evaluate immediate event parameters using continuous time-window analysis to trigger near-instant actions.'
  },
  {
    id: 'dc-6',
    text: 'Which feature allows an administrator to define a specific subset of unified individuals based on behavioral filters or demographic attributes, making them available for activation campaigns?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Ingestion Connectors',
      'Data Segmentation',
      'Data Transformations (Batch)',
      'Schema Builder Canvas mapping'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Segmentation uses a drag-and-drop canvas to query and group harmonized profiles into target sub-audiences based on attributes or metrics (e.g., "High spenders in Europe").'
  },
  {
    id: 'dc-7',
    text: 'What occurs during the "Data Activation" phase within a standard Salesforce Data Cloud lifecycle workflow?',
    topic: 'Salesforce Data Cloud',
    options: [
      'The engine permanently locks down record fields to protect data privacy',
      'A finalized segment or data payload is published and pushed to an external endpoint or platform channel (like Marketing Cloud or an external webhook)',
      'The platform converts lookup values into master-detail fields natively',
      'The validation rules execute a synchronous system authorization sweep'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Activation takes your segmented audience lists and transmits them to action channels (like marketing platforms, ad networks, core CRM flows, or external webhooks) to launch tailored interactions.'
  },
  {
    id: 'dc-8',
    text: 'What mechanism can be implemented to read data from an external storage hub like Amazon S3 or Google BigQuery into Data Cloud without executing any actual data copy or data load transactions?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Loader extraction parameters',
      'Zero-Copy Data Federation (Data Shares and Federated Queries)',
      'Standard Change Sets metadata processing',
      'Workflow Outbound Messaging XML pushes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Zero-Copy federation securely reads external storage files in place. Data Cloud queries the remote data cloud warehouse directly on demand, removing data duplication overhead.'
  },
  {
    id: 'dc-9',
    text: 'What does a "Reconciliation Rule" manage inside a Data Cloud Identity Resolution layout configuration?',
    topic: 'Salesforce Data Cloud',
    options: [
      'The total character length thresholds allowed when validating email structures',
      'The selection criteria (like Most Recent, Source Priority, or Last Updated) used to pick the single best value for a field when building a unified profile',
      'The execution runtime windows applied to asynchronous background batch queries',
      'The user profiles permitted to export dashboard charts into CSV sheets'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'When multiple source records combine into one unified view, values may differ (e.g., separate phone numbers). Reconciliation rules dictate which source wins based on rules like priority or recency.'
  },
  {
    id: 'dc-10',
    text: 'Which standard language framework is utilized to construct advanced custom Calculated Insights or write multi-join queries inside the Data Cloud canvas interface?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Apex Scripting Code',
      'SQL (Structured Query Language)',
      'SOSL Search Syntax',
      'JavaScript ES6 Objects'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights can be built visually or via a standard SQL editor, allowing data analysts to apply groupings, joins, and aggregates over high-volume data model objects.'
  },
  {
    id: 'dc-11',
    text: 'What type of field mapping classification must be added to a custom entity to ensure Data Cloud accurately groups streaming event actions by time parameters?',
    topic: 'Salesforce Data Cloud',
    options: [
      'External ID Text Field',
      'Event Time Field (DateTime type designated as an active timestamp marker)',
      'Formula field outputting numeric text',
      'Junction reference object lookup'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Streaming or event data types require a designated Event Time field. This timestamp allows Data Cloud to accurately track event order, maintain temporal history, and run windowed analytics.'
  },
  {
    id: 'dc-12',
    text: 'What is a "Data Space" within the administration and setup architecture of Salesforce Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'A data loading utility designed to compress big object arrays',
      'A logical partition within a single Data Cloud instance that segregates data streams, data models, and segments by brand, region, or department for governance',
      'A temporary database buffer framework used to test validation formulas',
      'A dedicated storage pool for local file archives'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Spaces isolate data profiles. This allows a global enterprise to partition its data lakehouse assets into distinct secure zones (e.g., by brand or region) under a single tenant.'
  },
  {
    id: 'dc-13',
    text: 'Universal Containers wants to ingest customer interaction logs from an external web portal API directly into Data Cloud every 15 minutes. Which ingestion tool provides the most appropriate architectural connection point?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Standard Data Import Wizard runs',
      'Ingestion API or Webhook Connector configured to target a specific Streaming Data Stream',
      'A series of workflow outbound message scripts',
      'An after-save record flow running sync variables'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Ingestion API and Webhook Connectors stream high-frequency telemetry, interaction logs, or application events directly into Data Cloud schemas in near real time.'
  },
  {
    id: 'dc-14',
    text: 'An enterprise analyst observes that a segment counting active loyalty members is returning lower figures than corporate records specify. The match rules check for identical phone inputs. What optimization should be applied to the Identity Resolution rules?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Set the baseline object configurations to Private sharing status',
      'Incorporate normalization steps on the phone source attributes (such as stripping formatting or applying country code parameters) prior to execution matching evaluation steps',
      'Build a validation rule to block profiles with empty fields from saving',
      'Convert all associated phone records into roll-up fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Raw phone formatting discrepancies (e.g., `(555) 123-4567` vs `5551234567`) cause matching checks to fail. Applying normalization rules standardizes the data strings to fix resolution metrics.'
  },
  {
    id: 'dc-15',
    text: 'A business requires an immediate alert to fire in core Salesforce CRM when a unified customer\'s real-time digital engagement score drops below a specific metric. How should this downstream action be triggered from Data Cloud?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Run a data loader query process every 5 minutes in background layouts',
      'Configure a Data Action based on a Streaming Insight or Segment update to publish a Platform Event directly into the core CRM org, triggering a flow handler',
      'Build validation rules tracking string variables client-side',
      'Deploy a cross-object formula field mapping database matrices'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Actions connect analytical insights to core CRM workflows. When an aggregate threshold shifts, the Data Action broadcasts a Platform Event to launch standard record flows.'
  },
  {
    id: 'dc-16',
    text: 'An administrator needs to ingest transactional records from their core Salesforce CRM org into Data Cloud. They want to ensure that any custom field updates are synced automatically without manual adjustments. What connection type must be established?',
    topic: 'Salesforce Data Cloud',
    options: [
      'SOAP API WSDL file extraction routines',
      'The native Salesforce CRM Connector Bundle, creating specialized Data Streams for the target sObjects',
      'An Apex batch controller loop containing hardcoded maps',
      'A compact highlight panel script routing text arrays'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The native Salesforce CRM connector manages ingestion out of the box, linking object schemas directly to Data Cloud data streams with built-in refresh behaviors.'
  },
  {
    id: 'dc-17',
    text: 'A data engineer needs to map an incoming field tracking "Product Stock Code" to the standard Customer 360 data model. However, the exact standard field attribute does not exist in the default schema layout. What is the recommended practice?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Bypass data mapping and leave the attribute detached completely',
      'Extend the standard Data Model Object (DMO) schema by creating a custom field attribute on that standard object layout inside the Data Cloud builder canvas',
      'Deploy a custom Apex class controller to overwrite field values on tracking rows',
      'Change the data space settings from partitioned status to public visibility'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'If the standard Customer 360 data model lacks a specific field attribute, you can declartively add custom attributes to existing DMO nodes to accommodate unique parameters.'
  },
  {
    id: 'dc-18',
    text: 'Your organization needs to run multi-million row analytics evaluating historical customer lifetime value (LTV). The calculation involves complex financial variables across multiple tables. What tool path optimizes this processing?',
    topic: 'Salesforce Data Cloud',
    options: [
      'A series of validation formulas matching regex expressions',
      'A SQL-based Calculated Insight that aggregates metrics over the Individual and SalesOrder DMOs, running on an automated batch scheduling cycle',
      'An inline apex trigger loop executing SOQL calls synchronously',
      'An outbound message integration mapping data fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Calculated Insights are designed for high-scale batch operations over millions of rows. They handle large analytics jobs efficiently, saving calculated metrics right onto profile records.'
  },
  {
    id: 'dc-19',
    text: 'You have generated a new Data Stream pulling from a cloud file storage folder. Upon ingestion, you notice that multi-select picklist data fields look garbled and cause formatting failures. How should the ingestion data transform be optimized?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Universally restrict text fields to single-character values across source databases',
      'Incorporate a Data Transform block using formula functions (like SPLIT or REPLACE) to re-parse the incoming text array layout into separate clean attributes during ingestion',
      'Convert the target object fields into roll-up metrics within core CRM layout designs',
      'Turn off all identity resolution rules across the environment'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud ingestion supports transformation functions. Adding formula steps to data streams lets you clean strings and format multi-value tokens before writing to the database.'
  },
  {
    id: 'dc-20',
    text: 'An architecture team wants to package a verified Data Cloud schema layout, including its customized data model objects and mapping metadata, to deploy it from a staging sandbox into production. What framework tool handles this task?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Loader extraction parameters processing text cells',
      'Data Cloud Packaging combined with modern Salesforce Metadata API structures or DevOps Center release pipelines',
      'Standard formula field calculations processing values locally',
      'Workflow outbound messaging engines broadcasting data records'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Cloud supports packaging capabilities. This enables teams to capture data streams, data spaces, mappings, and insight schemas as deployable metadata for standard DevOps lifecycles.'
  },
  {
    id: 'dc-21',
    text: 'When configuring an Identity Resolution Ruleset in Salesforce Data Cloud, what is the core operational difference between an Exact Match rule and a Fuzzy Match rule configuration?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Exact Match requires alphanumeric strings to match identical characters, while Fuzzy Match evaluates variations such as common nicknames, abbreviations, or typographical errors',
      'Exact Match operates on streaming data tracks, while Fuzzy Match can only parse historical batch CSV files',
      'Exact Match forces record field values to undergo Platform Encryption steps automatically',
      'Exact Match can only evaluate single-character string fields'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'Exact Match requires absolute character-for-character parity between fields to flag a relationship match. Fuzzy Match leverages matching algorithms to identify structural variants (e.g., matching "Rob" to "Robert" or catching loose spacing shifts).'
  },
  {
    id: 'dc-22',
    text: 'What type of structural relationship setting must be established in the Data Cloud mapping canvas when linking a custom Data Source Object (DSO) field array to a standard Data Model Object (DMO)?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Master-Detail Relationship mapping',
      'Data Mapping (establishing structural routing connections between DSO source attributes and target DMO schemas)',
      'Junction Object configuration references',
      'Cross-Object Formula calculations'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Data Mapping is the functional step that maps attributes from ingested Data Source Objects (DSOs) to standardized Data Model Objects (DMOs) to align data patterns inside the core cloud lakehouse.'
  },
  {
    id: 'dc-23',
    text: 'In Data Cloud profile engineering, what specific record output is generated as a centralized reference key when multiple customer profiles resolve successfully into a single consolidated Golden Record profile?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Unified Individual ID (Unified Record Token)',
      'External ID Text String field',
      'Apex Transaction savepoint pointer',
      'Secure Session high-assurance cookie'
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation: 'When Identity Resolution match criteria are satisfied, the system groups corresponding source records together, assigning a unique Unified Individual ID that represents the core customer profile wrapper.'
  },
  {
    id: 'dc-24',
    text: 'Which reconciliation rule type should be selected when you want a unified profile field to always display the most current value available across all integrated data stream inputs?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Source Priority strategy',
      'Last Updated / Most Recent strategy',
      'Alphabetical character sort algorithm',
      'Dynamic lookup matrix matching'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'The Last Updated reconciliation rule evaluates the transaction dates of incoming streams, mapping the newest chronological data into the unified profile attribute field.'
  },
  {
    id: 'dc-25',
    text: 'What occurs when an analyst runs a Calculated Insight that features nested SQL grouping functions over high-volume Data Model Objects?',
    topic: 'Salesforce Data Cloud',
    options: [
      'The computation locks internal CRM database objects, preventing users from saving standard lead items',
      'The processing aggregates metric values (such as recalculating customer lifetime value scores) across multi-million row datasets asynchronously on a scheduled batch path',
      'The engine throws an immediate mixed DML trigger exception crash warning',
      'The system automatically converts text inputs into geolocation coordinates'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Calculated Insights use batch processing threads to evaluate complex SQL functions over multi-million row DMO scopes, calculating values like lifetime value or engagement scores outside your runtime limits.'
  },
  {
    id: 'dc-26',
    text: 'When configuring Data Cloud ingestion pipelines, what parameter must be mapped on every incoming data stream record to support temporal calculations and streaming window analytics?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Organization-Wide Default baseline flag',
      'Event Time Field (active date-time timestamp attribute)',
      'Formula validation string rule parameter',
      'Big Object lookup reference index array'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'An Event Time field is an essential requirement for event data streams. It allows Data Cloud to accurately track event sequence, manage temporal metrics, and execute timeline streaming insights.'
  },
  {
    id: 'dc-27',
    text: 'What represents a critical structural benefit of partitioning an enterprise data model profile across distinct Data Spaces within a single Salesforce Data Cloud instance?',
    topic: 'Salesforce Data Cloud',
    options: [
      'It increases synchronous CPU processing timeframes by 20 seconds globally',
      'It provides secure data segregation, partitioning data streams, models, segments, and activations to support different global brands or business units under one roof',
      'It removes code coverage calculation checks during package deployments',
      'It bypasses validation rule logic restrictions across connected core CRM systems'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Data Spaces isolate data profiles. This allows a global enterprise to partition its data lakehouse assets into distinct secure zones (e.g., by brand or region) under a single tenant.'
  },
  {
    id: 'dc-28',
    text: 'A business requires an integration that reads asset inventory tables directly out of a Google BigQuery cluster into Data Cloud. The operation must not duplicate files or consume cloud storage allocations. What capability should be deployed?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Loader batch append operations parsing CSV fields',
      'Zero-Copy Data Federation (Data Shares / Federated Data Queries)',
      'Standard Inbound Change Sets migration bundles',
      'Workflow Outbound Messaging routing XML script patterns'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Zero-Copy federation securely reads external storage files in place. Data Cloud queries the remote data cloud warehouse directly on demand, removing data duplication overhead.'
  },
  {
    id: 'dc-29',
    text: 'Which declarative interface element allows a marketer to visually isolate a target group of unified individuals who have both clicked an online promotion and live within specific postal codes?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Data Cloud Segmentation Canvas',
      'Schema Builder connection tool',
      'Calculated Insights SQL layout terminal',
      'App Manager menu configuration profile'
    ],
    correctAnswer: 0,
    difficulty: 'moderate',
    explanation: 'The Segmentation Canvas provides an intuitive point-and-click layout where users can combine behavioral event filters and demographic DMO characteristics to create targeted sub-audiences.'
  },
  {
    id: 'dc-30',
    text: 'An architecture team wants to extract a finalized set of harmonized Data Model Objects and their associated data stream mapping settings from a staging sandbox into a production environment. What framework pattern handles this task?',
    topic: 'Salesforce Data Cloud',
    options: [
      'Run Data Import Wizard tasks sequentially using multiple profile accounts',
      'Utilize Data Cloud Packaging features to capture configurations as deployable metadata packages compatible with the Salesforce Metadata API',
      'Hardcode target text attributes into an internal utility class array',
      'Deploy custom lightning web component modules to route fields manually'
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation: 'Data Cloud features native packaging support, allowing administrators to bundle custom mappings, streams, and data model extensions into standard metadata containers for version control and deployment.'
  },
  {
    id: 'exp-1',
    text: 'What is the primary architectural purpose of a Custom URL Provider when configuring an Experience Cloud site infrastructure?',
    topic: 'Experience Cloud Basics',
    options: [
      'To increase the asset rendering performance profiles of local browser setups by 50%',
      'To associate a branded, company-owned domain name with an Experience Cloud site while managing path routing securely',
      'To write automated Apex test classes for standard deployment metadata packages',
      'To replace traditional multi-factor authentication protocols completely'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Custom URL configuration links vanity or company-owned domain domains (e.g., support.company.com) to Salesforce Experience Cloud sites, handling the secure routing of paths without displaying standard default force.com strings.'
  },
  {
    id: 'exp-2',
    text: 'Which standard Experience Cloud tool provides point-and-click layout editing, branding, page creation, and individual component placement capabilities for modern LWR sites?',
    topic: 'Creating a Customer Community Site',
    options: [
      'Salesforce App Manager Console',
      'Experience Builder',
      'Salesforce DevOps Center Dashboard',
      'Data Import Wizard Inspector'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Experience Builder is the central declarative workspace used to customize site pages, structure navigation choices, update themes, adjust styles, and drop visual components onto the page grid canvas.'
  },
  {
    id: 'exp-3',
    text: 'What is the function of an "Audience" definition when managing page components or navigation menus inside Experience Builder?',
    topic: 'Creating a Customer Community Site',
    options: [
      'To calculate average transaction processing speeds across active digital sites',
      'To dynamically control the visibility of pages or individual components based on criteria like user profile, location, record fields, or permissions',
      'To act as an asynchronous background batch query handler pattern',
      'To group multiple external JSON payloads into compressed storage archives'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Audiences drive personalization. Administrators can configure targeting criteria (such as account type or location) to tailor layouts, hiding or displaying components dynamically according to who is logged into the community.'
  },
  {
    id: 'exp-4',
    text: 'What is a core architectural difference between the Lightning Web Runtime (LWR) template framework and legacy Aura-based templates in Experience Cloud?',
    topic: 'Creating a Build Your Own LWR',
    options: [
      'LWR templates require standard change sets to process data fields directly',
      'LWR is built for extreme performance, loading fewer core JavaScript resources and utilizing strict web standards to deliver faster page load speeds',
      'LWR templates can only connect to external data sources via Vlocity integrations',
      'LWR templates are restricted to running inside standard mobile layouts only'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'LWR (Lightning Web Runtime) is Salesforce\'s high-performance framework. It strips away legacy Aura container overhead, loading fast and complying with native web components standards to improve page indexing and responsiveness.'
  },
  {
    id: 'exp-5',
    text: 'Which Experience Cloud feature allows you to organize, categorize, and declare structured editorial articles or files, making them easily searchable and viewable by category groupings on a community site?',
    topic: 'Creating a Customer Community Site',
    options: [
      'Case Assignment Rule Entries',
      'Digital Experiences CMS (Content Management System) combined with Content Collections',
      'Custom Metadata Type matrices',
      'Validation Rules checking profile strings'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce CMS lets you draft, organize, and version digital assets (like blogs or banners), grouping them into Collections that can be surfaced declaratively on specific community site slots.'
  },
  {
    id: 'exp-6',
    text: 'What represents a primary security enforcement difference between an internal standard Salesforce user Profile and a Customer Community Plus user Profile?',
    topic: 'Security and Authentication',
    options: [
      'Customer Community Plus profiles are blocked from executing basic SOQL lookup queries',
      'Customer Community Plus profiles leverage external user licenses and specialized sharing sets or sharing rules to access records without exposing corporate employee roles',
      'Customer Community Plus profiles require separate data cloud spaces to save inputs',
      'Customer Community Plus profiles are restricted to viewing only standard text area fields'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Customer Community Plus licenses allow external contacts to act as authenticated site users. They utilize an external-facing security layer that handles record visibility via Sharing Sets or standard sharing rules without muddying internal hierarchies.'
  },
  {
    id: 'exp-7',
    text: 'What occurs when an administrator activates the "Self-Registration" feature under the Login & Registration settings panel of an Experience Cloud site?',
    topic: 'Security and Authentication',
    options: [
      'The system immediately suspends administrative profiles to prevent unauthorized logins',
      'Visitors can fill out an on-screen form to automatically create a baseline Contact and User record in Salesforce, granting instant authenticated access to the community',
      'The platform converts lookup values into master-detail fields synchronously',
      'The validation rules run an automated background data quality scan'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Self-Registration provides a guided sign-up interface. When a visitor submits their details, a handler script initializes corresponding Contact and User records matching a assigned community profile.'
  },
  {
    id: 'exp-8',
    text: 'Which standard Experience Cloud license configuration should be selected to allow corporate partners to securely manage business pipelines, update Opportunity records, and register sales Leads?',
    topic: 'Creating a Partner Community Site',
    options: [
      'Customer Community License',
      'Partner Community License',
      'External Apps License',
      'High Assurance User License'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Partner Community licenses grant advanced external CRM visibility, making standard revenue sObjects (like Leads, Opportunities, and Deals) accessible to distributors, brokers, or partners.'
  },
  {
    id: 'exp-9',
    text: 'What capability does a "Sharing Set" offer an administrator configuring visibility for baseline Customer Community license users?',
    topic: 'Security and Authentication',
    options: [
      'An option to compress data volumes prior to metadata deployments',
      'A mechanism to grant record access by matching a field on the user\'s Contact or Account record to a field on the target record (e.g., matching AccountId)',
      'A layout utility designed to sketch page layouts visually',
      'A tool to schedule batch trigger handlers to run every Sunday afternoon'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'High-volume Customer Community users do not utilize standard sharing rules or the role hierarchy. Instead, Sharing Sets map access natively by validating account or contact ID intersections across records.'
  },
  {
    id: 'exp-10',
    text: 'What is the purpose of configuring "Reputation Levels" within a public-facing Experience Cloud community forum?',
    topic: 'Creating a Customer Community Site',
    options: [
      'To manage password expiration rules applied to profile definitions',
      'To drive customer engagement and track user participation by awarding points and level badges automatically when users post comments or answer questions',
      'To track the total API traffic limits recorded on server instances',
      'To route high-priority customer cases to executive helpdesk queues'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Reputation tracking drives community gamification. Points accumulate based on user activity (like writing replies or receiving likes), translating to visible rank levels that build community trust.'
  },
  {
    id: 'exp-11',
    text: 'Which declarative capability must be used to establish structural multi-language options on an Experience Cloud site so visitors can toggle the interface layout between English and Spanish?',
    topic: 'Experience Cloud Basics',
    options: [
      'Apex Language Trigger Handler mapping',
      'Experience Builder Language Settings panel combined with translated text variables',
      'Validation Rules tracking local IP paths',
      'Data Cloud Harmonization schemas'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Experience Builder features native translation support. Adding target languages lets creators switch builder views to input alternative text strings or export properties for localization packages.'
  },
  {
    id: 'exp-12',
    text: 'What does the "Publish" action button accomplish inside the Experience Builder workspace canvas?',
    topic: 'Experience Cloud Basics',
    options: [
      'It backs up the active sandbox metadata to a source control repository branch',
      'It takes all staged design updates, theme variations, and component modifications and pushes them live to the public-facing production site server',
      'It calculates dynamic code coverage goals for deployment packages',
      'It converts standard picklist field structures into global formula metrics'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Edits in Experience Builder stay in a safe preview sandbox state until you click Publish, which compiles and deploys the adjustments live to active visitors.'
  },
  {
    id: 'exp-13',
    text: 'Universal Containers wants to embed a real-time tracking dashboard containing custom layout tables and complex UI animation frameworks inside their new LWR partner community site. What component path matches this request?',
    topic: 'Creating a Build Your Own LWR',
    options: [
      'Write a series of standard cross-object validation rules matching text lines',
      'Develop a custom Lightning Web Component (LWC) that complies with LWR architecture guidelines and drag it onto the page layout slot inside Experience Builder',
      'Deploy an asynchronous batch job to export tracking sheets into static tables',
      'Change the community security parameters from High Assurance to Private status'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'LWR sites accept custom Lightning Web Components seamlessly. This allows developers to build tailored UI experiences, responsive charts, or custom logic frames, then expose them to Experience Builder.'
  },
  {
    id: 'exp-14',
    text: 'A business observes that when unauthenticated visitors land on their public knowledge base page, standard article detail components show a "Record Not Found" error statement. How should the administrator correct this access block?',
    topic: 'Security and Authentication',
    options: [
      'Set the core CRM account organization-wide sharing defaults to Public Read/Write status',
      'Verify that the Guest User Profile associated with the Experience Cloud site has appropriate Object Read permissions and that the corresponding data files are marked for public visibility',
      'Build a validation rule to block public traffic strings from executing search paths',
      'Convert all related article metrics into summary field attributes'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Unauthenticated site visitors view pages via a hidden Guest User Profile. If objects are missing permissions or structural sharing criteria on that profile, public components will render blank errors.'
  },
  {
    id: 'exp-15',
    text: 'A developer needs to build an interactive order form page for an Experience Cloud portal. The form should safely handle complex multi-step data entry loops and pass confirmation details to downstream tables declartively. What tool should be integrated into the page canvas?',
    topic: 'Creating a Customer Community Site',
    options: [
      'A formula field processing text codes',
      'An active Screen Flow dropped directly onto the Experience Builder page canvas via the standard Flow component',
      'A case assignment routing rule mapping percentage metrics',
      'A lightning message service channel running background script arrays'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Screen Flows embed cleanly inside Experience Cloud pages. This provides a declarative way to collect user data, execute conditional branching screens, and save records without writing code.'
  },
  {
    id: 'exp-16',
    text: 'During testing of a new portal deployment, a user captures an administrative alert stating that navigation links are unresponsive. Upon inspection, the link maps to a newly created page that hasn\'t been deployed. How should the administrator fix this link failure?',
    topic: 'Experience Cloud Basics',
    options: [
      'Deactivate the site profiles before performing deployment changes',
      'Ensure the newly created target page visibility settings are configured correctly and click "Publish" inside Experience Builder to push page parameters live',
      'Check the corporate browser cookie setting adjustments inside internal consoles',
      'Inspect the network trusted IP ranges list patterns'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'New community pages or structural layout switches remain completely hidden from active users until a formal Publish step updates the live site directory framework.'
  },
  {
    id: 'exp-17',
    text: 'A company wants to introduce a security policy where all community portal members must complete a reCAPTCHA step during the self-registration process to block bot traffic. Where should this configuration be managed?',
    topic: 'Security and Authentication',
    options: [
      'Inside the data loader upsert parameter checklist',
      'Under the Security settings within the Experience Cloud Administration workspace, enabling reCAPTCHA options for registration routes',
      'Via a validation rule checking global search patterns',
      'Within the user session security profiles setup'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce Experience Cloud provides built-in reCAPTCHA integrations under the Administration workspace settings, securing registration and login paths against automated abuse.'
  },
  {
    id: 'exp-18',
    text: 'A financial portal requires different navigation menu blocks to display depending on the user\'s Tier status (Gold partners vs Silver partners). Which tool path executes this structural adjustment cleanly?',
    topic: 'Creating a Customer Community Site',
    options: [
      'Build a background script to sweep corporate database records hourly',
      'Create personalized Navigation Menus inside the Experience Builder, and use Audience Targeting rules to map them to corresponding partner tiers',
      'Set the custom object OWD parameter settings to Private status',
      'Deploy a validation rule that throws an explicit save error'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Experience Builder allows you to construct multiple navigation menu records. You can then apply Audience criteria to dynamically swap these menus based on user variables like tier or role.'
  },
  {
    id: 'exp-19',
    text: 'You have written a custom CSS theme modification that displays perfectly inside the preview window of Experience Builder, but looks completely broken when viewed by an active site visitor. How should the developer optimize the layout deployment?',
    topic: 'Creating a Build Your Own LWR',
    options: [
      'Universally restrict styling files to small monochrome images',
      'Verify that Lightning Web Security (LWS) or Content Security Policy (CSP) configurations aren\'t blocking external style sheet URLs, and confirm the site has been successfully published',
      'Convert the target elements into roll-up fields inside standard core styles',
      'Disable the validation rules across sandbox test spaces'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Strict Content Security Policy (CSP) security rules block scripts or CSS files coming from unauthorized outside domains. Whitelisting the secure domain targets in the site settings resolves rendering issues.'
  },
  {
    id: 'exp-20',
    text: 'An operations team wants to monitor community traffic engagement patterns, such as identifying the most viewed articles or active discussion forums. Which tool displays these specific analytics dashboards?',
    topic: 'Creating a Customer Community Site',
    options: [
      'Data Loader logs extracting CSV file tables',
      'The Experience Cloud Dashboards package installed via AppExchange into the Experience Management / Administration workspace',
      'A series of workflow outbound messaging engines logging text strings',
      'An apex unit test execution summary chart'
    ],
    correctAnswer: 1,
    difficulty: 'moderate',
    explanation: 'Salesforce provides pre-built Experience Cloud Dashboards packages. Installing them lets administrators monitor page engagement, track active members, and inspect portal health directly from the community workspace.'
  }
]

export function getQuestions(): ExamQuestion[] {
  return QUESTIONS
}

export function getQuestionsByTopic(topic: string): ExamQuestion[] {
  return QUESTIONS.filter(q => q.topic === topic)
}

export function getRandomQuestions(count: number): ExamQuestion[] {
  // Use crypto-based randomization for better shuffling
  const allQuestions = [...QUESTIONS]

  // Fisher-Yates shuffle algorithm for truly random distribution
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]]
  }

  return allQuestions.slice(0, Math.min(count, allQuestions.length))
}

export function getBalancedRandomQuestions(count: number): ExamQuestion[] {
  // Get questions distributed across all topics for balanced exams
  const topics = [
    'Salesforce Fundamentals', 'Salesforce Automation', 'Apex Development',
    'Lightning Web Components', 'Data Modeling', 'Process Automation',
    'Security and Access', 'User Interface', 'Reports and Dashboards',
    'Integration', 'Apex Testing', 'Org Development'
  ]

  const questionsPerTopic = Math.floor(count / topics.length)
  const remainder = count % topics.length
  const selectedQuestions: ExamQuestion[] = []

  topics.forEach((topic, index) => {
    const topicQuestions = QUESTIONS.filter(q => q.topic === topic)
    const shuffled = [...topicQuestions]

    // Fisher-Yates shuffle for this topic
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // Take questions for this topic (extra question for first few topics if remainder exists)
    const take = questionsPerTopic + (index < remainder ? 1 : 0)
    selectedQuestions.push(...shuffled.slice(0, Math.min(take, shuffled.length)))
  })

  // Final shuffle of the selected questions
  for (let i = selectedQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selectedQuestions[i], selectedQuestions[j]] = [selectedQuestions[j], selectedQuestions[i]]
  }

  return selectedQuestions.slice(0, count)
}
