import React, { ReactNode } from "react";
import './styles.scss';
import { Info } from 'lucide-react';
import { X } from 'lucide-react';

interface alertProps
{
    title : string;
    description: string;
    children?:ReactNode;
    icon: ReactNode;
    classNameType: string;
    // here is because we pass and React component
}

function Alert(props:alertProps)
{
    return(
        <div className={props.classNameType}>
        <div className="Alert-header">
        <p className="First-paraghrap">
            {props.icon}{props.title}
            </p>
            <X />
        </div>
            <p>
            {props.children}
        {props.description? props.description : null}
            </p>
        
        </div>
    );
}
export default Alert;