const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema for code snippets or commands
const codeBlockSchema = new Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String },
  // language: { type: String, required: true },
  // createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
},{timestamps: true});

// Create a model based on the schema
const CodeBlock = mongoose.model('CodeBlock', codeBlockSchema);

module.exports = CodeBlock;
