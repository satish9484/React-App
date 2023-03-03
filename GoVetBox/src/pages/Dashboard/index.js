import React from "react";

import { Card, Spin } from "antd";

import { useFetchData } from "../../components/common/appcommonfunction/Fuctions";

const Dashboard = () => {
  // const [dashboardData, { isLoading }] = useGetDashboardataMutation({
  //   refetchOnMountOrArgChange: true,
  // });

  // const {
  //   data: res,
  //   isError: e,
  //   fetchError: fe,
  //   isLoading: l,
  // } = useFetchData("getShipment", {
  //   length: 10,
  //   search: "",
  //   start: 0,
  // });

  // let response;
  // if (l) {
  //   console.log("Laodign....");
  //   response = (
  //     <Spin className=" w-full" tip="Waiting For data.." size="large"></Spin>
  //   );
  // } else if (e) {
  //   console.log(fe);
  // } else if (res !== undefined && res !== null) {
  //   response = res;
  // }

  // console.log(response);

  // if (response.data.data.data.length > 0) {
  //   setData(response.data.data.data);
  //   setTotalData(response.data.data.recordsTotal);
  //     if (data.length > 0) {
  //   dataSource = [];
  //   //console.log(data.length);
  //   data.map((shipment) => {
  //     return dataSource.push({
  //       ...shipment,
  //       key: uuid(),
  //       deliveryDate: dayjs(shipment.deliveryDate).format("DD-MM-YYYY"),
  //       nextDeliveryDate: dayjs(shipment.nextDeliveryDate).format("DD-MM-YYYY"),
  //     });
  //   });
  // }
  // } else {
  //   alert(response);
  // }

 

  const {
    data,
    isError,
    fetchError,
    isLoading: isFeching,
  } = useFetchData("dashboardData");

  let cardContents;
  if (isFeching) {
    cardContents = (
      <Spin className=" w-full" tip="Waiting For data.." size="large"></Spin>
    );
  } else if (isError) {
    console.log(fetchError);
  } else if (
    data !== undefined &&
    data !== null &&
    Object.keys(data.data).length > 0
  ) {
    cardContents = (
      <div className=" w-full grid sm:grid-cols-3 md:grid-cols-5 ">
        {Object.entries(data.data.data).map(([k, y], index) => {
          return (
            <Card
              key={index}
              className="bg-blue-700 p-0 "
              style={{ wordWrap: "break-word" }}
              title={y}
            >
              {k}
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="relative site-card-wrapper w-full  h-full ">
        <div className="inline-block flex-col w-full  h-full  p-2">
          <h2 className="text-xl">Dashboard</h2>
          <div className="w-full">{cardContents}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
