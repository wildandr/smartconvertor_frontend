"use client"
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import './page.css';

const Help = () => {
  return (
    <div className="help-container">
      <Head>
        <title>Help - StudyForge</title>
      </Head>
      <div className="help-help">
        <div className="help-rectangle15">
        </div>
        <div className="help-frame49">
          <span className="help-text">
            HELP PAGE
          </span>
          <div className="help-frame48">
            <span className="help-text2">
              If you encounter any problems when using our website,
              <br />
              please contact us at <a href="mailto:studyforgecare@gmail.com" className="help-email">studyforgecare@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
