import React from "react";

interface ColumnProps {
  text: string;
}

export const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <>
      <div className="col mb-2">
        {/* ------- Todo board starts here */}
        <h4 className="mb-0 font-weight-bold">{text}</h4>
      </div>
      <div className="col text-right mb-2">
        <div className="actions">
          <a className="action-item mr-2" href="action">
            <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a className="action-item" href="action">
            <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </a>
        </div>
      </div>
      {/* ---------------- Content for Todo -------- */}
      <div className="card-list-body mt-md-3">
        <div className="card mb-3 border shadow-none">
          <div className="card-body">
            <div className="row align-items-center mb-2">
              {/* ---------- Badge ---------- */}
              <div className="col-6">
                <span className="badge rounded-pill bg-success">Priority</span>
              </div>
              {/* --------- Percentage of task done ------------ */}
              <div className="col-6 text-right">
                <span className="small font-weight-bold">70%</span>
              </div>
            </div>
            {/* ---------- Task to do ----------- */}
            <h6 className="text-muted">Call with Mr. Ibrahim</h6>
            <div className="row align-items-center">
              <div className="col-8">
                <div className="actions d-flex text-muted bg-transparent">
                  {/* ------------- Icon to attach file --------------- */}
                  <div className="action-item d-inline-block mr-2 border-0 small p-1" role="button">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    3
                  </div>
                  <div className="action-item d-inline-block mr-3 border-0 small p-1" role="button">
                    {/* --------- Icon for comments ------------- */}
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
                      <path
                        fill-rule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 border shadow-none">
          <div className="card-body">
            <div className="row align-items-center mb-2">
              {/* ---------- Badge ---------- */}
              <div className="col-6">
                <span className="badge rounded-pill bg-danger">Urgent</span>
              </div>
              {/* --------- Percentage of task done ------------ */}
              <div className="col-6 text-right">
                <span className="small font-weight-bold">10%</span>
              </div>
            </div>
            {/* ---------- Task to do ----------- */}
            <h6 className="text-muted">Blossom.io web redesign</h6>
            <div className="row align-items-center">
              <div className="col-8">
                <div className="actions d-flex text-muted bg-transparent">
                  {/* ------------- Icon to attach file --------------- */}
                  <div className="action-item d-inline-block mr-2 border-0 small p-1" role="button">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    3
                  </div>
                  <div className="action-item d-inline-block mr-3 border-0 small p-1" role="button">
                    {/* --------- Icon for comments ------------- */}
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
                      <path
                        fill-rule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third task */}
        <div className="card mb-3 border shadow-none">
          <div className="card-body">
            <div className="row align-items-center mb-2">
              {/* ---------- Badge ---------- */}
              <div className="col-6">
                <span className="badge rounded-pill bg-warning">Review</span>
              </div>
              {/* --------- Percentage of task done ------------ */}
              <div className="col-6 text-right">
                <span className="small font-weight-bold">50%</span>
              </div>
            </div>
            {/* ---------- Task to do ----------- */}
            <h6 className="text-muted">UI/UX training</h6>
            <div className="row align-items-center">
              <div className="col-8">
                <div className="actions d-flex text-muted bg-transparent">
                  {/* ------------- Icon to attach file --------------- */}
                  <div className="action-item d-inline-block mr-2 border-0 small p-1" role="button">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    3
                  </div>
                  <div className="action-item d-inline-block mr-3 border-0 small p-1" role="button">
                    {/* --------- Icon for comments ------------- */}
                    <svg viewBox="0 0 20 20" fill="currentColor" width="15px" height="15px">
                      <path
                        fill-rule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
