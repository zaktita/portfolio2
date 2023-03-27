import React from 'react'
import './miniProject.css'
import icon_piano from '../../assetes/piano.png'
import icon_book from '../../assetes/book.png'
import icon_bulb from '../../assetes/light_bulb.png'
import icon_clock from '../../assetes/clock.png'
function MiniProject() {
  return (
    <div className='MiniProject wrapper container'>
      <div className="wrapper_title">
        <h2>{'<Mini_project/>'}</h2>
      </div>
      <div className="mini_projects">
        <div className="project_row">
          <div className="project">
            <img src={icon_piano} alt="" />
            <div className="project_text">
              <h4>Piano App</h4>
              <p>A piano web app built with JavaScript allows users to play and interact with a virtual piano through their web browser.</p>
              <a href="https://zaktita.github.io/Piano/">view project</a>
            </div>
          </div>
          <div className="project">
            <img src={icon_bulb} alt="" />
            <div className="project_text">
              <h4>Mini Quizz App</h4>
              <p>A Quizz app built with React for creating and taking quizzes, featuring interactive questions and score tracking.</p>
              <a href="https://zaktita.github.io/quizz/">view project</a>
            </div>
          </div>
          <div className="project">
            <img src={icon_book} alt="" />
            <div className="project_text">
              <h4>Book Library</h4>
              <p>A JavaScript-based book library utilizing fetch for retrieving and displaying book information from a database.</p>
              <a href="https://zaktita.github.io/Book-library-API-fetch/">view project</a>
            </div>
          </div>
          <div className="project">
            <img src={icon_clock} alt="" />
            <div className="project_text">
              <h4>Stop watch</h4>
              <p>A JavaScript-based stopwatch with start, stop, reset, and lap functionality for accurate timekeeping.</p>
              <a href="https://zaktita.github.io/Stop-watch-Js/">view project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniProject
