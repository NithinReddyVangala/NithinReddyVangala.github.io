// learn d3.js

// selection & Manipulation in d3.js

//select attribute and manipulating it 
d3.select('h1').style('color','blue')
.attr('id','heading')
.text('D3.js').style('color', 'red')

//appending a tag into the another tag, giving class name to dom element, adding content to it and manipulating its styles 
d3.select('body')
    .append('div').attr('class','div_D3').text('Selection and Manpulation in D3.js').style('font-weight', '500')

d3.select('.div_D3').append('p').attr('id','p_d3_1').text('Selection')
d3.select('.div_D3').append('p').attr('id','p_d3_2').text('Manipulation')
d3.select('.div_D3').append('p').attr('id','p_d3_3').text('End of Day1')

// select all dom elements with similar criteria to 'p' using selectALL
d3.selectAll('p').style('color','#9c4cb4')
// selecting all the dom elements with multiple criterias
d3.selectAll('#p_d3_2, #p_d3_1').style('font-weight','700')

