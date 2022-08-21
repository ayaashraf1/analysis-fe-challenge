import React from 'react';
import './ToggleComponent.css';

interface ToggleInterface{
    text:string,
    toggleChecked:boolean,
    handleChangeMethod:(event: React.ChangeEvent<HTMLInputElement>| null) => void
}

export const ToggleComponent = (props:ToggleInterface) => {
    return (
        <div className="toggleContainer">
        {props.text}
         <label className="switch">
               <input type="checkbox" checked={props.toggleChecked} onChange={props.handleChangeMethod} />
              <span className="slider round"></span>
           </label>
        </div>
    )
}

/**
 * unit test
 *  * handle details page by clicking in any point of chart and load the same data when back
 * build script run without anyError =>done
 * all folder .ts
 * lint run without error ==>Done
 */
/**
 * A loading screen is expected while fetching the data.json from the server. You can use the raw file directly from Github or serve it from a local server.
The 3 drop-down lists at the top should filter the data. Select School should have the option to Show all.
A chart renders the data of the selected schools similar to the image above.
On the right of the screen, the total number of lessons is displayed for the selected Camp, School, and Country, followed by a list of the schools with how many lessons each offers.
The school's list from point 4 should include toggles to show or hide the line chart of a certain school.
Upon clicking on a point in the chart from point 3, the app should navigate to another page where all the details of that item are shown. No UX is provided, but use a simple layout that shows: like country, camp, school, month, and a number of lessons.
After coming back from the details page implemented in point 6, the last filtering state should be preserved.
 */
/*
Use React, TypeScript, and Chart.js (Next.js if needed)
Favor the use of React Functional Components over Class-based components.
Set up a project structure that promotes scalability.
Source code is kept separate from compiled code.
All tests should be contained in their own folder.
Separate modules are created for any processing.
Set up an npm project
Package.json should contain both devDependencies, and dependencies.
Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
Build script should run without error.
 */
/**
 * Write unit tests and make sure that test script runs and all tests created pass, every component must have one test associated with it to pass.
Utilize TypeScript to avoid errors and improve maintainability
All code in the SRC folder should use the .ts filetype.
Functions should include typed parameters and return types and not use the any type.
Build script should successfully compile TS to JS.
Prettier and Lint scripts should run without producing any error messages.
 */
/*https://github.com/abdelrhman-arnos/analysis-fe-challenge/pull/4/commits/be4679c306b98e29585849363c51c9c9a1de367d#diff-7707eb3ae8116d290455cb48d8d29891f5c583c213daec73de6e7e30d3b064d1*/
/*https://github.com/abdelrhman-arnos/analysis-fe-challenge/blob/master/README.md*/