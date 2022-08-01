import { Button, Input } from "antd";
import React, { useState } from "react";



function Banner() {


  return (
    <div className="w-full mx-auto flex flex-col components justify-center items-center h-full my-40">
      <Button type="success" >Merhaba</Button>
      <Input placeholder="Test" className="my-40 w-1/2" />
      <Button className="bg-primary text-black text-2xl text-center h-16" >Merhaba</Button>
    </div>
  );
}

export default Banner;
