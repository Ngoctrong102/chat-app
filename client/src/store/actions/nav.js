export const changeFeature = (feature) => {
    return {
        type: "CHANGE_FEATURE",
        payload: {
            feature
        }
    };
}