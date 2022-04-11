PGDMP     4    6                z            lashes    14.2    14.1 "    ,           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            -           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            .           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            /           1262    16801    lashes    DATABASE     [   CREATE DATABASE lashes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE lashes;
                postgres    false            >           1247    18325    Role    TYPE     A   CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'CLIENT'
);
    DROP TYPE public."Role";
       public          postgres    false            �            1259    18313    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    18337    availability    TABLE     �   CREATE TABLE public.availability (
    "availabilityID" text NOT NULL,
    date timestamp(6) without time zone NOT NULL,
    "startTime" timestamp(6) without time zone NOT NULL,
    "endTime" timestamp(6) without time zone NOT NULL
);
     DROP TABLE public.availability;
       public         heap    postgres    false            �            1259    18351    booking    TABLE     �  CREATE TABLE public.booking (
    "bookingID" text NOT NULL,
    date timestamp(6) without time zone NOT NULL,
    "startTime" timestamp(6) without time zone NOT NULL,
    "endTime" timestamp(6) without time zone NOT NULL,
    "firstService" character varying(50),
    "secondService" character varying(50),
    "thirdService" character varying(50),
    "fourthService" character varying(50),
    "fifthService" character varying(50)
);
    DROP TABLE public.booking;
       public         heap    postgres    false            �            1259    18344    bookingList    TABLE     }   CREATE TABLE public."bookingList" (
    "bookingListID" text NOT NULL,
    "userUserID" text,
    "bookingBookingID" text
);
 !   DROP TABLE public."bookingList";
       public         heap    postgres    false            �            1259    18358 	   changelog    TABLE       CREATE TABLE public.changelog (
    "changelogID" text NOT NULL,
    "dateCreated" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "dateChanged" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    "userUserID" text,
    "bookingBookingID" text
);
    DROP TABLE public.changelog;
       public         heap    postgres    false            �            1259    18329    user    TABLE     �  CREATE TABLE public."user" (
    "userID" text NOT NULL,
    "firstName" character varying(200) NOT NULL,
    "lastName" character varying(200) NOT NULL,
    "dateOfBirth" date NOT NULL,
    email character varying(200) NOT NULL,
    username character varying(200) NOT NULL,
    password character varying(255) NOT NULL,
    roles public."Role" DEFAULT 'CLIENT'::public."Role" NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false    830    830            $          0    18313    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   ,       &          0    18337    availability 
   TABLE DATA           V   COPY public.availability ("availabilityID", date, "startTime", "endTime") FROM stdin;
    public          postgres    false    211   �,       (          0    18351    booking 
   TABLE DATA           �   COPY public.booking ("bookingID", date, "startTime", "endTime", "firstService", "secondService", "thirdService", "fourthService", "fifthService") FROM stdin;
    public          postgres    false    213   �-       '          0    18344    bookingList 
   TABLE DATA           Z   COPY public."bookingList" ("bookingListID", "userUserID", "bookingBookingID") FROM stdin;
    public          postgres    false    212   �.       )          0    18358 	   changelog 
   TABLE DATA           r   COPY public.changelog ("changelogID", "dateCreated", "dateChanged", "userUserID", "bookingBookingID") FROM stdin;
    public          postgres    false    214   /       %          0    18329    user 
   TABLE DATA           t   COPY public."user" ("userID", "firstName", "lastName", "dateOfBirth", email, username, password, roles) FROM stdin;
    public          postgres    false    210   "/       �           2606    18321 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    18343    availability availability_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.availability
    ADD CONSTRAINT availability_pkey PRIMARY KEY ("availabilityID");
 H   ALTER TABLE ONLY public.availability DROP CONSTRAINT availability_pkey;
       public            postgres    false    211            �           2606    18350    bookingList bookingList_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."bookingList"
    ADD CONSTRAINT "bookingList_pkey" PRIMARY KEY ("bookingListID");
 J   ALTER TABLE ONLY public."bookingList" DROP CONSTRAINT "bookingList_pkey";
       public            postgres    false    212            �           2606    18357    booking booking_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY ("bookingID");
 >   ALTER TABLE ONLY public.booking DROP CONSTRAINT booking_pkey;
       public            postgres    false    213            �           2606    18366    changelog changelog_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT changelog_pkey PRIMARY KEY ("changelogID");
 B   ALTER TABLE ONLY public.changelog DROP CONSTRAINT changelog_pkey;
       public            postgres    false    214            �           2606    18336    user user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("userID");
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    210            �           1259    18370    availability_availabilityID_key    INDEX     m   CREATE UNIQUE INDEX "availability_availabilityID_key" ON public.availability USING btree ("availabilityID");
 5   DROP INDEX public."availability_availabilityID_key";
       public            postgres    false    211            �           1259    18371    bookingList_bookingListID_key    INDEX     k   CREATE UNIQUE INDEX "bookingList_bookingListID_key" ON public."bookingList" USING btree ("bookingListID");
 3   DROP INDEX public."bookingList_bookingListID_key";
       public            postgres    false    212            �           1259    18372    booking_bookingID_key    INDEX     Y   CREATE UNIQUE INDEX "booking_bookingID_key" ON public.booking USING btree ("bookingID");
 +   DROP INDEX public."booking_bookingID_key";
       public            postgres    false    213            �           1259    18373    changelog_changelogID_key    INDEX     a   CREATE UNIQUE INDEX "changelog_changelogID_key" ON public.changelog USING btree ("changelogID");
 /   DROP INDEX public."changelog_changelogID_key";
       public            postgres    false    214            �           1259    18368    user_email_key    INDEX     I   CREATE UNIQUE INDEX user_email_key ON public."user" USING btree (email);
 "   DROP INDEX public.user_email_key;
       public            postgres    false    210            �           1259    18367    user_userID_key    INDEX     O   CREATE UNIQUE INDEX "user_userID_key" ON public."user" USING btree ("userID");
 %   DROP INDEX public."user_userID_key";
       public            postgres    false    210            �           1259    18369    user_username_key    INDEX     O   CREATE UNIQUE INDEX user_username_key ON public."user" USING btree (username);
 %   DROP INDEX public.user_username_key;
       public            postgres    false    210            �           2606    18379 -   bookingList bookingList_bookingBookingID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."bookingList"
    ADD CONSTRAINT "bookingList_bookingBookingID_fkey" FOREIGN KEY ("bookingBookingID") REFERENCES public.booking("bookingID") ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public."bookingList" DROP CONSTRAINT "bookingList_bookingBookingID_fkey";
       public          postgres    false    212    3473    213            �           2606    18374 '   bookingList bookingList_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."bookingList"
    ADD CONSTRAINT "bookingList_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public."bookingList" DROP CONSTRAINT "bookingList_userUserID_fkey";
       public          postgres    false    210    212    3462            �           2606    18389 )   changelog changelog_bookingBookingID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_bookingBookingID_fkey" FOREIGN KEY ("bookingBookingID") REFERENCES public.booking("bookingID") ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_bookingBookingID_fkey";
       public          postgres    false    3473    214    213            �           2606    18384 #   changelog changelog_userUserID_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.changelog
    ADD CONSTRAINT "changelog_userUserID_fkey" FOREIGN KEY ("userUserID") REFERENCES public."user"("userID") ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.changelog DROP CONSTRAINT "changelog_userUserID_fkey";
       public          postgres    false    210    214    3462            $   �   x�m�1
