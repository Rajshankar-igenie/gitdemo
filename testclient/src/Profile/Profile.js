import React from "react";
import Header from "../Header/Header";
import Blog from "../blogger-logo-icon-png-10157.png";
import Chat from "../facebook-messenger-logo-png-44109.png";
import Vid from "../video-icon-8038.png";
import Cam from "../cam.svg";
import Audio from "../sound-png-35796.png";
import CommentIcon from "@mui/icons-material/Comment";
import "./Profile.css";
import ShareIcon from "@mui/icons-material/Share";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function Profile() {
  console.log("hi");
  return (
    <div style={{ backgroundColor: "#021935", height: "1000px" }}>
      <Header className="header" />
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div
              style={{
                marginLeft: "30%",
                marginTop: "30px",
                backgroundColor: "white",
                width: "500px",
                height: "150px",
                borderRadius: "10px",
                boxShadow: "inherit",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Cam}
                    alt="cam"
                    style={{
                      marginLeft: "20px",
                      width: "80px",
                      color: "white",
                      marginRight: "10px",
                      marginTop: "30px",
                      height: "80px",
                    }}
                  />
                  <span
                    style={{ marginLeft: "20px", marginRight: "13px" }}
                    className="caption"
                  >
                    Camera
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Vid}
                    alt="video"
                    style={{
                      color: "white",
                      height: "80px",
                      marginRight: "10px",
                      width: "80px",
                      marginTop: "30px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Videos
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Audio}
                    alt="video"
                    style={{
                      color: "white",
                      height: "70px",
                      width: "70px",
                      marginRight: "",
                      marginTop: "30px",
                    }}
                  />
                  <span
                    style={{ marginRight: "", marginTop: "9px" }}
                    className="caption"
                  >
                    Audio
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Blog}
                    alt="video"
                    style={{
                      color: "white",
                      height: "85px",
                      width: "100px",
                      marginRight: "10px",
                      marginTop: "30px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Blog
                  </span>
                </div>
                <div className="item" style={{ cursor: "pointer" }}>
                  <img
                    src={Chat}
                    alt="video"
                    style={{
                      color: "white",
                      height: "80px",
                      width: "90px",
                      marginRight: "10px",
                      marginTop: "30px",
                    }}
                  />
                  <span style={{ marginRight: "13px" }} className="caption">
                    Chat
                  </span>
                </div>
              </div>
            </div>

            {/* card contant */}

            <div
              style={{
                marginLeft: "18.5%",
                marginTop: "30px",
                width: "500px",
                minHeight: "150px",
                borderRadius: "10px",
                boxShadow: "inherit",
                display: "flex",
              }}
            >
              <img
                title="karthi"
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                style={{ marginTop: "20px", marginRight: "10px" }}
                alt="sg"
              />
              <div
                style={{
                  marginTop: "30px",
                  backgroundColor: "white",
                  width: "500px",
                  minHeight: "150px",
                  borderRadius: "10px",
                  boxShadow: "inherit",
                }}
              >
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  <p style={{ marginLeft: "10px" }}>
                    Karthi{" "}
                    <span
                      style={{
                        color: "blue",
                        fontSize: "15px",
                        marginLeft: "10px",
                      }}
                    >
                      Follow
                    </span>
                    <button
                      style={{
                        float: "right",
                        backgroundColor: "white",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                    >
                      ...
                    </button>
                  </p>
                </div>
                <img
                  src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
                  style={{ minWidth: "500px", minHeight: "300px" }}
                  alt="new"
                />
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                >
                  <FavoriteBorderIcon
                    style={{
                      float: "left",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  />
                  <CommentIcon style={{ float: "left", marginRight: "20px" }} />
                  <ShareIcon style={{ float: "left", marginRight: "20px" }} />
                </div>
                <p style={{ marginLeft: "10px" }}>#Home</p>
              </div>
            </div>
          </div>
          <div
            className="col-3"
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              width: "300px",
              height: "500px",
              borderRadius: "10px",
              boxShadow: "inherit",
            }}
          >
            <p style={{ marginTop: "10px" }}>
              Karthi{" "}
              <span style={{ float: "right", marginRight: "10px" }}>
                Joined Today
              </span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Posts:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Followers:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Activity{" "}
              <span style={{ float: "right", marginRight: "10px" }}>____</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Draft:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "10px" }}>
              Queue:{" "}
              <span style={{ float: "right", marginRight: "10px" }}>1</span>
            </p>
            <p className="para" style={{ marginTOp: "20px" }}>
              Edit Profile{" "}
              <span style={{ float: "right", marginRight: "10px" }}>+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
