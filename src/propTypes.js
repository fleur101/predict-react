import {
    ATTRIBUTE_NUMBER,
    ATTRIBUTE_STRING,
    BOOLEAN,
    CLASSIFICATION,
    COMPLEX,
    DURATION,
    FREQUENCY,
    LABELLING,
    LAST_PAYLOAD,
    NEXT_ACTIVITY,
    NO_PADDING,
    REGRESSION,
    REMAINING_TIME,
    SIMPLE_INDEX,
    THRESHOLD_CUSTOM,
    THRESHOLD_MEAN,
    TIME_SERIES_PREDICTION,
    ONLY_THIS,
    UP_TO_SINGLE_TASK,
    UP_TO_SEPARATE_TASKS,
    ZERO_PADDING
} from './reference';
import PropTypes from 'prop-types';

/**
 * Created by tonis.kasekamp on 10/9/17.
 */


export const incrementalTrain = {
    incremental_train: PropTypes.number.isRequired
};

const hyperOptShape = {
    use_hyperopt: PropTypes.bool.isRequired,
    max_evals: PropTypes.number.isRequired,
    performance_metric: PropTypes.string.isRequired
};

export const traceAttributeShape = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired
};

export const fetchStatePropType = PropTypes.shape({
    inFlight: PropTypes.bool.isRequired,
    error: PropTypes.any
}).isRequired;

export const splitPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['single', 'double']).isRequired,
    originalLogName: PropTypes.string,
    trainingLogName: PropTypes.string,
    testLogName: PropTypes.string,
    original_log: PropTypes.number,
    training_log: PropTypes.number,
    test_log: PropTypes.number,
    config: PropTypes.object.isRequired,
});

export const encodingPropType = {
    method: PropTypes.oneOf([SIMPLE_INDEX, BOOLEAN, FREQUENCY, COMPLEX, LAST_PAYLOAD]),
    padding: PropTypes.oneOf([ZERO_PADDING, NO_PADDING]).isRequired,
    generation_type: PropTypes.oneOf([UP_TO_SINGLE_TASK, ONLY_THIS, UP_TO_SEPARATE_TASKS]).isRequired,
    prefix_length: PropTypes.number.isRequired,
    add_remaining_time: PropTypes.bool.isRequired,
    add_elapsed_time: PropTypes.bool.isRequired,
    add_executed_events: PropTypes.bool.isRequired,
    add_resources_used: PropTypes.bool.isRequired,
    add_new_traces: PropTypes.bool.isRequired,
};

export const labelPropType = {
    type: PropTypes.oneOf([NEXT_ACTIVITY, REMAINING_TIME, ATTRIBUTE_NUMBER, ATTRIBUTE_STRING, DURATION]).isRequired,
    attribute_name: PropTypes.string,
    threshold_type: PropTypes.oneOf([THRESHOLD_MEAN, THRESHOLD_CUSTOM]).isRequired,
    threshold: PropTypes.number.isRequired
};

export const jobPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    split: PropTypes.objectOf(splitPropType).isRequired,
    splitName: PropTypes.string,
    type: PropTypes.oneOf([CLASSIFICATION, REGRESSION, TIME_SERIES_PREDICTION, LABELLING]).isRequired,
    config: PropTypes.shape({
        hyperopt: PropTypes.shape(hyperOptShape),
        labelling: PropTypes.shape(labelPropType).isRequired,
        predictive_model: PropTypes.string,
        results: PropTypes.objectOf(PropTypes.any),
        clustering: PropTypes.string,
        parent_job: PropTypes.string.isRequired,
        encoding: PropTypes.shape(encodingPropType).isRequired,
        kmeans: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    created_date: PropTypes.string.isRequired,
    case_id: PropTypes.arrayOf(PropTypes.number),
    event_number: PropTypes.objectOf(PropTypes.any),
    gold_values: PropTypes.objectOf(PropTypes.any),
    modified_date: PropTypes.string.isRequired,
    result: PropTypes.shape({
        mae: PropTypes.number,
        rmse: PropTypes.number,
        rscore: PropTypes.number,
        mape: PropTypes.number,
        fmeasure: PropTypes.number,
        acc: PropTypes.number,
        auc: PropTypes.number,
        true_positive: PropTypes.number,
        true_negative: PropTypes.number,
        false_positive: PropTypes.number,
        false_negative: PropTypes.number,
        precision: PropTypes.number,
        recall: PropTypes.number,
        nlevenshtein: PropTypes.number
    })
}).isRequired;

export const jobFlatPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    prefix_length: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    padding: PropTypes.string,
    encodingMethod: PropTypes.string.isRequired,
    generationType: PropTypes.string.isRequired,
    advanced: PropTypes.objectOf(PropTypes.any).isRequired,
    hyperopt: PropTypes.shape(hyperOptShape),
    kmeans: PropTypes.objectOf(PropTypes.any),
    labelling: PropTypes.shape(labelPropType).isRequired,
}).isRequired;

export const labelJobFlat = PropTypes.shape({
    id: PropTypes.number.isRequired,
    encoding: PropTypes.shape(encodingPropType).isRequired,
    result: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    labelling: PropTypes.shape(labelPropType).isRequired,
}).isRequired;

export const selectLabelProptype = PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}).isRequired).isRequired;

export const logPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    properties: PropTypes.shape({
        events: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
        resources: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
        newTraces: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
        traceAttributes: PropTypes.arrayOf(PropTypes.shape(traceAttributeShape)).isRequired,
        maxEventsInLog: PropTypes.number.isRequired,
    }).isRequired
});

export const modelPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    split: PropTypes.objectOf(splitPropType).isRequired,
    config: PropTypes.shape({
        hyperopt: PropTypes.shape(hyperOptShape),
        labelling: PropTypes.shape(labelPropType).isRequired,
        method: PropTypes.string,
        clustering: PropTypes.string,
        encoding: PropTypes.shape(encodingPropType).isRequired,
        kmeans: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
    type: PropTypes.string.isRequired,
}).isRequired;

export const tracePropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.any.isRequired,
    completed: PropTypes.bool.isrequired,
    first_event: PropTypes.string.isRequired,
    last_event: PropTypes.string.isRequired,
    n_events: PropTypes.number.isRequired,
    real_log: PropTypes.number.isRequired,
    reg_results: PropTypes.any,
    class_results: PropTypes.any,
    timeSeriesPred_results: PropTypes.any,
    reg_actual: PropTypes.any,
    class_actual: PropTypes.any,
    timeSeriesPred_actual: PropTypes.any,
    duration: PropTypes.number.isRequired
});

export const logsStore = PropTypes.shape({
    byId: PropTypes.objectOf(logPropType).isRequired,
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}).isRequired;

export const splitStore = PropTypes.shape({
    byId: PropTypes.objectOf(splitPropType).isRequired,
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}).isRequired;

export const jobStore = PropTypes.shape({
    byId: PropTypes.objectOf(jobPropType).isRequired,
    allIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}).isRequired;
