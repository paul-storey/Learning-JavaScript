var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// console.log("yes");

var min = function(a,b) 
{
    return a < b ? a : b;
}

// console.log(min(2,3));
// console.log(min(56,54));

var isEven = function(a)
{
    if ( a == 1 )
    {
        return false;
    }
    else if ( a == 2 )
    {
        return true;
    }
    else
    {
        return isEven(a - 2);
    }
}

// console.log(isEven(53));

// for ( var s = "#"; s.length < 10; s += "#" )
//  console.log(s);

var range = function(first, last)
{
    var array = [];
    for ( ; first <= last; first++ )
        array.push(first);
    return array;
}

var sum = function(array)
{
	var result = 0;
	for ( var i = 0; i < array.length; ++i )
		result += array[i];
	return result;
}

var reverse = function(array)
{
    var reversed = [];
    while ( array.length )
        reversed.push(array.pop());
    return reversed;
}

var reverseInPlace = function(array)
{
    var start = 0;
    var end = array.length - 1;
    while ( start < end )
    {
        var temp = array[end];
        array[end] = array[start];
        array[start] = temp;
        start++;
        end--;
    }
    return array;
}

var arrayToList = function(array)
{
    if (array.length)
    {
        var value = array.shift();
        var rest = arrayToList(array);
        return { value: value, rest: rest };
    }
    else
    {
        return null;
    }
}

var forEach = function(list, func)
{
    if (list)
    {
        func(list.value);
        forEach(list.rest, func);
    }        
}

var print = function(item)
{
    console.log(item);
}

var listToArray = function(list)
{
    var array = [];
    var arrayBuilder = function(item) { array.push(item); };
    forEach(list, arrayBuilder);
    return array;
}

var prepend = function(value, list)
{
    return { value: value, rest: list };
}

var nth = function(n, list)
{
    if (! list)
    {
        return undefined;
    }
    else if (n == 0)
    {
        return list.value;
    }
    else
    {
        n--;
        return nth(n, list.rest);
    }
}

var list = arrayToList(range(1,10));
list = prepend(99, list);

var arrayOfArrays = [
[1,2],
[3,4],
[5,6,7,8]];

//console.log(arrayOfArrays);

// console.log(arrayOfArrays.reduce(function(ar, cur) { return ar.concat(cur);}));
 
var ANCESTRY_FILE = JSON.stringify([
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
])

// This makes sure the data is exported in node.js —
// `require("./path/to/ancestry.js")` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
 
var ancestry = JSON.parse(ANCESTRY_FILE);
// console.log(ancestry.length);
var oldestAncestor = function(min, cur)
{
    if ( cur.born < min.born )
    {
        return cur;
    }
    else
    {
        return min;
    }
};

// console.log(ancestry.reduce(oldestAncestor));

var byName = {};
ancestry.forEach(function(person)
{
    byName[person.name] = person;
});

// console.log(byName["Philibert Haverbeke"]);

var hasMotherInDataset = function(person)
{
    return person.mother in byName;
};

// console.log(ancestry.filter(hasMotherInDataset).length);

var motherAgeAtBirth = function(person)
{
    return person.born - byName[person.mother].born;
};

var sum = function(val,cur) { return val + cur; };

function average(array)
{
    return array.reduce(sum) / array.length;
}

// console.log(average(ancestry.filter(hasMotherInDataset).map(motherAgeAtBirth)   ));

function rowHeights(rows) {
  return rows.map(function(row) {            // For each row
    return row.reduce(function(max, cell) {  // For each cell in that row
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

function colWidths(rows) { // Returns an array of integers
  return rows[0].map(function(_, i) {
    return rows.reduce(function(max, row) { // For all the rows, return the largest min width for a given column
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}

function runExperiment(rows) {
  return rows[0].map(function(_, i) { return i; }); 
}

var ar = range(1,10);
console.log(ar);
console.log(ar.map(function(_, i) { return {"val":_, "index":i}; }));
 
function drawTable(rows) { // rows is an array of cell arrays (i.e. arrays of cells)
  var heights = rowHeights(rows); // heights is an array with an element per column
  var widths = colWidths(rows);   // same goes for widths
  
  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join("|");
  }

  function drawRow(row, rowNum) { // row is an array of cells
    var blocks = row.map(function(cell, colNum) { // Draw each cell. Draw returns an array of lines of text.
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    // blocks is an array of string arrays.
    // Each entry in blocks is the textual representation of a cell.
    // That representation may be multiline.
    return blocks[0].map(function(_, lineNo) { // Using the (multiline) textual representation of the first cell to drive things one line at a time.
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n"); // i.e. For each array of cells
}

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result; // an array of lines of text
};

function UnderlinedCell(inner) {
  this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function() {
  return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
  // return this.inner.draw(width, height - 1)
   // .concat([repeat("-", width)]); // add an extra array element - a line of '-'
  var arrayOfLines = this.inner.draw(width, height - 1);
  arrayOfLines.push(repeat("*", width));
  return arrayOfLines;  
};


function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);  
};

function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) { // Map each array object to...
    return keys.map(function(name) { // ...an array of cells (one for each property) 
        return new StretchCell(new TextCell(String(row[name])), 14, 2);
    });
  });
  return [headers].concat(body); // an array of arrays of cells
}

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

console.log(drawTable(dataTable(MOUNTAINS)));

function Sequence() {
}

Sequence.prototype.next = function() {
  return null;
};

var logFive = function(sequence) {
    var n = sequence.next();
    for (var count = 0; n && count < 5; count = count + 1 ) {
        console.log(n);
        n = sequence.next();
    }
}

logFive(new Sequence());

function ArraySeq(array) {
    this.array = array;
    this.pos = 0;
}

ArraySeq.prototype.next = function() {
    var n = null;
    if (this.pos < this.array.length) {
        n = this.array[this.pos];
        this.pos = this.pos + 1;
    }
    return n;
}

logFive(new ArraySeq(range(10,20)));

function TextCellBuilder() {
}

TextCellBuilder.prototype.build = function(value) {
  var cell = document.createElement("td");
  cell.appendChild(document.createTextNode(value));
  return cell;
};

function RightAlignedCellBuilder(inner) {
  this.inner = inner;
}

RightAlignedCellBuilder.prototype.build = function(value) {
  var cell = this.inner.build(value);
  cell.style.textAlign = "right";
  return cell;  
};

var insertTable = function(arrayOfObjects, insertBeforeThisElement) {
    var cellBuilder = function() { 
      var numberCellBuilder = new RightAlignedCellBuilder(new TextCellBuilder());
      var defaultCellBuilder = new TextCellBuilder();
      return function(value) {
          if (typeof value == "number") {
              return numberCellBuilder.build(value);
          }
          else {
              return defaultCellBuilder.build(value);
          }
      };
    }();
    var headerCells = Object.keys(arrayOfObjects[0]).map(cellBuilder);
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    table.appendChild(headerRow);
    headerCells.forEach(function(cell) { headerRow.appendChild(cell); });
    var dataRowBuilder = function(obj) {
        var row = document.createElement("tr");
        var cells = Object.keys(obj).map( function(key) { return cellBuilder(obj[key]); });
        cells.forEach(function (cell) { row.appendChild(cell); });
        return row;
    };
    var dataRows = arrayOfObjects.map(dataRowBuilder);
    dataRows.forEach(function(row) { table.appendChild(row); });
    document.body.insertBefore(table, insertBeforeThisElement);
}

var arrayOfObjects = [ {propOne: "One", propTwo: "Two"}, {propOne: "A", propTwo: "B"} ];
insertTable(MOUNTAINS, document.body.getElementsByTagName("p")[0]);
