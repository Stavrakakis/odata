test( "getPropertyNames returns correct results", function() {
    var dataset = [
        {FirstName: "John", Surname: "Johnson", __metadata: "dontwantthis", Profession: "Butcher"},
        {FirstName: "Alice", Surname: "Samuels", __metadata: "dontwantthis", Profession: "Baker"}
    ];
    
    var expected = ["FirstName", "Surname", "Profession"];
    
    var actual = oDataExplorer.getPropertyNames(dataset);
    
    deepEqual(actual, expected);
});