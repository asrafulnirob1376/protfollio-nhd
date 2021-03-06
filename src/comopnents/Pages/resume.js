import React from 'react'
import Project from './project';
import Skill from './skill';
import Education from './education'
import ResumeCover from './resume-home';
function resume() {
    return (
        <div style={{backgroundColor: "linear-gradient(90deg, rgba(219,244,251,1) 0%, rgba(238,255,255,1) 50%, rgba(227,253,255,1) 100%)"}}>
            <ResumeCover/>
            <Skill/>
            <Project/>
            <Education/>
        </div>
    )
}

export default resume
