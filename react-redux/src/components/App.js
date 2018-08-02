import React, { Component } from 'react'

export default ({ has_loaded, instant_messaging, font_size }) => (
  <div>
    {has_loaded && (
      <div>
        {instant_messaging ? (
          <div>
            You have the instant messaging feature
          </div>
        ) : (
          <div v-else>
            You do not have the feature
          </div>
        )}
        <span style={{ fontSize: font_size }}>
            Font size controlled by BulletTrain
        </span>
      </div>
    )}
  </div>
)