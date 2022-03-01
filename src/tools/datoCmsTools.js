import { useQuerySubscription } from "react-datocms";

const token = "3331fc3477e7df4b7cb85836c2a684"

export const useStaticElement = (staticTextField, isStructuredText = true) => {
    const valueProperty = isStructuredText ? "{value }" : "";
    const DATOCMS_QUERY = `
		query AppQuery {
			staticelement  {
				${staticTextField} 
				${valueProperty}
			}
		}`;
    const { error, data } = useQuerySubscription({
        enabled: true,
        query: DATOCMS_QUERY,
        token,
    });

    //data ?? console.log(staticTextField, data?.staticelement[staticTextField]);
    //console.log(staticTextField, data?.staticelement[staticTextField])
    return [
        data?.staticelement[staticTextField].value ??
            data?.staticelement[staticTextField],
    ];
};

export const useAllElements = (model) => {
    const modelQueryRecordCount = {
        presenters: `        
            _allSpeakersMeta {
              count
            }
        `,
        stages: `
            _allStagesMeta {
                count
            }
        `
    }
    const DATOCMS_QUERY_RECORD_COUNT = `
        query AppQuery {
            ${modelQueryRecordCount[model]} 
        }`

    const  [dataCount] = useQuery(DATOCMS_QUERY_RECORD_COUNT)

    const modelQuery = {
        presenters: `
            allSpeakers(orderBy: [name_ASC], first: ${dataCount?.count ?? 0} ) 
                {
                    name
                    slug
                    highlighted
                    title
                    company
                    image {
                        url
                    }
                }
        `,
        stages: `
            allStages(orderBy: [order_ASC]) {
                id
                name
                schedule {
                    id
                    start
                    title
                    speaker {
                        id
                        company
                        name
                        title
                        image {
                            url
                        }
                    }
                }
            }        
        `,
    };
    const DATOCMS_QUERY = `
        query AppQuery {
            ${modelQuery[model]} 
        }`

    const  [data] = useQuery(DATOCMS_QUERY)

    //console.log("dataCount", dataCount)
    //console.log("DATOCMS_QUERY", DATOCMS_QUERY)
    return [data]
};

const useQuery = (query) => {
    const { error, data } = useQuerySubscription({
        query,
        token
    });
    return [(data) && data[Object.keys(data)[0]]]
} 