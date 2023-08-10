import { Component, createRef, RefObject } from "react";
import { Posts } from "./global/posts";
import * as C from './style';

import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';

interface State {
    posts: Array<{
        date: string;
        title: string;
        description: string;
        like: boolean;
    }>;
}

export class App extends Component<{}, State> {
    inputref: RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.inputref = createRef();
        this.state = {
            posts: Posts
        }
    }

    componentDidMount(): void {
        this.setState({ posts: Posts });
    }

    handleSearch = () => {
        const value = this.inputref.current?.value;
        if (value) {
            const posts = Posts.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));
            this.setState({ posts });
        }
        else {
            this.setState({ posts: Posts });
        }
    }

    handleLike = (index: number) => {
        const posts = this.state.posts;
        posts[index].like = !posts[index].like;
        this.setState({ posts });
    }

    render() {
        return (
            <C.Container>
                <C.Header>
                    <C.HeaderContainer>
                        <C.TextContainer>
                            <C.Text>Codelândia</C.Text>
                            <C.Text>blog</C.Text>
                        </C.TextContainer>
                        <C.InputContainer>
                            <C.Input placeholder="Pesquisar no blog" ref={this.inputref} onChange={this.handleSearch}/>
                            <AiOutlineSearch size={30} color={"white"}/>
                        </C.InputContainer>
                    </C.HeaderContainer>
                </C.Header>
                <C.Content>
                    {this.state.posts.map((post, index) => (
                        <C.Post key={index}>
                            <C.PostHeader>
                                <C.PostDate>{post.date}</C.PostDate>
                                <AiFillHeart size={25} color={post.like ? "red": "#D5D5D5"} onClick={() => this.handleLike(index)}/>
                            </C.PostHeader>
                            <C.PostTitle>{post.title}</C.PostTitle>
                            <C.PostDescription>{post.description}</C.PostDescription>
                        </C.Post>
                    ))}
                </C.Content>
            </C.Container>
        )
    }
}