import React from 'react';
import './skills.css';
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div >
      <div id='Skills'  className="container">
        {/* Main Heading */}
        <div className="main-title">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}

          >
            <span>My </span>Skills
          </motion.h1>
          <p>My skills are constantly evolving, as I believe that the joy of this profession comes from the fact that you learn something new every day. This is especially true when you're engaged, curious, and passionate about the work you do. Whether it's developing innovative web solutions or solving complex software engineering challenges, I'm committed to continuous learning and improvement in every aspect of my work.</p>
        </div>

        <div className="row">
          {/* Programming Skills */}
          <section className="col">
            <div className="sub-title">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}

              >
                Front-End
              </motion.h2>
            </div>
            <div className="skills-container">
              <div className="skill">
                <div className="subject">HTML5 && CSS3</div>
                <div className="progress-bar" value="94%">
                  <div className="progress-line" style={{ maxWidth: '94%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">Next.js</div>
                <div className="progress-bar" value="83%">
                  <div className="progress-line" style={{ maxWidth: '83%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">ReactJS</div>
                <div className="progress-bar" value="88%">
                  <div className="progress-line" style={{ maxWidth: '88%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">Angular</div>
                <div className="progress-bar" value="68%">
                  <div className="progress-line" style={{ maxWidth: '68%' }} />
                </div>
              </div>
            </div>
          </section>

          {/* Designing Skills */}
          <section className="col">
            <div className="sub-title">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}

              >
                Back-End
              </motion.h2>
            </div>
            <div className="skills-container">
              <div className="skill">
                <div className="subject">Express.js</div>
                <div className="progress-bar" value="82%">
                  <div className="progress-line" style={{ maxWidth: '82%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">Node.js</div>
                <div className="progress-bar" value="74%">
                  <div className="progress-line" style={{ maxWidth: '74%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">Laravel (PHP)</div>
                <div className="progress-bar" value="66%">
                  <div className="progress-line" style={{ maxWidth: '66%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">Python</div>
                <div className="progress-bar" value="60%">
                  <div className="progress-line" style={{ maxWidth: '60%' }} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Creative Skills & Creative Skills 2 */}
        <div className="row">
          {/* Creative Skills */}
          <section className="col">
            <div className="sub-title">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}

              >
               Database 
              </motion.h2>
            </div>
            <div className="skills-container">
              <div className="skill">
                <div className="subject">MongoDB </div>
                <div className="progress-bar" value="85%">
                  <div className="progress-line" style={{ maxWidth: '85%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">MySQL/PostgreSQL</div>
                <div className="progress-bar" value="60%">
                  <div className="progress-line" style={{ maxWidth: '60%' }} />
                </div>
              </div>
            </div>
          </section>

          {/* Creative Skills 2 */}
          <section className="col">
            <div className="sub-title">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}

              >
                Version Control
              </motion.h2>
            </div>
            <div className="skills-container">
              <div className="skill">
                <div className="subject">Git</div>
                <div className="progress-bar" value="85%">
                  <div className="progress-line" style={{ maxWidth: '85%' }} />
                </div>
              </div>
              <div className="skill">
                <div className="subject">GitHub</div>
                <div className="progress-bar" value="85%">
                  <div className="progress-line" style={{ maxWidth: '85%' }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
