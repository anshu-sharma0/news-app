import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React, { Component } from 'react'

export default class SkeletonComponent extends Component {
    render() {
        return (
            <SkeletonTheme color="#202020" highlightColor="#444">
                <section>
                    <Skeleton height="400px" width='100%' />
                </section>
            </SkeletonTheme>
        );
    }
}