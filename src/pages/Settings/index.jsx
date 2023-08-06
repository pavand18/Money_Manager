import React from "react";

const Settings = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Setttings</h2>
      </div>

      <div className="mt-10">
        <div className="w-full lg:w-[500px] flex flex-col gap-2.5">
          <div className="settings_item">
            <h2>Login with google</h2>

            <button className="btn btn-primary ml-auto">
              <i className="bi bi-google"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
