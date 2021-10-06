import React from "react";
import { Menu, Breadcrumb, Tooltip } from "antd";
import Icon from "components/util-components/Icon";
import navigationConfig from "configs/NavigationConfig";
import { Link } from "react-router-dom";
import AppViews from "views/app-layout";
import { connect } from "react-redux";
import { signOut } from "redux/actions/Auth";

export const AppLayout = (props) => {
  const { pageSettings } = props;

  return (
    <React.Fragment>
      <div className=" flex  " style={{ height: "100vh", width: "100%" }}>
        {/* Sider */}
        <div
          className="bg-yellow-300   h-full sider fixed overflow-y-auto z-40"
          style={{ width: "265px" }}
        >
          <div className=" h-full    " style={{ backgroundColor: "#1e1e2d" }}>
            <div className="pt-7 pl-5">
              <img
                src="/img/ortak-market-logo.png"
                alt="brandlogo"
                className="z-50
                sm:w-10 md:w-20 lg:w-32 xl:w-44 2xl:w-52"
              />
            </div>

            <Menu
              className="mt-8"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ backgroundColor: "#1e1e2d" }}
            >
              {navigationConfig.map((menu) =>
                menu.submenu.length > 0 ? (
                  <Menu.ItemGroup
                    key={menu.key}
                    title={menu.title}
                    style={{ backgroundColor: "#1e1e2d" }}
                  >
                    {menu.submenu.map((subMenuFirst) =>
                      subMenuFirst.submenu.length > 0 ? (
                        <Menu.SubMenu
                          style={{ backgroundColor: "#1e1e2d" }}
                          icon={
                            subMenuFirst.icon ? (
                              <Icon type={subMenuFirst?.icon} />
                            ) : null
                          }
                          key={subMenuFirst.key}
                          title={subMenuFirst.title}
                        >
                          {subMenuFirst.submenu.map((subMenuSecond) => (
                            <Menu.Item
                              key={subMenuSecond.key}
                              style={{ backgroundColor: "#1e1e2d" }}
                            >
                              {subMenuSecond.icon ? (
                                <Icon type={subMenuSecond?.icon} />
                              ) : null}
                              <span>{subMenuSecond.title}</span>
                              <Link to={subMenuSecond.path} />
                            </Menu.Item>
                          ))}
                        </Menu.SubMenu>
                      ) : (
                        <Menu.Item
                          key={subMenuFirst.key}
                          style={{ backgroundColor: "#1e1e2d" }}
                        >
                          {subMenuFirst.icon ? (
                            <Icon type={subMenuFirst.icon} />
                          ) : null}
                          <span>{subMenuFirst.title}</span>
                          <Link to={subMenuFirst.path} />
                        </Menu.Item>
                      )
                    )}
                  </Menu.ItemGroup>
                ) : (
                  <Menu.Item key={menu.key}>
                    {menu.icon ? <Icon type={menu?.icon} /> : null}
                    <span>{menu?.title}</span>
                    {menu.path ? <Link to={menu.path} /> : null}
                  </Menu.Item>
                )
              )}
            </Menu>
          </div>
        </div>

        <div
          style={{
            height: "100vh",
            paddingLeft: "265px",
          }}
          className="
          w-full  "
        >
          <div className=" h-full   relative">
            {/* Header */}
            <div
              className="  fixed h-16 site-layout-background flex w-full   "
              style={{ paddingRight: "265px" }}
            >
              <ul className="nav-footer">
                <li className="nav-footer-active">
                  <span>Hakkımızda</span>
                </li>
                <li className="">
                  <span>Ekibimiz</span>
                </li>
                <li className="">
                  <span>İletişim</span>
                </li>
              </ul>

              <div className="bg-white flex-1 relative">
                <div className="flex justify-end h-full items-center ">
                  <div className=" w-32 h-12 rounded-md flex items-center transition  hover:bg-gray-200 hover:bg-opacity-30  mr-4 group ">
                    <span className="pl-2 text-gray-400">Hi, </span>
                    <span className="pl-1">User!</span>
                    <Tooltip title="Çıkış yap" placement="bottom">
                      <div
                        className="bg-red-400 hover:bg-red-500 cursor-pointer  ml-3 transition text-green-600   font-bold rounded-full w-10   flex justify-center items-center  h-10"
                        onClick={props.signOut}
                      >
                        <span className="fa fa-sign-out-alt transition  pl-1 text-base text-white"></span>
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            {/* SubHeader */}

            <div
              className="w-full   flex flex-col justify-between h-full pt-16"
              style={{ minHeight: "100vh", backgroundColor: "#EEF0F8" }}
            >
              <div
                className="h-16 border-t fixed z-40 subHeaderShadow pt-2 bg-white w-full flex items-center justify-between "
                style={{ paddingRight: "265px" }}
              >
                <Breadcrumb separator=">" className="ml-7 pb-2">
                  {pageSettings.length > 0
                    ? pageSettings.map((x, i, arr) => {
                        if (i === arr.length - 1) {
                          return (
                            <React.Fragment key={x.key}>
                              <Breadcrumb.Item>
                                <span className="" style={{ color: "#BFBFBF" }}>
                                  {x.Name}
                                </span>
                              </Breadcrumb.Item>
                            </React.Fragment>
                          );
                        } else {
                          return (
                            <React.Fragment key={x.key}>
                              <Breadcrumb.Item>
                                <Link to={x.Link}>
                                  <span className=" font-medium text-gray-600 hover:text-gray-500 transition">
                                    {x.Name}
                                  </span>
                                </Link>
                              </Breadcrumb.Item>
                            </React.Fragment>
                          );
                        }
                      })
                    : ""}
                </Breadcrumb>{" "}
              </div>
              {/* Content */}
              <div className=" w-full content overflow-auto h-full flex flex-col justify-between  pt-16">
                <div className="     text-left">
                  <AppViews />
                </div>
                {/* Footer */}
                <div className=" bg-white mt-20 w-full  py-3 flex justify-between clear-both ">
                  <ul className="nav-footer">
                    <li className="nav-footer-active">
                      <span>Hakkımızda</span>
                    </li>
                    <li className="">
                      <span>Ekibimiz</span>
                    </li>
                    <li className="">
                      <span>İletişim</span>
                    </li>
                  </ul>
                  <div className="self-center mr-32">
                    <span className="text-gray-400 text-xs mr-3">©2021</span>
                    <span>Ortak Market</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = ({ subheader }) => {
  const { pageSettings, pageButtons } = subheader;
  return { pageSettings, pageButtons };
};
const mapDispatchToProps = {
  signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AppLayout));
