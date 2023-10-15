"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarLinks } from "@/public/NavbarLinks";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import Image from "next/image";
import { Fade, LinearProgress, Typography } from "@mui/material";
const Navbar = () => {
  const [active, setactive] = useState("");

  let openSidebar = () => {
    console.log("cliocked");
    setactive("active");
  };
  let closeSidebar = (e) => {
    setactive(" ");
  };

  let progress = false;
  return (
    <>
      <Fade in={progress}>
        <LinearProgress
          value={null}
          mode="buffer"
          style={{
            position: "fixed ",
            left: "0",
            top: "0",
            width: "100vw",
            zIndex: "100000",
          }}
        />
      </Fade>

      <div className="mainNav">
        <div className="navbar">
          <img src="/wave.svg" alt="" />
          <div className="navbar_initial">
            <div className="Logo">
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h4"
                  style={{ color: "#fff", fontFamily: "Dancing Script" }}
                >
                  CharmNova
                </Typography>
              </Link>
            </div>
          </div>
          <div className="navbar_intermediate">
            <div className="navbar_links">
              <ul>
                {NavbarLinks.map((item) => {
                  return (
                    <li key={item.link}>
                      <Link href={`/collection/${item.link}`}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="navbar_end">
            <div className="navbar_authButtons">
              {/* <button className="signIn">Sign In</button> */}
            </div>
          </div>
        </div>

        <aside className={`sidebar ${active}`}>
          <div className="nav_img">
            <img src="/wave.svg" alt="" />
            <div className="navButton" onClick={openSidebar}>
              <button type="button">
                <FaBars />
              </button>
            </div>
            <div className="logo grid justify-center items-center">
              <Link href={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h5"
                  style={{ color: "#fff", fontFamily: "Dancing Script" }}
                >
                  CharmNova
                </Typography>
              </Link>
            </div>
          </div>

          <div className={`sidebar_intermediate  ${active} flex flex-col`}>
            <div className="closeButton">
              <button className="" onClick={closeSidebar}>
                <ImCross />
              </button>
            </div>
            <hr style={{ width: "100%" }} />
            <div className="sidebar_links">
              <ul>
                {NavbarLinks.map((item) => {
                  return (
                    <Link
                      href={`${item.link}`}
                      key={item.link}
                      className=""
                      style={{ textDecoration: "none" }}
                    >
                      <li>{item.name}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
