import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary">Login with Google <FcGoogle></FcGoogle> </Button>
                <Button variant="outline-dark">Login with GitHub <FaGithub></FaGithub> </Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;