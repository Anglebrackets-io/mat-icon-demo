module.exports = {
  name: 'mat-icon-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mat-icon-demo',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
