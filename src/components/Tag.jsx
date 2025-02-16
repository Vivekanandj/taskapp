import "react";
import PropTypes from "prop-types";

const Tag = ({ label, value, onChange }) => {
    const labelStyle = {
        color: "#4a90e2",
        marginRight: "8px",
    };

    const inputStyle = {
        marginLeft: "8px",
        borderColor: "#4a90e2",
        padding: "4px",
        borderRadius: "4px",
        border: "1px solid #4a90e2",
    };

    return (
        <label className="tag" style={labelStyle}>
            {label}
            <input
                type="date"
                value={value}
                onChange={onChange}
                style={inputStyle}
            />
        </label>
    );
};

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

Tag.defaultProps = {
    label: "Date",
    value: "",
    onChange: () => {},
};

export default Tag;