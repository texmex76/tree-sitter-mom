module.exports = grammar({
  name: 'mom',

  rules: {
    // The main entry point for the grammar
    source_file: $ => repeat($.comment),

    // Define what a comment looks like
    comment: $ => choice(
      seq('\.\\"', /[^\n]*/), // Matches comments that start with ."
      seq('\\#', /[^\n]*/)  // Matches comments that start with \#
    ),
  }
});
