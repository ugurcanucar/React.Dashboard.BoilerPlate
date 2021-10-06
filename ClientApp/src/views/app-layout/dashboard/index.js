import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setPageSettings } from "redux/actions/sub-header";

const pageSetting = [
  {
    key: 3,
    Name: "Anasayfa",
    Link: "",
  },
  {
    key: 2,
    Name: "Güncel Durum",
    Link: "",
  },
];

const Dashboard = (props) => {
  const { setPageSettings } = props;
  useEffect(async () => {
    setPageSettings(pageSetting);
  }, [setPageSettings]);
  return (
    <div>
      <p>Dashboard Works!</p>
    </div>
  );
};

const mapDispatchToProps = {
  setPageSettings: (settings) => setPageSettings(settings),
};

export default connect(null, mapDispatchToProps)(Dashboard);
