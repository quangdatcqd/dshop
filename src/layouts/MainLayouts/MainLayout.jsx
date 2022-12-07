import React from 'react';
import PropTypes from 'prop-types';

// MainLayouts.propTypes = {
//     component
// };

function MainLayout(chilrentPage) {
    return (
        <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full"
        >
            <Header />
            <Menu />
            {chilrentPage}
        </div>
    );
}

export default MainLayout;