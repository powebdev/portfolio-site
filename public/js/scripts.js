'use strict';
//build a hex grid to accomendate skills to display
	//the odd rows have one more hex than the even rows
//get document width
//|var docWidth = document width
//get number of skills
//|var numOfSkills = number of skills
//get hex dimensions
	//with basic dimension x, the dimension of a single hex is as follows:
		//height: 4x
		//width: x times 2 times the squre root of 3
		//|var baseUnit = x
		//|var hexHeight = 4 * x
		//|var hexWidth = x * 2 * Math.sqrt(3)
//calculate how many can fit in a single odd row
//|var maxHexInOddRow = Math.floor(docWidth / hexWidth)
	//calculate how many can fit in a single even row
	//|var maxHexInEvenRow = maxHexInOddRow + 1
//calculate how many rows are needed to accomedate all the skills
//|var OddRows = EvenRows =  Math.floor(numOfSkills / (maxHexInOddRow + maxHexInEvenRow))
//|var skillsLeft = numOfSkills % (maxHexInOddRow + maxHexInEvenRow)
	//if skillsLeft === 0: do nothing
	//else: oddRows++
	//if maxHexInOddRow < skillsLeft: evenRow++
//find document height
//|var docHeight = 3 * baseUnit * (oddRows + evenRows) + baseUnit
