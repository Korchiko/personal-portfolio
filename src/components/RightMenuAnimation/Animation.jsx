import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import React from "react";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export const AnimationHome = () => {
  return (
    <div>
      <lord-icon
        trigger="hover"
        src="/assets/menu-animation/home.json"
        style={{ width: "65px", height: "65px" }}
      ></lord-icon>
    </div>
  );
};

export const AnimationProfile = () => {
  return (
    <div>
      <lord-icon
        trigger="hover"
        src="/assets/menu-animation/profile.json"
        style={{ width: "65px", height: "65px" }}
      ></lord-icon>
    </div>
  );
};

export const AnimationProject = () => {
  return (
    <div>
      <lord-icon
        trigger="hover"
        src="/assets/menu-animation/project.json"
        style={{ width: "65px", height: "65px" }}
      ></lord-icon>
    </div>
  );
};

export const AnimationSkills = () => {
  return (
    <div>
      <lord-icon
        trigger="hover"
        src="/assets/menu-animation/skills.json"
        style={{ width: "65px", height: "65px" }}
      ></lord-icon>
    </div>
  );
};

export const AnimationContact = () => {
  return (
    <div>
      <lord-icon
        trigger="hover"
        src="/assets/menu-animation/contact.json"
        style={{ width: "65px", height: "65px" }}
      ></lord-icon>
    </div>
  );
};
