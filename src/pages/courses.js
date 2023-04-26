import Card from "@/components/Card"
import styles from '../styles/Courses.module.scss'
import { gql } from "@apollo/client";
import { getApolloClient } from '../components/client';

export default function Courses({ categories, catedata }) {


  var items = []

  // This for loop goes through all the categories
  for (var i = 0; i < catedata.length; i++) {

    if (catedata[i].courses.edges.length > 0 && !(catedata[i].name == 'Uncategorized')) { // category > one child and not uncategorized -> create card.
      items.push(
        <Card
          title={catedata[i].name}
          img={catedata[i].categoryImages.categoryImage.sourceUrl}
          body={catedata[i].description}
          link={catedata[i].courses.edges[0].node.uri} // courses/category/lesson e.g. courses/pycharm/pycharm-basics
        />
      )
    }
  }


  return (
    <>
      <h1 className={styles.title}> Courses </h1>
      <h4 className={styles.subtitle}>simple coding lessons and tutorials</h4>
      <hr className={styles.sepparator} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {items}
        </div>
      </div>
    </>

  );
}



export async function getStaticProps() {
  const apolloClient = getApolloClient();

  /*const data = await apolloClient.query({
    query: gql`
        query GetCategoryData{
          categories {
            edges {
              node {
                id
                name
                slug
                description

                contentNodes (where: {contentTypes: COURSES}){
                  nodes {
                    slug
                    ... on Course {
                      id
                      title
                      menuOrder
                      slug
                      link
                      uri
                    }
                  }
                }

                categoryImages {
                  categoryImage {
                    sourceUrl
                  }
                }

              }

            }
          }
        }
      `
  });*/

  const data2 = await apolloClient.query({
    query: gql`
    {
      categories {
        nodes {
          id
          name
          slug
          description
          categoryImages {
            categoryImage {
              sourceUrl
            }
          }
          courses(where: {orderby: {field: MENU_ORDER, order: ASC}}, first: 1) {
            edges {
              node {
                id
                uri
                title
                slug
                menuOrder
                link
              }
            }
          }
        }
      }
    }
    `
  });




  const catedata = data2.data.categories.nodes









  //const categories = data?.data.categories.edges
  //const content = data?.data.courses.edges[0].node.content;


  return {
    props: {
      catedata
    }
  }
}



