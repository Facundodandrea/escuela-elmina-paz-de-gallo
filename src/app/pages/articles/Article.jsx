import Layout from '../../layout/common/Layout'

import './article.css'

const Article = () => {
    return (
      <Layout>
        <div className="container">
            <div className="article">
            <div className="articleTitle">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
            </div>
            <div className="imgPlaceholder"></div>
            {/* <img src="" alt="" /> */}
            <p className="articleParagraph">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sodales per fames fusce dignissim ornare purus id, quam torquent non varius fringilla aenean. Phasellus congue nascetur sociosqu nisl cras montes at per, sociis proin pellentesque elementum semper in augue, sed erat tortor eleifend fermentum ante leo. Velit mi accumsan sed pellentesque iaculis ad parturient sodales torquent eleifend neque cum, felis sociosqu tortor tempus gravida pulvinar praesent facilisi hendrerit luctus tellus.
            </p>
            <p className="articleParagraph">
            Metus leo ornare etiam nullam per convallis, rutrum taciti fames phasellus litora nec natoque, mus eu curabitur eleifend tincidunt. At condimentum lacus arcu et sociis iaculis habitasse metus, tempor vel netus conubia magna primis dis nec ultricies, feugiat laoreet luctus vestibulum sociosqu integer suscipit. Eget bibendum aliquam consequat dignissim blandit fames fringilla penatibus viverra nisl, tempus hac sociis ac auctor arcu parturient sem orci, vel diam morbi phasellus sodales aliquet leo mollis scelerisque.
            </p>
            <p className="articleParagraph">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sodales per fames fusce dignissim ornare purus id, quam torquent non varius fringilla aenean. Phasellus congue nascetur sociosqu nisl cras montes at per, sociis proin pellentesque elementum semper in augue, sed erat tortor eleifend fermentum ante leo. Velit mi accumsan sed pellentesque iaculis ad parturient sodales torquent eleifend neque cum, felis sociosqu tortor tempus gravida pulvinar praesent facilisi hendrerit luctus tellus.
            </p>
            <p className="articleParagraph">
            Metus leo ornare etiam nullam per convallis, rutrum taciti fames phasellus litora nec natoque, mus eu curabitur eleifend tincidunt. At condimentum lacus arcu et sociis iaculis habitasse metus, tempor vel netus conubia magna primis dis nec ultricies, feugiat laoreet luctus vestibulum sociosqu integer suscipit. Eget bibendum aliquam consequat dignissim blandit fames fringilla penatibus viverra nisl, tempus hac sociis ac auctor arcu parturient sem orci, vel diam morbi phasellus sodales aliquet leo mollis scelerisque.
            </p>
            </div>
        </div>
      </Layout>
    )
  }

export default Article