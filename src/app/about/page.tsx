"use client"
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import './page.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Head>
        <title>About Us - StudyForge</title>
      </Head>
      <div className="about-us-about-us">
        <div className="about-us-rectangle15">
        </div>
        <div className="about-us-frame47">
          <span className="about-us-text">
            <span>About Us</span>
          </span>
          <div className="about-us-frame46">
            <div className="about-us-frame8">
              <div className="about-us-frame5">
                <span className="about-us-text02">
                  <span>WHAT IS OUR SERVICE?</span>
                </span>
                <span className="about-us-text04">
                  <span>
                    StudyForge is a website that can facilitate users' learning by processing their study material, such as a summary or PowerPoint that they made. It will automatically transfer it into fill-in-the-blank questions to provide an in-depth understanding of the subject.
                  </span>
                </span>
              </div>
              <div className="about-us-frame6">
                <span className="about-us-text06">
                  <span>MAIN FEATURE</span>
                </span>
                <span className="about-us-text08">
                  <span>
                    Able to automatically convert study materials into fill-in-the blanks questions.
                  </span>
                </span>
              </div>
              <div className="about-us-frame7">
                <span className="about-us-text10">
                  <span>BENEFIT</span>
                </span>
                <span className="about-us-text12">
                  <span> * Active Learning</span>
                  <br></br>
                  <span> * Better Comprehension</span>
                  <br></br>
                  <span> * Time Efficiency</span>
                  <br></br>
                  <span> * Reinforcement of Key Concepts</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
