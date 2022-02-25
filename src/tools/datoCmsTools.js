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
    return [
        data?.staticelement[staticTextField].value ??
            data?.staticelement[staticTextField],
    ];
};

export const useAllElements = (model) => {
    const modelQuery = {
        presenters: `
            allSpeakers(
                orderBy: [name_ASC]) {
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
    const { error, data } = useQuerySubscription({
        enabled: true,
        query: DATOCMS_QUERY,
        token,
    });
    return [(data) && data[Object.keys(data)[0]]]
};
