import React from "react";

export default function uploard() {
  return (
    <div>
      <div class="form-group row justify-content-center">
        <div class="col-lg-12 col-md-9 col-sm-12">
          <div
            class="dropzone dropzone-default dropzone-success dz-clickable"
            id="kt_dropzone_3"
          >
            <div class="dropzone-msg dz-message needsclick">
              <h3 class="dropzone-msg-title">
                ลากไฟล์มาที่ตรงนี้
              </h3>
              <span class="dropzone-msg-desc">
               อนุญาตให้อัปโหลดเฉพาะไฟล์รูปภาพ, pdf, zip
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