�0��99E��'�u�C��"�6d���Ӥs��/����[�%�M��i�3��L�xL��� ����P�52�TH�ͭ["V(������Љ�9�$�і�e^��I��~/	4#��x�i^��'��}���w�.�      &   �   x����Q1E��(:QZmib��5�� C�*�^IQ�9���J�P��EV��!�FQ������/Kӭ4���V3h��ZYtՉy��P@.�b'�+��A�ң;�\�hA��xt6]y��y'۵�4xeqeD�kz_��:��k@��7C�帾#;���r����A�W�֌J2 D�Kv�3�Q�b��������{��-��")g�      (   �   x���;n1D��{�>��iҺ�(	H�"�lg���D��z�P�&S�21A�<�M���8k�Ԉ^P9Bĥ-��U�f緣�1G�"���� �eM�5w�����Q �1���3���>>�>|lx)�/��]F��*f3(�L…�����qÌ0ݵ�n)=��o����N50IOb
�1A�ݠ�>��2�'�r�[��Kw�7&[ʏl���Շj8���fm)      '   f   x���I1���ˤ|�:H�~$��!� Z���Q_t{�b��i���y����T7�T鈕��3ݩ���sa,2P�Aϼ�]v1oeʿ���Z��(�      )      x������ � �      %   �  x�M�9s�0 �Z��-�ʑdY���
�����.�=�N��_�J6�0�B�5��3���1�`��U�a�%�
�P���]	Ev�,hQ	�W�s[�l��.�Qw�ݽ��v�{�vZT{4��Q69���a��_��ѫ�ò��:ϒg��M�I�B+����
$�$��T�L��h�X����m�u� � "� ྚ���ʚw�c����n��FI��ᩭ�[��Y���mV��t���ݪ�t��~�lQN$�V@�#)%
�Ch�eJŌ�B��=.`,?�ף�>ߘ>�U��7b��-7��}Љ��6�L���K�.e�G��%�M9�O���{(���5bPJAJ��"��H�Z�#.�8s�,����I	���|C��W��������8����{���&x���"_;��)+祐I=&n�t�F^G���KQCT�kh��c)�F`�f��0�����a�iboD>�ߕʭ>���"s����?A���X��     