import { StaticImageData } from "next/image";
import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import php from "./php.png";
import laravel from "./Laravel.png";
import typescript from "./typescript.png";
import physics from "./physics.png";
import tailwind from "./tailwind.png";
import nextjs from "./nextjs.png";
import mysql from "./mysql.png";
import postgresql from "./postgresql.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  github,
  linkedin,
  instagram,
  html,
  css,
  js,
  php,
  laravel,
  physics,
  typescript,
  tailwind,
  nextjs,
  mysql,
  postgresql,
};

export const workData = [
  {
    title: "HMI for Gluing Automation",
    description: "Node.js & Flask | GEFKEN Cases Ltd (Netherlands)",
    bgImage: "/work-1.png",
  },
  {
    title: "HMI for Spraying",
    description: "Node.js & Flask | Brago Luchttechniek BV (Netherlands)",
    bgImage: "/work-2.png",
  },
  {
    title: "Movie Db API Integration",
    description: "React.js | Personal Project",
    bgImage: "/work-3.png",
  },
  {
    title: "Internal News Portal",
    description: "Laravel | Perta Arus Gas (Indonesia)",
    bgImage: "/work-4.png",
  },
  {
    title: "Digital Invitation Platform",
    description: "Laravel | Personal Project",
    bgImage: "/work-5.png",
  },
  {
    title: "Company Profile Website",
    description: "Laravel | IAIN Takengon",
    bgImage: "/work-6.png",
  },
  {
    title: "E-Learning Platform",
    description: "PHP | IAIN Lhokseumawe",
    bgImage: "/work-7.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web & Mobile App Development",
    description:
      "Build responsive websites and mobile apps with great performance and user experience.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Software Development",
    description:
      "Develop custom software tools, from business apps to full web systems.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "API Development & Integration",
    description:
      "Create secure APIs and integrate services like payments, storage, and auth.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Maintenance & Optimization",
    description:
      "Ensure your app stays fast, secure, and bug-free with regular support.",
    link: "",
  },
];


export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Skills",
    description: "",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "D-IV Informatics Engineering\nLhokseumawe State Polytechnic (2020–2024)\nGPA: 3.66 / 4.00",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: [
    "• HMI for Robot Arm (Node.js & Flask)",
    "• Internal News Portal (Laravel)",
    "• E-Learning Platform (PHP & MySQL)",
    "• Company Profile Site (Laravel)",
    "• Movie DB Api Integration (React)"
    ].join("\n"),
  },
];

export const skillsData: StaticImageData[] = [
  assets.html,
  assets.css,
  assets.tailwind,
  assets.js,
  assets.typescript,
  assets.php,
  assets.laravel,
  assets.physics,
  assets.nextjs,
  assets.mysql,
  assets.postgresql,
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const socialLinks = [
  { icon: assets.github, url: "https://github.com/syahsuri" },
  { icon: assets.linkedin, url: "https://www.linkedin.com/in/syahsuryalam" },
  { icon: assets.instagram, url: "https://www.instagram.com/syuri_monocrome/" },
];
