<template>
    <div class="comment-bottom comment-scroll">
        <div class="main">
            <div class="comment-row">
                <!-- <img :src="user.image" class="profile-img" alt=""> -->
                <div ref="commentHolder" class="comment-row-box">
                    <textarea v-model="comment"></textarea>
                    <button @click="addComment" class="send-btn" type="button">
                        <img
                            :src="`${base_url}/assets/web/images/send-commt.png`"
                            alt=""
                        />
                    </button>
                </div>
            </div>
            <div
                v-for="(com, comindex) in comments"
                :key="comindex"
                class="comment-row"
            >
                <img
                    :src="com.commentaddable.image"
                    class="profile-img"
                    alt=""
                />
                <div
                    class="comment-row-box"
                    style="background: transparent; padding: 0"
                >
                    <div
                        style="
                            background: #fff;
                            padding: 15px;
                            border-radius: 25px;
                            position: relative;
                            flex: 1;
                        "
                    >
                        <div
                            v-if="com.owner"
                            class="btn-group timeline-card-top-drop-down mr-3"
                        >
                            <a
                                @click="deleteComment(com.id)"
                                href="javascript:;"
                                class="dropdown-item l-grey uppercase"
                                ><i class="fas fa-trash"></i
                            ></a>
                        </div>
                        <h5 class="name mt-2">
                            {{ com.commentaddable.name }}
                            <vue-moments-ago
                                class="comment-posted-time"
                                prefix=""
                                suffix="ago"
                                :date="com.created_at"
                                lang="en"
                            />
                        </h5>
                        <p>{{ com.comment }}</p>
                        <button
                            v-on:click="showReplies(com.id)"
                            class="reply-button name mt-2"
                        >
                            <i
                                class="fa fa-reply blue-text"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>

                    <div class="inner-div" style="display: block" :id="com.id">
                        <div class="comment-row">
                            <img
                                src="http://127.0.0.1:8000/default.png"
                                alt=""
                                class="profile-img"
                            />
                            <div ref="replytHolder" class="comment-row-box">
                                <textarea
                                    v-model="reply"
                                    placeholder="Reply"
                                ></textarea>
                                <button
                                    @click="addReply(com.id)"
                                    class="send-btn"
                                    type="button"
                                >
                                    <img
                                        src="http://127.0.0.1:8000/users/images/send-commt.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                        <div v-if="com.replies.length > 0" class="reply-div">
                            <div
                                v-for="(reply, repindex) in com.replies"
                                :key="repindex"
                                class="comment-row"
                            >
                                <img
                                    :src="reply.commentaddable.image"
                                    class="profile-img"
                                    alt=""
                                />
                                <div
                                    class="comment-row-box"
                                    style="background: ywhite"
                                >
                                    <div
                                        v-if="reply.owner"
                                        class="btn-group timeline-card-top-drop-down mr-3"
                                    >
                                        <a
                                            @click="deleteComment(reply.id)"
                                            href="javascript:;"
                                            class="dropdown-item l-grey uppercase"
                                            ><i class="fas fa-trash"></i
                                        ></a>
                                    </div>
                                    <h5 class="name mt-2">
                                        {{ reply.commentaddable.name }}
                                        <vue-moments-ago
                                            class="comment-posted-time"
                                            prefix=""
                                            suffix="ago"
                                            :date="reply.created_at"
                                            lang="en"
                                        />
                                    </h5>
                                    <p>{{ reply.comment }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueMomentsAgo from "vue-moments-ago";
export default {
    props: ["post"],
    components: {
        VueMomentsAgo,
    },
    data() {
        return {
            baseUrl: window.base_url,
            user: window.user,
            comment: "",
            comments: [],
            reply: "",
        };
    },
    mounted() {
        this.fetchComment();
    },
    methods: {
        showReplies(data) {
            let elem = "#" + data;
            $(elem).toggle();
            console.log(data);
        },
        deleteComment(id) {
            axios
                .delete(`/posts/${this.post.id}/comment/${id}?noloader=1`)
                .then(({ data }) => {
                    this.fetchComment();
                    this.post.comments_count--;
                });
        },
        fetchComment() {
            axios
                .get(`/posts/${this.post.id}/comment?noloader=1`)
                .then(({ data }) => {
                    this.comments = data;
                });
        },
        addComment() {
            if (this.comment == "") {
                this.$refs.commentHolder.style.border = "1px solid red";
                return;
            } else this.$refs.commentHolder.style.border = "none";

            axios
                .post(`/posts/${this.post.id}/comment?noloader=1`, {
                    comment: this.comment,
                })
                .then(({ data }) => {
                    axios
                        .get(`/posts/${this.post.id}/comment?noloader=1`)
                        .then(({ data }) => {
                            this.comments = data;
                        });
                    this.comments = [data, ...this.comments];
                    this.post.comments_count++;
                    this.comment = "";
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addReply(commentId) {
            console.log(commentId);

            if (this.reply == "") {
                return;
            }

            axios
                .post(
                    `/posts/${this.post.id}/comment/${commentId}?noloader=1`,
                    {
                        reply: this.reply,
                    }
                )
                .then(({ data }) => {
                    axios
                        .get(`/posts/${this.post.id}/comment?noloader=1`)
                        .then(({ data }) => {
                            this.comments = data;
                        });
                    this.comments = [data, ...this.comments];
                    this.post.comments_count++;
                    this.comment = "";
                    this.reply = "";
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    watch: {},
};
</script>

<style></style>
