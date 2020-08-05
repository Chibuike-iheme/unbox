import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FaPlus } from 'react-icons/fa';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <p class="my-4">
                <button
                    class="btn font-weight-bold" style={{ backgroundColor: "#BB1928"}}  type="button" data-toggle="collapse" data-target="#multiCollapseExample2"
                    aria-expanded="false" aria-controls="multiCollapseExample2">
                    FILTER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <FaPlus style={{ fontSize: "12px" }} />
                </button>
                <button
                    class="btn font-weight-bold ml-2" style={{ backgroundColor: "#BB1928"}} type="button" data-toggle="collapse" data-target="#multiCollapseExample3"
                    aria-expanded="false" aria-controls="multiCollapseExample3">
                    SORT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <FaPlus style={{ fontSize: "12px" }} />
                </button>
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="card sort card-body" style={{ width:"250px" }}>
                            SORT BY:<hr class="border-0 mb-1" />
                            <div class="btn-group mb-4" role="group" aria-label="Basic example">
                                <button type="button" class="btn font-weight-bold btn-danger mr-2" style={{ width:"250px" }}>HIGHEST TO LOWEST</button>
                                <button type="button" class="btn font-weight-bold btn-danger">NEWEST</button>
                            </div>
                            <div class="btn-group mb-2" role="group" aria-label="Basic example">
                                <button type="button" class="btn font-weight-bold btn-danger mr-2" style={{ width:"250px" }}>LOWEST TO HIGHEST</button>
                                <button type="button" class="btn font-weight-bold btn-danger" style={{ width:"250px" }}>EDITORS PICK</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample3">
                        <div class="card sort card-body">
                            SORT BY:<hr class="border-0 mb-1" />
                            <div class="btn-group mb-4" role="group" aria-label="Basic example">
                                <button type="button" class="btn font-weight-bold btn-danger mr-5">HIGHEST TO LOWEST</button>
                                <button type="button" class="btn font-weight-bold btn-danger">NEWEST</button>
                            </div>
                            <div class="btn-group mb-2" role="group" aria-label="Basic example">
                                <button type="button" class="btn font-weight-bold btn-danger mr-5">LOWEST TO HIGHEST</button>
                                <button type="button" class="btn font-weight-bold btn-danger">EDITORS PICK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
