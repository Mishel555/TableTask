export const Types = {
  String: String,
  Number: Number,
  Date: Date,
}
export const data = [
  [
    { column: 'A', value: 'Test1' }, 
    { column: 'B', value: 222 }, 
    { column: 'C', value: new Date() },
  ],
  [
    { column: 'C', value: new Date() },
    { column: 'A', value: 'Test2' }, 
    { column: 'B', value: 333 }, 
  ],
  [
    { column: 'B', value: 444 }, 
    { column: 'A', value: 'Test3' }, 
    { column: 'C', value: new Date() },
  ],
  [
    { column: 'B', value: 555 }, 
    { column: 'C', value: new Date() },
    { column: 'A', value: 'Test4' }, 
  ]
];

export const columns = [
  { name: 'A', type: Types.String },
  { name: 'B', type: Types.Number },
  { name: 'C', type: Types.Date, format: 'YYYY/MM/DD' },
];
