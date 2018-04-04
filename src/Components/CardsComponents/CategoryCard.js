import React from 'react';

function CategoryCard(){
    return(
        <div className="category-card-main-div">
            <div className="category-card-image">
            </div>
            <div className="category-card-right-div">
                <div className="category-card-info">
                    <h5>story for members</h5>
                    <h1>The Great Houdini</h1>
                    <p>On March 24th of 1874 a boy named Erik Weisz was born in Budapest. He came to America four years later, being renamed Ehrich Weiss. In 1888…</p>
                    <div className="category-card-user-info-save">
                        <img className="user-image"/>
                        <h6>Joshua Hehe</h6>
                        <img className="user-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryCard;